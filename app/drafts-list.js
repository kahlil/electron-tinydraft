const React = require('react');
const Draft = require('./Draft');

const Component = React.Component;

class DraftsList extends Component {
  render() {
    const drafts = this.props.data.map(draft => {
      return React.createElement(
        Draft,
        { key: draft.id, id: draft.id },
        draft.text
      );
    });

    return React.createElement(
      'div',
      { className: 'drafts-list' },
      drafts
    );
  }
}

DraftsList.propTypes = {
  data: React.PropTypes.array
};

module.exports = DraftsList;
//# sourceMappingURL=drafts-list.js.map