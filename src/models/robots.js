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
];