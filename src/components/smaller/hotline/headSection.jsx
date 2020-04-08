import React, { Component } from 'react';
import { headTitle } from '../../helpers';
import { animateScroll } from 'react-scroll';

class headSection extends Component {
    state = {
        title: {
            text: 'HOTLINE',
            subtitle: 'Layanan Panggilan Darurat',
            icon: 'phone',
        }
    }
    componentDidMount() { animateScroll.scrollToTop(); }

    render() {
        return (
            <React.Fragment>
                { headTitle(this.state.title) }
            </React.Fragment>
        )
    }
}

export default headSection
