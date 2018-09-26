import React, { Component } from 'react';
import Logo from './ch_logo';// card header logo
import Rect from './ch_rect';
import Text from './text';

class CardHeader extends Component {
    render() {
        return (
            <div className="col-xs-10" id="header">
                <Logo />
                <Text />
                <Rect />
            </div>
        );
    }
}

export default CardHeader;