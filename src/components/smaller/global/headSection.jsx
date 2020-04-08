import React, { Component } from 'react';
import { ModSegment, LastUpdated } from '../../../styled';
import { Grid } from 'semantic-ui-react';
import { headTitle, InfoStatus } from '../../helpers';
import axios from 'axios';
import { timeConverter } from '../../helpers';
import { animateScroll } from 'react-scroll';

class headSection extends Component {
    state = {
        dataGlobal: null,
        updated: '',
        title: {
            text: 'GLOBAL',
            subtitle: 'Data Persebaran Covid-19 di Dunia',
            icon: 'world',
        }
    }

    componentWillUnmount() { this.mounted = false; }
    componentDidMount = async () => {
        animateScroll.scrollToTop();
        this.mounted = true;
        let global = await axios.get('https://corona.lmao.ninja/all');
        if (global && this.mounted) {
            const date = timeConverter(global.data.updated, 'short');
            this.setState({ dataGlobal: global.data, updated: date })
        }
    }

    setStatus = () => {
        const { dataGlobal, updated } = this.state;
        return (
            <div style={{ position: 'relative' }}>
                <LastUpdated>Terakhir diperbarui: { updated }</LastUpdated>
                <Grid stackable columns={3} style={{ marginBottom: 32 }}>
                    <Grid.Column>
                        <ModSegment inverted color="orange">
                            { InfoStatus(dataGlobal, 'Total Positif') }
                        </ModSegment>
                    </Grid.Column>
                    <Grid.Column>
                        <ModSegment inverted color="teal">
                            { InfoStatus(dataGlobal, 'Total Sembuh') }
                        </ModSegment>
                    </Grid.Column>
                    <Grid.Column>
                        <ModSegment inverted color="purple">
                            { InfoStatus(dataGlobal, 'Total Meninggal') }
                        </ModSegment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                { headTitle(this.state.title) }
                { this.setStatus() }
            </React.Fragment>
        )
    }

}

export default headSection
