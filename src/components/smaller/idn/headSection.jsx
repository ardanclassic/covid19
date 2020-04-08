import React, { Component } from 'react';
import axios from 'axios';
import { InfoStatus } from '../../helpers';
import { ModSegment, HeadSection, LastUpdated } from '../../../styled';
import { Header, Divider, Grid } from 'semantic-ui-react';
import { timeConverter } from '../../helpers';

class headSection extends Component {
    state = {
        infoData: null,
        idFlag: null,
        updated: '',
    }

    componentWillUnmount() { this.mounted = false; }
    componentDidMount = async () => {
        this.mounted = true;
        let indonesia = await axios.get('https://corona.lmao.ninja/countries/indonesia');
        if (indonesia && this.mounted) {
            const date = timeConverter(indonesia.data.updated, 'short');
            this.setState({ 
                infoData: indonesia.data,
                idFlag: indonesia.data.countryInfo.flag,
                updated: date,
            })
        }
    }

    setStatus = () => {
        const { infoData, updated } = this.state;
        return (
            <div style={{ position: 'relative' }}>
                <LastUpdated>Terakhir diperbarui: { updated }</LastUpdated>
                <Grid stackable columns={3} style={{ marginBottom: 32 }}>
                    <Grid.Column>
                        <ModSegment inverted color="orange">
                            { InfoStatus(infoData, 'Total Positif') }
                        </ModSegment>
                    </Grid.Column>
                    <Grid.Column>
                        <ModSegment inverted color="teal">
                            { InfoStatus(infoData, 'Total Sembuh') }
                        </ModSegment>
                    </Grid.Column>
                    <Grid.Column>
                        <ModSegment inverted color="purple">
                            { InfoStatus(infoData, 'Total Meninggal') }
                        </ModSegment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <HeadSection>
                    <Header as='h2'>
                        <span><img src={this.state.idFlag} alt="" /></span> INDONESIA
                        <Header.Subheader>
                            Data Persebaran Covid-19 di Indonesia
                        </Header.Subheader>
                    </Header>
                    <Divider />
                </HeadSection>

                { this.setStatus() }
            </React.Fragment>
        )
    }
}

export default headSection
