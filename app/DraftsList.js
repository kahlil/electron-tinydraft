import React, { Component } from 'react';
import './Draft.css';
import Draft from './Draft';

class DraftsList extends Component {
	render() {
		const drafts = this.props.data.map(draft => {
			return (
				<Draft key={draft.key}>
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

export default DraftsList;
