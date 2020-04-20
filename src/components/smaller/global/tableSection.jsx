import React, { Component } from 'react';
import { CountryTable, CaseSection } from '../../../styled';
import { Table, Label, Divider } from 'semantic-ui-react';
import { cellAdjust, LoadTable, NumFormat } from '../../helpers';
import axios from 'axios';

class tableSection extends Component {
    state = {
        LMAOCountry: [],
        status: 'all'
    };

    componentWillUnmount() { this.mounted = false; }
    componentDidMount = async () => {
        this.mounted = true;
        let countries = await axios.get('https://corona.lmao.ninja/v2/countries?sort=country');
        if (countries && this.mounted) this.setState({ LMAOCountry: countries.data })
    }

    clickLabel = (id) => { this.setState({ status: id }) }

    setData = (redata, id) => {
        if (id === 'all') {
            redata.sort((a, b) => ((b.cases) - (a.cases)));
        } else if (id === 'recovered') {
            redata.sort((a, b) => ((b.recovered) - (a.recovered)));
        } else {
            redata.sort((a, b) => ((b.deaths) - (a.deaths)));
        }
        
        return redata.map((data, i=1) => {
            if (data.country !== 'World') {
                return (
                    <Table.Row key={ data.country } negative={ data.country === 'Indonesia' ? true : false }>
                        <Table.Cell>{ i + 1 }</Table.Cell>
                        <Table.Cell><img src={ data.countryInfo.flag } alt="country-flag"/></Table.Cell>
                        { cellAdjust(data.country) }
                        <Table.Cell>{ NumFormat(data.cases) }</Table.Cell>
                        <Table.Cell>{ NumFormat(data.active) }</Table.Cell>
                        <Table.Cell>{ NumFormat(data.recovered) }</Table.Cell>
                        <Table.Cell>{ NumFormat(data.deaths) }</Table.Cell>
                    </Table.Row>
                )
            } else {
                return false
            }
        })
    }

    setTable = (id) => {
        const { LMAOCountry } = this.state;
        if (LMAOCountry.length > 0) {
            return (
                <Table selectable unstackable celled basic='very' >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>###</Table.HeaderCell>
                            <Table.HeaderCell>Negara</Table.HeaderCell>
                            <Table.HeaderCell>Positif</Table.HeaderCell>
                            <Table.HeaderCell>Aktif</Table.HeaderCell>
                            <Table.HeaderCell>Sembuh</Table.HeaderCell>
                            <Table.HeaderCell>Meninggal</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                
                    <Table.Body>
                        { this.setData(LMAOCountry, id) }
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
                <h2 style={{textAlign: 'left'}}>Data Global</h2>
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
                <CountryTable>
                    { this.setTable(this.state.status) }
                </CountryTable>
            </React.Fragment>
        )
    }

}

export default tableSection
