'use strict';

var React = require('react');
var classnames = require('classnames');

class ChildButton extends React.Component {
  render() {
    var iconClass = classnames('mfb-component__child-icon', this.props.icon);
    var className = classnames('mfb-component__button--child', this.props.className);
    return (
      <li>
        <a href={this.props.href}
           data-mfb-label={this.props.label}
           onClick={this.props.onClick}
           className={className}>
          {this.props.children ||
            <i className={iconClass}></i>
          }
        </a>
      </li>
    );
  }
}

module.exports = ChildButton;
