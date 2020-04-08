import React, { Component } from 'react';
import { headTitle } from '../../helpers';

class headSection extends Component {
    state = {
        title: {
            text: 'INFORMASI',
            subtitle: 'Sumber Informasi, Berita, dan Data API Seputar Coronavirus',
            icon: 'book',
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
