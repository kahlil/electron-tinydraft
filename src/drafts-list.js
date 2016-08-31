const React = require('react');
const Draft = require('./Draft');

const Component = React.Component;

class DraftsList extends Component {
  render() {
    const drafts = this.props.data.map(draft => {
      return (
        <Draft key={draft.id} id={draft.id}>
          {draft.text}
        </Draft>
      );
    });

    return (
      <div className="drafts-list">
        {drafts}
      </div>
    );
  }
}

DraftsList.propTypes = {
  data: React.PropTypes.array
};

module.exports = DraftsList;
