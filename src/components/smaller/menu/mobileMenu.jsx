import React, { Component } from 'react';
import './mobstyle.css';
import { Link } from 'react-router-dom';
import { Icon, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setVisible } from '../../redux/action';

class mobileMenu extends Component {
    closeMenu = () => this.props.setVisible('0')

    render() {
        const { showMenu } = this.props;
        return (
            <div id="myNav" className="overlay" style={{ width: showMenu }}>
                <div className="overlay-content">
                    <div><Link to='/' onClick={ this.closeMenu }>Global</Link></div>
                    <Divider />
                    <div><Link to='/indonesia' onClick={ this.closeMenu }>Indonesia</Link></div>
                    <Divider />
                    <div><Link to='/compare' onClick={ this.closeMenu }>Compare</Link></div>
                    <Divider />
                    <div><Link to='/hotline' onClick={ this.closeMenu }>Hotline</Link></div>
                    <Divider />
                    <div><Link to='/resource' onClick={ this.closeMenu }>Informasi</Link></div>
                </div>
                <div className="closebtn" onClick={ this.closeMenu }>
                    <Icon name="close" />
                </div>
            </div>
        )
    }
}


const reduxState = (state) => ({
    showMenu: state.showMenu,
})

const reduxDispatch = (dispatch) => ({
    setVisible : (data) => dispatch(setVisible(data)),
})

export default connect(reduxState, reduxDispatch)(mobileMenu);