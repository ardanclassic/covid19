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
                        <Route exact path="/" component={ globalPage } />
                        <Route exact path="/indonesia" component={ idnPage } />
                        <Route exact path="/compare" component={ compPage } />
                        <Route exact path="/hotline" component={ HotlinePage } />
                        <Route exact path="/resource" component={ SourcePage } />
                    </Switch>
                </Container>
                <Footmask />
            </Router>
        )
    }
}

export default main;