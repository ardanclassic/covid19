import React, { Component, createContext } from 'react';
import axios from 'axios';

export const DataSource = createContext();

class DataContext extends Component {
    state = {
        dataGlobal: [],
        dataIndonesia: [],
        dataRIProvinsi: [],
        dataPositif: null,
        dataSembuh: null,
        dataMeninggal: null,
        LMAOGlobal: [],
        LMAOCountry: [],
        LMAOCountryName: [],
        LMAOStatIndonesia: []
    }

    componentDidMount = () => {
        axios.get('/global').then(res => this.setState({ dataGlobal: res.data }))
        axios.get('/indonesia').then(res => this.setState({ dataIndonesia: res.data }))
        axios.get('/provinsi').then(res => this.setState({ dataRIProvinsi: res.data }))
        axios.get('/positif').then(res => this.setState({ dataPositif: res.data }))
        axios.get('/sembuh').then(res => this.setState({ dataSembuh: res.data }))
        axios.get('/meninggal').then(res => this.setState({ dataMeninggal: res.data }))
        axios.get('/LMAO/global').then(res => this.setState({ LMAOGlobal: [res.data] }))
        axios.get('/LMAO/countries').then(res => this.setState({ LMAOCountry: res.data }))
        axios.get('/LMAO/statistic/id').then(res => this.setState({ LMAOStatIndonesia: [res.data] }))
    }

    render() {
        return (
            <DataSource.Provider value={{ ...this.state }}>
                { this.props.children }
            </DataSource.Provider>
        )
    }
}

export default DataContext
