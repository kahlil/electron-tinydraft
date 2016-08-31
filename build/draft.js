const React = require('react');
const Component = require('react').Component;

class Draft extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'draft' },
      React.createElement(
        'div',
        { className: 'draft__text' },
        'id: ',
        this.props.id,
        React.createElement('br', null),
        'text: ',
        this.props.children
      ),
      React.createElement(
        'div',
        { className: 'draft__meta' },
        React.createElement(
          'div',
          { className: 'draft__date' },
          'Dec 5th'
        ),
        React.createElement(
          'div',
          { className: 'draft__tweet' },
          'tweet'
        ),
        React.createElement(
          'div',
          { className: 'draft__edit' },
          'edit'
        ),
        React.createElement(
          'div',
          { className: 'draft__star' },
          '★'
        )
      )
    );
  }
}

Draft.propTypes = { id: React.PropTypes.number };

module.exports = Draft;
//# sourceMappingURL=draft.js.map