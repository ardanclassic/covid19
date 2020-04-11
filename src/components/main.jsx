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
                        <Route exact path='/'component={ idnPage } />
                        <Route path='/global' component={ globalPage } />
                        <Route path='/compare' component={ compPage } />
                        <Route path='/hotline' component={ HotlinePage } />
                        <Route path='/resource' component={ SourcePage } />
                    </Switch>
                </Container>
                <Footmask />
            </React.Fragment>
        )
    }
}

export default main;