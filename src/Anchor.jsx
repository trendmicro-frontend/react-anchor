import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

const isTrivialHref = (href) => {
    return (!href || href.trim() === '#');
};

class Anchor extends Component {
    static propTypes = {
        href: PropTypes.string,
        style: PropTypes.object,
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        role: PropTypes.string,
        tabIndex: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        componentClass: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string
        ])
    };

    actions = {
        handleClick: (event) => {
            const { disabled, href, onClick } = this.props;

            if (disabled || isTrivialHref(href)) {
                event.preventDefault();
            }

            if (disabled) {
                event.stopPropagation();
                return;
            }

            if (onClick) {
                onClick(event);
            }
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        let { href, role, tabIndex, componentClass, style, ...props } = this.props;
        const Component = componentClass || 'a';

        if (isTrivialHref(href)) {
            role = role || 'button';
            href = href || '';
        }

        if (this.props.disabled) {
            tabIndex = -1;
            style = {
                pointerEvents: 'none',
                ...style
            };
        }

        return (
            <Component
                {...props}
                role={role}
                href={href}
                style={style}
                tabIndex={tabIndex}
                onClick={this.actions.handleClick}
            />
        );
    }
}

export default Anchor;
