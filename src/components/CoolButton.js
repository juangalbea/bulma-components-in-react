/* eslint-disable no-sequences */
import React, { Component } from 'react';

const bulmaClasses = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white',
    marginButton: 'margin-button', // Added after
    font5: 'is-size-5' // Added after
  }
  

class CoolButton extends Component {

    constructor(props) {
        // eslint-disable-next-line no-unused-expressions
        super(props),
        this.classes = Object.keys(props).map(property => bulmaClasses[property]).join(' ');
      }

    render() {
        return (
            <div>
                <button className={"button " + this.classes }>{this.props.children}</button>
            </div>
        );
    }
}

export default CoolButton;