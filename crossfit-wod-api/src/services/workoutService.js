const Workout = require('../database/Workout');

const getAllWorkouts = () => {
	const allWorkouts = Workout.getAllWorkouts();
	return allWorkouts;
};

const getOneWorkouts = () => {
	return;
};

const createNewWorkouts = () => {
	return;
};

const updateOneWorkouts = () => {
	return;
};

const deteleOneWorkouts = () => {
	return;
};

module.exports = {
	getAllWorkouts,
	getOneWorkouts,
	createNewWorkouts,
	updateOneWorkouts,
	deteleOneWorkouts,
};
