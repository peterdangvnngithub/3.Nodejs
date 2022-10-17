const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

const getAllWorkouts = () => {
	const allWorkouts = Workout.getAllWorkouts();
	return allWorkouts;
};

const getOneWorkouts = (workoutId) => {
	const workout = Workout.getOneWorkouts(workoutId);
	return workout;
};

const createNewWorkouts = () => {
	const workoutToInsert = {
		...createNewWorkouts,
		id: uuid(),
		createAt: new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }),
		updateAt: new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }),
	};
	try {
		const createdWorkout = Workout.createNewWorkout(workoutToInsert);
		return createdWorkout;
	} catch (error) {
		throw error;
	}
};

const updateOneWorkouts = (workoutId, changes) => {
	const updatedWorkout = Workout.updateOneWorkouts(workoutId, changes);
	return updatedWorkout;
};

const deteleOneWorkouts = (workoutId) => {
	Workout.deteleOneWorkouts(workoutId);
};

module.exports = {
	getAllWorkouts,
	getOneWorkouts,
	createNewWorkouts,
	updateOneWorkouts,
	deteleOneWorkouts,
};
