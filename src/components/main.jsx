import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { globalPage, idnPage, compPage, HotlinePage, SourcePage } from './wrapper';
import Headnav from './smaller/menu/mainMenu';
import Footmask from './footmask';
import MobileMenu from './smaller/menu/mobileMenu';

class main extends Component {
    render() {
        return (
            <React.Fragment>
                <Headnav />
                <MobileMenu />
                <Container className='main-container'>
                    <Switch>
                        <Route exact path={ process.env.PUBLIC_URL + '/' } component={ globalPage } />
                        <Route path={ process.env.PUBLIC_URL + '/indonesia' } component={ idnPage } />
                        <Route path={ process.env.PUBLIC_URL + '/compare' } component={ compPage } />
                        <Route path={ process.env.PUBLIC_URL + '/hotline' } component={ HotlinePage } />
                        <Route path={ process.env.PUBLIC_URL + '/resource' } component={ SourcePage } />
                    </Switch>
                </Container>
                <Footmask />
            </React.Fragment>
        )
    }
}

export default main;