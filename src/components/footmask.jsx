import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { FootMask } from '../styled';

class footmask extends Component {
    render() {
        return (
            <FootMask>
                <h4>Made with 
                    <span> &#10084; </span> by 
                    <span> Akbar Rahadian</span>
                    <span>&#8213;&#8213;</span>
                    <a href="https://www.instagram.com/ibnshadiq/" 
                        target="_blank" rel="noopener noreferrer">
                        <Icon name='instagram' />
                    </a>
                    <a href="https://www.facebook.com/ardan.classic" 
                        target="_blank" rel="noopener noreferrer">
                        <Icon name='facebook f' />
                    </a>
                </h4>
            </FootMask>
        )
    }
}

export default footmask
