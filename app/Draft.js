import React, { Component } from 'react';
import './Draft.css';

class Draft extends Component {
  render() {
    return (
			<div className="draft">
				<div className="draft__text">
					id: { this.props.key }<br/>
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

export default Draft;
