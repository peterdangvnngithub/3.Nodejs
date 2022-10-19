const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

const getAllWorkouts = () => {
	try {
		const allWorkouts = Workout.getAllWorkouts();
		return allWorkouts;
	} catch (error) {
		throw error;
	}
};

const getOneWorkouts = (workoutId) => {
	try {
		const workout = Workout.getOneWorkouts(workoutId);
		return workout;
	} catch (error) {
		throw error;
	}
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
	try {
		const updatedWorkout = Workout.updateOneWorkouts(workoutId, changes);
		return updatedWorkout;
	} catch (error) {
		throw error;
	}
};

const deteleOneWorkouts = (workoutId) => {
	try {
		Workout.deteleOneWorkouts(workoutId);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAllWorkouts,
	getOneWorkouts,
	createNewWorkouts,
	updateOneWorkouts,
	deteleOneWorkouts,
};
