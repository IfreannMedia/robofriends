export class Robot {

	constructor(id, name, username, email){
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		console.log('created: ' + this.name);
	}
}

export const robots = [
	new Robot(1, 'Robocop', 'peaceProtector','photoshop@gmail.com'),
	new Robot(2, 'Doctor Octopus', 'doc0c','doc0c@gmail.com'),
	new Robot(3, 'Wall-E', 'Wall-E','Wall-E@gmail.com'),
	new Robot(4, 'Pan', 'fyyingPan','notAR0b0T@gmail.com'),
	new Robot(5, 'Exterminator', 'MrFriendly','MrFriendly@gmail.com'),
	new Robot(6, 'RobotDevil', 'Luc1f3r','Luc1f3r@gmail.com'),
	new Robot(7, 'Nicholas Runolfsdottir V', 'Maxime_Nienow', 'Sherwood@rosamond.me'),
	new Robot(8, 'Glenna Reichert', 'Delphine', 'Chaim_McDermott@dana.io'),
	new Robot(9, 'Clementina DuBuque', 'Moriah.Stanton', 'Rey.Padberg@karina.biz'),
	new Robot(10, 'Mrs. Dennis Schulist', 'Leopoldo_Corkery', 'Karley_Dach@jasper.info'),
];