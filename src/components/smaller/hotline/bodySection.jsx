import React, { Component } from 'react';
import { Segment, Grid, Card, Image, Divider } from 'semantic-ui-react';
import { items } from './data';

class bodySection extends Component {
    
    loopCard = () => {
        return items.map(res => {
            return (
                <Grid.Column key={ res.id } mobile={8} tablet={5} computer={4}>
                    <Card>
                        <Card.Content>
                            <Image height={80} src={ res.logo } alt="logo" />
                            <Divider />
                            <Card.Header as='a' href={ res.link }>
                                <span id="call">{ res.header }</span>
                            </Card.Header>
                            <Card.Description>
                                { res.description }
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Segment placeholder style={{ minHeight: 50 }}>
                    Layanan darurat via telepon yang disediakan oleh 
                    instansi pemerintah pusat dan daerah
                </Segment>
                <Grid>{ this.loopCard() }</Grid>
            </React.Fragment>
        )
    }
}

export default bodySection
