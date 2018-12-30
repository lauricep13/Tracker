import React from 'react';
import namor from 'namor';

const range = len => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};

const newSeller = () => {
	return {
		id: namor.generate({ integer: 0, numbers: 1 }),
		Name: namor.generate({ words: 1, numbers: 0 }),
		CellNumber: namor.generate({ integer: 2, numbers: 3 }),
		LeadStatus: Math.floor(Math.random() * 30),
		Communicationstatus: Math.floor(Math.random() * 100),
		IsNameVerified: Math.random() > 0.66 ? true : false
	};
};

export function makeData(len = 5553) {
	return range(len).map(d => {
		return {
			...newSeller()
		};
	});
}

export const Tips = () => (
	<div style={{ textAlign: 'center' }}>
		<em>Tip: Hold shift when sorting to multi-sort!</em>
	</div>
);
