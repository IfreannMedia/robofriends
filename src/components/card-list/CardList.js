import React from 'react';
import Card from '../..//components/card/Card';

const CardList = ({robots}) => {
	return(
		<div>
		{robots.map(r => <Card key={r.id} robot={r} />)}
		</div>)
}

export default CardList