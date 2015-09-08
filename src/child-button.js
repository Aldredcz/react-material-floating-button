'use strict';

var React = require('react');
var classnames = require('classnames');

var ChildButton = React.createClass({
  render: function(){
    var iconClass = 'mfb-component__child-icon ' + this.props.icon,
        className = classnames('mfb-component__button--child', this.props.className);
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
});

module.exports = ChildButton;
