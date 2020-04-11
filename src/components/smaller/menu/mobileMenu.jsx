import React, { Component } from 'react';
import './mobstyle.css';
import { Link } from 'react-router-dom';
import { Icon, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setVisible } from '../../redux/action';

class mobileMenu extends Component {
    state = {
        activeItem: '',
    }

    componentDidMount() {
        const path = (window.location.pathname).slice(1);
        if (path === '') this.setState({ activeItem: 'indonesia' });
        else this.setState({ activeItem: path });
    }
    
    closeMenu = (path) => {
        if (path !== '') this.setState({ activeItem: path })
        this.props.setVisible('0')
    }

    render() {
        const { showMenu } = this.props;
        const { activeItem } = this.state;

        return (
            <div id="myNav" className="overlay" style={{ width: showMenu }}>
                <div className="overlay-content">
                    <div className={ activeItem === 'indonesia' ? 'mobmenu-active' : '' }>
                        <Link to='/' onClick={ () => this.closeMenu('indonesia') }>Indonesia</Link>
                    </div>
                    <Divider />
                    <div className={ activeItem === 'global' ? 'mobmenu-active' : '' }>
                        <Link to='/global' onClick={ () => this.closeMenu('global') }>Global</Link>
                    </div>
                    <Divider />
                    <div className={ activeItem === 'compare' ? 'mobmenu-active' : '' }>
                        <Link to='/compare' onClick={ () => this.closeMenu('compare') }>Compare</Link>
                    </div>
                    <Divider />
                    <div className={ activeItem === 'hotline' ? 'mobmenu-active' : '' }>
                        <Link to='/hotline' onClick={ () => this.closeMenu('hotline') }>Hotline</Link>
                    </div>
                    <Divider />
                    <div className={ activeItem === 'resource' ? 'mobmenu-active' : '' }>
                        <Link to='/resource' onClick={ () => this.closeMenu('resource') }>Informasi</Link>
                    </div>
                </div>
                <div className="closebtn" onClick={ () => this.closeMenu('') }>
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