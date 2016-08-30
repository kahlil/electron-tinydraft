import React, { Component } from 'react';
import './App.css';
import DraftsList from './DraftsList';

const data = [
	{
		key: 1,
		text: 'Draft 1',
	},
	{
		key: 2,
		text: 'Draft 2',
	},
	{
		key: 3,
		text: 'Draft 3',
	},
];

class TinyDraft extends Component {
  render() {
    return (
			<div className="tinydraft">
    		<DraftsList data={data} />
			</div>
    );
	}
}

export default TinyDraft;
