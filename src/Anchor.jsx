import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './index.styl';

const isTrivialHref = (href) => {
    return (!href || href.trim() === '#');
};

class Anchor extends PureComponent {
    static propTypes = {
        componentClass: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string
        ]),
        disabled: PropTypes.bool,
        href: PropTypes.string,
        onClick: PropTypes.func,
        role: PropTypes.string,
        style: PropTypes.object,
        tabIndex: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        underline: PropTypes.oneOf([
            'always',   // Always display underline
            'none',     // Always not display underline
            'normal'    // Default hide underline, and show it when mouse hovered or focused.
        ])
    };

    static defaultProps = {
        underline: 'normal',
        componentClass: 'a'
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

    render() {
        let {
            className,
            href,
            role,
            tabIndex,
            componentClass,
            style,
            underline,
            ...props
        } = this.props;
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
                className={classNames(
                    className,
                    styles.default,
                    { [styles.displayUnderline]: underline === 'always' },
                    { [styles.removeUnderline]: underline === 'none' }
                )}
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
