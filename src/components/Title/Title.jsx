import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

class Title extends Component {
    render () {
        const { title, subtitle, children, icon } = this.props;
        const content = icon ? [<Icon name={icon} />] : [];
        if (title)
            content.push(
                <h1 key="title">
                    {title}
                </h1>
            );

        if (subtitle) {
            content.push(
                <h2 key="subtitle" className="subtitle">
                    {subtitle}
                </h2>
            );
        }

        content.splice(0, 0, children);
        return (
            <div className="App-title">
                {content}
            </div>
        );
    }
}

export default Title
