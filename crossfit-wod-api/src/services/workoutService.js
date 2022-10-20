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

const getOneWorkout = (workoutId) => {
	try {
		const workout = Workout.getOneWorkout(workoutId);
		return workout;
	} catch (error) {
		throw error;
	}
};

const createNewWorkout = () => {
	const workoutToInsert = {
		...createNewWorkout,
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

const updateOneWorkout = (workoutId, changes) => {
	try {
		const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
		return updatedWorkout;
	} catch (error) {
		throw error;
	}
};

const deteleOneWorkout = (workoutId) => {
	try {
		Workout.deteleOneWorkout(workoutId);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createNewWorkout,
	updateOneWorkout,
	deteleOneWorkout,
};
