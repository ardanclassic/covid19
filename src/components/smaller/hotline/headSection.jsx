import React, { Component } from 'react';
import { headTitle } from '../../helpers';

class headSection extends Component {
    state = {
        title: {
            text: 'HOTLINE',
            subtitle: 'Layanan Panggilan Darurat',
            icon: 'phone',
        }
    }

    render() {
        return (
            <React.Fragment>
                { headTitle(this.state.title) }
            </React.Fragment>
        )
    }
}

export default headSection
