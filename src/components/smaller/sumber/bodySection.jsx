import React, { Component } from 'react';
import { Divider, Grid, Segment, Card } from 'semantic-ui-react';
import { GridApi, TitleSection } from '../../../styled';
import { itemsAPI, newsFirst, dailyNews } from './data';

class bodySection extends Component {

    setInformation = () => {
        return newsFirst.map(res => {
            return (
                <React.Fragment key={ res.id }>
                    <Grid.Column>
                        <a href={ res.link } target="_blank" rel="noopener noreferrer">
                            <Segment inverted color={ res.color }>
                                <h3>{ res.header }</h3>
                                <p>{ res.provider }</p>
                            </Segment>
                        </a>
                    </Grid.Column>
                </React.Fragment>
            )
        })
    }

    setDailyNews = () => {
        return dailyNews.map(res => {
            return (
                <React.Fragment key={ res.id }>
                    <Grid.Column mobile={8} tablet={8} computer={4}>
                        <a href={ res.link } target="_blank" rel="noopener noreferrer">
                            <Segment>
                                <img src={ res.logo } alt="media-logo"/>
                            </Segment>
                        </a>
                    </Grid.Column>
                </React.Fragment>
            )
        })
    }

    setAPI = () => {
        return itemsAPI.map(res => {
            return (
                <React.Fragment key={ res.id }>
                    <Grid.Column mobile={8} tablet={8} computer={4}>
                        <a href={ res.link } target="_blank" rel="noopener noreferrer">
                            <Card fluid color='teal' style={{ padding: 16 }}>
                                <span><img src={ res.logo } alt="logo-api"/> { res.header }</span>
                            </Card>
                        </a>
                    </Grid.Column>
                </React.Fragment>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <GridApi columns={3} doubling stackable>{ this.setInformation() }</GridApi>

                <TitleSection>Berita Harian</TitleSection>
                <Divider />
                <GridApi columns='equal'>{ this.setDailyNews() }</GridApi>

                <TitleSection>Referensi API</TitleSection>
                <Divider />
                <GridApi>{ this.setAPI() }</GridApi>
            </React.Fragment>
        )
    }
}

export default bodySection
