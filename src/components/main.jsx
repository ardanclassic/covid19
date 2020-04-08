import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { globalPage, idnPage, compPage, HotlinePage, SourcePage } from './wrapper';
import Headnav from './smaller/menu/mainMenu';
import Footmask from './footmask';
import MobileMenu from './smaller/menu/mobileMenu';

class main extends Component {
    render() {
        return (
            <Router>
                <Headnav />
                <MobileMenu />
                <Container className='main-container'>
                    <Switch>
                        <Route path="/" component={ globalPage } />
                        <Route path="/indonesia" component={ idnPage } />
                        <Route path="/compare" component={ compPage } />
                        <Route path="/hotline" component={ HotlinePage } />
                        <Route path="/resource" component={ SourcePage } />
                    </Switch>
                </Container>
                <Footmask />
            </Router>
        )
    }
}

export default main;