const DB = require('./db.json');
const { saveToDatebase } = require('./utils');

const getAllWorkouts = () => {
	return DB.workouts;
};

const getOneWorkout = (workoutId) => {
	const workout = DB.workouts.findIndex(
		(workout) => workout.id === workoutId
	);
	if (!workout) {
		return;
	}
	return workout;
};

const createNewWorkout = (newWorkout) => {
	const isAlreadyAdded =
		DB.workouts.findIndex((workout) => workout.name === newWorkout.name) >
		-1;

	if (isAlreadyAdded) {
		return;
	}
	DB.workouts.push(newWorkout);

	saveToDatebase();

	return newWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
	const indexForUpdate =
		DB.workouts.findIndex((workout) => workout.name === newWorkout.name) >
		-1;
	if (isAlreadyAdded) {
		return;
	}
};

module.exports = { getAllWorkouts, createNewWorkout };
