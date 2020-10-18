import React from 'react';
import './Card.css'

const Card = ({robot}) => {
	return (
		<div className="bg-light-green dib br3 ma2 grow	bw2 shadow-5 tc">
			<img src={`https://robohash.org/${robot.email}?200x200`} alt={robot.name}/>
			<div>
				<h2>{robot.name}</h2>
				<p>{robot.email}</p>
			</div>
		</div>
		);
}

export default Card;