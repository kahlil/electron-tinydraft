const React = require('react');
const Component = require('react').Component;
const DraftsList = require('./drafts-list');

const data = [
  {
    id: 1,
    text: 'Draft 1',
  },
  {
    id: 2,
    text: 'Draft 2',
  },
  {
    id: 3,
    text: 'Draft 3',
  },
];

class TinyDraft extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className="tinydraft">
        <DraftsList data={data} />
      </div>
    );
  }
}

module.exports = TinyDraft;
