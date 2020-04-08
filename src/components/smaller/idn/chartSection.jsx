import React, { Component } from 'react';
import axios from 'axios';
import Chart from "react-apexcharts";
import { Segment, Divider } from 'semantic-ui-react';
import { optionsChart } from '../styledChart';
import { setDataChart } from '../../helpers';

class chartSection extends Component {
    state = {
        x_axis: [],
        series: [],
        options: {
            ...optionsChart,
            colors: ['#ffa500', '#00bfff', '#ff0000'],
        },
    }

    componentWillUnmount() { this.mounted = false; }
    componentDidMount = async () => {
        this.mounted = true;
        let idn = await axios.get('https://covidapi.info/api/v1/country/IDN');
        if (idn && this.mounted) {
            const dateArr = [];
            const timeseries = Object.entries(idn.data.result);
            timeseries.map(re => dateArr.push(re[0]));
            const result = setDataChart(timeseries);
            this.setState({
                series: result.newSeries,
                options: {
                    ...optionsChart,
                    xaxis: { categories: dateArr },
                    yaxis: { min: 0, max: result.maxVal }
                }
            })
        }
    }
    
    render() {
        const { options, series } = this.state;
        return (
            <React.Fragment>
                <h2 style={{textAlign: 'left'}}>Statistik Kasus</h2>
                <Divider />
                <Segment style={{ marginBottom: 48 }}>
                    <Chart options={ options } series={ series } type="line" height={ 350 } />
                </Segment>
            </React.Fragment>
        )
    }
}

export default chartSection;