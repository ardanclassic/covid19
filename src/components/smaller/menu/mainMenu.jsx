import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVisible } from '../../redux/action';
import Covid from '../../../assets/logo/coronavirus.png'
import { Menu, Segment, Container, Button, Responsive } from 'semantic-ui-react';

class Headnav extends Component {
    state = {
        activeItem: '',
    }

    componentDidMount() {
        const path = (window.location.pathname).slice(1);
        if (path === '') this.setState({ activeItem: 'global' });
        else this.setState({ activeItem: path });
    }

    showMenu = () => this.props.setVisible('100%')

    handleItemClick = (e, { id }) => this.setState({ activeItem: id })

    render() {
        const { activeItem } = this.state;
        return (
            <Segment inverted className="headnav">
                <Container>
                    <Menu inverted pointing secondary>
                        <Menu.Menu position='left'>
                            <Menu.Item style={{ padding: 0 }}>
                                <img className='corona-logo' src={Covid} alt=""/>
                            </Menu.Item>
                            <Menu.Item><span className='covid-title'>COVID-19</span></Menu.Item>
                        </Menu.Menu>
                        
                        <Menu.Menu position='right'>
                            <Responsive as={React.Fragment} maxWidth={767}>
                                <Button icon='bars' color='black' onClick={this.showMenu} />
                            </Responsive>
                            <Responsive as={React.Fragment} minWidth={768}>
                                <Menu.Item name='Global' id='global' as={ Link } 
                                    to={ process.env.PUBLIC_URL + '/' }
                                    active={ activeItem === 'global' }
                                    onClick={ this.handleItemClick } />
                                <Menu.Item name='Indonesia' id='indonesia' as={ Link } 
                                    to={ process.env.PUBLIC_URL + '/indonesia' }
                                    active={activeItem === 'indonesia'}
                                    onClick={this.handleItemClick} />
                                <Menu.Item name='Compare' id='compare' as={ Link } 
                                    to={ process.env.PUBLIC_URL + '/compare' }
                                    active={activeItem === 'compare'}
                                    onClick={this.handleItemClick} />
                                <Menu.Item name='Hotline' id='hotline' as={ Link } 
                                    to={ process.env.PUBLIC_URL + '/hotline' }
                                    active={activeItem === 'hotline'}
                                    onClick={this.handleItemClick} />
                                <Menu.Item name='Informasi' id='resource' as={ Link } 
                                    to={ process.env.PUBLIC_URL + '/resource' }
                                    active={activeItem === 'resource'}
                                    onClick={this.handleItemClick} />
                            </Responsive>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Segment>
        )
    }
}

const reduxState = (state) => ({
    showMenu: state.showMenu,
})

const reduxDispatch = (dispatch) => ({
    setVisible : (data) => dispatch(setVisible(data)),
})

export default connect(reduxState, reduxDispatch)(Headnav);
