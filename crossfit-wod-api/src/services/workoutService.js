const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

const getAllWorkouts = () => {
	const allWorkouts = Workout.getAllWorkouts();
	return allWorkouts;
};

const getOneWorkouts = () => {
	return;
};

const createNewWorkouts = () => {
	const workoutToInsert = {
		...createNewWorkouts,
		id: uuid(),
		createAt: new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }),
		updateAt: new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }),
	};
	const createdWorkout = Workout.createNewWorkout(workoutToInsert);
	return createdWorkout;
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
