import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Segment, Divider, Label } from 'semantic-ui-react';
import Chart from "react-apexcharts";
import { optionsChart } from '../styledChart';
import { refreshDispatch, setDataSeries } from '../../redux/action';
import { CaseSection } from '../../../styled';

class chartSection extends Component {
    state = {
        series: [],
        options: {
            ...optionsChart,
            colors: ['#0000FF', '#FF0000'],
        },
        tlc1: [],
        tlc2: [],
        x_axis: [],
        status: 'all'
    }

    componentWillUnmount() { this.mounted = false; }
    componentDidMount = async () => {
        this.mounted = true;
        let gt = await axios.get('https://covidapi.info/api/v1/global/count');
        if (gt && this.mounted) {
            const dateArr = [];
            const timeseries = Object.entries(gt.data.result);
            timeseries.map(re => dateArr.push(re[0]));
            this.setState({ x_axis: dateArr })
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        this.mounted = true;
        const { country_1, country_2 } = this.props;
        const { tlc1, tlc2, x_axis, status } = this.state;
        const pre1 = prevProps.country_1 !== country_1;
        const pre2 = prevProps.country_2 !== country_2;
        const sort = prevState.status !== status;
        const sta1 = prevState.tlc1 !== tlc1;
        const sta2 = prevState.tlc2 !== tlc2;

        if (pre1 || pre2 || sort) {
            if (country_1 && country_2) {
                if (this.mounted) {
                    // this.setDataTimeline(country_1, country_2)
                    const { status } = this.state;
                    let first = await axios.get(`https://covidapi.info/api/v1/country/${country_1.countryInfo.iso3}`);
                    let second = await axios.get(`https://covidapi.info/api/v1/country/${country_2.countryInfo.iso3}`);
                    if (first && second) {
                        const pre = [ first.data.result, second.data.result ]
                        const data = this.props.setDataSeries(pre, status)
                        this.setState({ tlc1: data[0], tlc2: data[1] }); 
                    }
                }
            }
        }
        if (sta1 || sta2 || sort) {
            const conArr = [tlc1, tlc2];
            const maxRow = conArr.map(function(row){ return Math.max.apply(Math, row); });
            const maxVal = Math.max.apply(null, maxRow);

            if (this.mounted) {
                this.setState({ 
                    series: [
                        { name: country_1.country, data: tlc1 },
                        { name: country_2.country, data: tlc2 }
                    ],
                    options: {
                        ...optionsChart,
                        colors: ['#0000FF', '#FF0000'],
                        yaxis: { min: 0, max: maxVal },
                        xaxis: { type: 'datetime', categories: x_axis },
                    }
                })
            }
        }
    }
    
    setDataTimeline = async (a, b) => {
        if (a && b) {
            console.log(a, b)
            const { status } = this.state;
            let first = await axios.get(`https://covidapi.info/api/v1/country/${a.countryInfo.iso3}`);
            let second = await axios.get(`https://covidapi.info/api/v1/country/${b.countryInfo.iso3}`);
            if (first && second) {
                const pre = [ first.data.result, second.data.result ]
                const data = this.props.setDataSeries(pre, status)
                this.setState({ tlc1: data[0], tlc2: data[1] }); 
            }
        }
    }

    showLineChart = () => {
        const { country_1, country_2, showChart } = this.props;
        const { series, options } = this.state;

        if (country_1 && country_2 && showChart) {
            return (
                <React.Fragment>
                    <h2 style={{ textAlign: 'left' }}>Data Statistik</h2>
                    <Divider />
                    { this.showButton() }
                    <Segment style={{ marginBottom: 48 }}>
                        <Chart options={ options } series={ series } type="line" height={ 350 } />
                    </Segment>
                </React.Fragment>
            )
        }
    }

    clickLabel = (id) => { this.setState({ status: id }) }
    showButton = () => {
        return (
            <React.Fragment>
                <CaseSection>
                    <Label content='Positif' onClick={ () => this.clickLabel('all') }
                            className={ this.state.status === 'all' ? 'active' : null } />
                    <Label content='Sembuh' onClick={ () => this.clickLabel('recovered') }
                        className={ this.state.status === 'recovered' ? 'active' : null } />
                    <Label content='Meninggal' onClick={ () => this.clickLabel('death') }
                        className={ this.state.status === 'death' ? 'active' : null } />
                </CaseSection>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                { this.showLineChart() }
            </React.Fragment>
        )
    }
}


const reduxState = (state) => ({
    country_1: state.country_1,
    country_2: state.country_2,
    showChart: state.showChart,
})

const reduxDispatch = (dispatch) => ({
    refreshDispatch : () => dispatch(refreshDispatch()),
    setDataSeries : (data, status) => dispatch(setDataSeries(data, status)),
})

export default connect(reduxState, reduxDispatch)(chartSection);

