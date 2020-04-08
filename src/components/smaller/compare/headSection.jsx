import React, { Component } from 'react';
import axios from 'axios';
import { headTitle, setInfo } from '../../helpers';
import { Dropdown, Grid, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { animateScroll } from 'react-scroll';
import { initCountryName, setCountrySelected, setShowStatus } from '../../redux/action';

class headSection extends Component {
    state = {
        title: {
            text: 'PERBANDINGAN',
            subtitle: 'Komparasi Data Antar Negara',
            icon: 'balance scale',
        },
        showStatus: false,
    }

    componentWillUnmount() { this.mounted = false; }
    componentDidMount = async () => {
        animateScroll.scrollToTop();
        this.mounted = true;
        let countries = await axios.get('https://corona.lmao.ninja/countries?sort=country');
        if (countries && this.mounted) {
            let dtName = [];
            countries.data.map(name => { 
                const dt = {
                    key: name.countryInfo.iso3, 
                    value: name.country, 
                    text: name.country
                }
                return dtName.push(dt) 
            })

            dtName.sort((a, b) => a.text.localeCompare(b.text))
            this.props.initCountryName(dtName)
        }
    }

    componentDidUpdate(prevProps) {
        this.mounted = true;
        const { country_1, country_2 } = this.props;
        const pre1 = prevProps.country_1 !== country_1;
        const pre2 = prevProps.country_2 !== country_2;
        if (pre1 || pre2) {
            if (country_1 && country_2) {
                if (this.mounted) {
                    this.setState({ showStatus: true })
                    this.props.setShowStatus();
                }
            }
        }
    }

    handleChange = (e, { id, value }) => this.props.setCountrySelected(id, value)

    showInfoCountry = () => {
        const { showStatus } = this.state;
        const { country_1, country_2 } = this.props;
        if (showStatus) {
            return (
                <Grid stackable columns={2} style={{ marginBottom: 32 }}>
                    <Grid.Column>{ setInfo(country_1) }</Grid.Column>
                    <Grid.Column>{ setInfo(country_2) }</Grid.Column>
                </Grid>
            )
        }
    }

    setDropdown = () => {
        const { countryList } = this.props;
        if (countryList.length > 0) {
            return (
                <React.Fragment>
                    <Grid stackable columns={2}>
                        <Grid.Column>
                            <Dropdown fluid selection search id={1} onChange={ this.handleChange }
                                placeholder='Pilih negara' options={ countryList } />
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown fluid selection search id={2} onChange={ this.handleChange }
                                placeholder='Pilih negara' options={ countryList } />
                        </Grid.Column>
                    </Grid>
                    { this.showInfoCountry() }
                </React.Fragment>
            )
        } else {
            return <Loader active />
        }
    }

    render() {
        return (
            <React.Fragment>
                { headTitle(this.state.title) }
                { this.setDropdown() }
            </React.Fragment>
        )
    }
}


const reduxState = (state) => ({
    countryList: state.countryList,
    country_1: state.country_1,
    country_2: state.country_2,
})

const reduxDispatch = (dispatch) => ({
    initCountryName : (data) => dispatch(initCountryName(data)),
    setCountrySelected : (id, value) => dispatch(setCountrySelected(id, value)),
    setShowStatus : () => dispatch(setShowStatus()),
})

export default connect(reduxState, reduxDispatch)(headSection);
 