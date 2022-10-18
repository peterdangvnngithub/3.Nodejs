const DB = require('./db.json');
const { saveToDatebase } = require('./utils');

const getAllWorkouts = () => {
	return DB.workouts;
};

const getOneWorkout = (workoutId) => {
	const workout = DB.workouts.find((workout) => workout.id === workoutId);
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
		throw {
			status: 400,
			message: `Workout with the name ${newWorkout.name} is exists`,
		};
	}

	try {
		DB.workouts.push(newWorkout);

		saveToDatebase();

		return newWorkout;
	} catch (error) {
		throw { status: 500, message: error?.message || error };
	}
};

const updateOneWorkout = (workoutId, changes) => {
	const indexForUpdate =
		DB.workouts.findIndex((workout) => workout.Id === newWorkout.Id) > -1;

	if (indexForUpdate === -1) {
		return;
	}

	const updateWorkout = {
		...DB.workouts[indexForUpdate],
		...changes,
		updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
	};

	DB.workouts[indexForUpdate] = updateWorkout;

	saveToDatebase();

	return updateWorkout;
};

module.exports = { getAllWorkouts, createNewWorkout };
