const React = require('react');
const Component = require('react').Component;

class Draft extends Component {
  render() {
    return (
      <div className="draft">
        <div className="draft__text">
          id: { this.props.id }<br/>
          text: { this.props.children }
        </div>
        <div className="draft__meta">
          <div className="draft__date">Dec 5th</div>
          <div className="draft__tweet">tweet</div>
          <div className="draft__edit">edit</div>
          <div className="draft__star">★</div>
        </div>
      </div>
    );
  }
}

Draft.propTypes = {id: React.PropTypes.number};

module.exports = Draft;
