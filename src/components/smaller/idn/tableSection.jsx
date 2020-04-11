import React, { Component } from 'react';
import { ProvinsiTable, CaseSection } from '../../../styled';
import { Table, Label, Divider } from 'semantic-ui-react';
import { cellAdjust, LoadTable, NumFormat } from '../../helpers';
import axios from 'axios';

class tableSection extends Component {
    state = {
        dataProvinsi: [],
        status: 'all'
    };

    componentWillUnmount() { this.mounted = false; }
    componentDidMount = async () => {
        this.mounted = true;
        const provinsi = await axios.get('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')

        if (provinsi && this.mounted) {
            const reArrange = (provinsi.data.features).filter(res => {
                return res.attributes.Provinsi !== 'Indonesia'
            })
            this.setState({ dataProvinsi: reArrange })
        }
    }

    clickLabel = (id) => { this.setState({ status: id }) }

    setData = (redata, id) => {
        if (id === 'all') {
            redata.sort((a, b) => ((b.attributes.Kasus_Posi) - (a.attributes.Kasus_Posi)));
        } else if (id === 'recovered') {
            redata.sort((a, b) => ((b.attributes.Kasus_Semb) - (a.attributes.Kasus_Semb)));
        } else {
            redata.sort((a, b) => ((b.attributes.Kasus_Meni) - (a.attributes.Kasus_Meni)));
        }
        
        return redata.map((data, i) => {
            return (
                <Table.Row key={ data.attributes.Kode_Provi }>
                    <Table.Cell>{ i + 1 }</Table.Cell>
                    { cellAdjust(data.attributes.Provinsi) }
                    <Table.Cell>{ NumFormat(data.attributes.Kasus_Posi) }</Table.Cell>
                    <Table.Cell>{ NumFormat(data.attributes.Kasus_Semb) }</Table.Cell>
                    <Table.Cell>{ NumFormat(data.attributes.Kasus_Meni) }</Table.Cell>
                </Table.Row>
            )
        })
    }

    setTable = (id) => {
        const { dataProvinsi } = this.state;
        if (dataProvinsi.length > 0) {
            return (
                <Table selectable unstackable celled basic='very' >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>Provinsi</Table.HeaderCell>
                            <Table.HeaderCell>Positif</Table.HeaderCell>
                            <Table.HeaderCell>Sembuh</Table.HeaderCell>
                            <Table.HeaderCell>Meninggal</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                
                    <Table.Body>
                        { this.setData(dataProvinsi, id) }
                    </Table.Body>
                </Table>
            )
        } else {
            return LoadTable()
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2 style={{textAlign: 'left'}}>Data Provinsi</h2>
                <Divider />
                <div style={{ textAlign: 'left', marginBottom: 8, color: 'grey' }}>
                    Urutkan berdasarkan
                </div>
                <CaseSection>
                    <Label content='Positif' onClick={ () => this.clickLabel('all') }
                            className={ this.state.status === 'all' ? 'active' : null } />
                    <Label content='Sembuh' onClick={ () => this.clickLabel('recovered') }
                        className={ this.state.status === 'recovered' ? 'active' : null } />
                    <Label content='Meninggal' onClick={ () => this.clickLabel('death') }
                        className={ this.state.status === 'death' ? 'active' : null } />
                </CaseSection>

                <ProvinsiTable>
                    { this.setTable(this.state.status) }
                </ProvinsiTable>
            </React.Fragment>
        )
    }
}

export default tableSection
