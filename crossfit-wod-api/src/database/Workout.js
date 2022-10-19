const DB = require('./db.json');
const { saveToDatebase } = require('./utils');

const getAllWorkouts = () => {
	try {
		return DB.workouts;
	} catch (error) {
		throw { status: 500, message: error };
	}
};

const getOneWorkout = (workoutId) => {
	try {
		const workout = DB.workouts.find((workout) => workout.id === workoutId);
		if (!workout) {
			throw {
				status: 400,
				message: ` Can't find workout with the id '${workoutId}`,
			};
		}
		return workout;
	} catch (error) {
		throw {
			status: error?.status || 500,
			message: error?.message || error,
		};
	}
};

const createNewWorkout = (newWorkout) => {
	try {
		const isAlreadyAdded =
			DB.workouts.findIndex(
				(workout) => workout.name === newWorkout.name
			) > -1;

		if (isAlreadyAdded) {
			throw {
				status: 400,
				message: `Workout with the name ${newWorkout.name} is exists`,
			};
		}
		DB.workouts.push(newWorkout);

		saveToDatebase();

		return newWorkout;
	} catch (error) {
		throw {
			status: error?.status || 500,
			message: error?.message || error,
		};
	}
};

const updateOneWorkout = (workoutId, changes) => {
	try {
		const indexForUpdate =
			DB.workouts.findIndex((workout) => workout.Id === newWorkout.Id) >
			-1;

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
	} catch (error) {
		throw {
			status: error?.status || 500,
			message: error?.message || error,
		};
	}
};

const deleteOneWorkout = (workoutId) => {
	try {
		const indexForDeletion = DB.workouts.findIndex(
			(workout) => workout.id === workoutId
		);
		if (indexForDeletion === -1) {
			throw {
				status: 400,
				message: `Can't find workout with the id '${workoutId}'`,
			};
		}
		DB.workouts.splice(indexForDeletion, 1);
		saveToDatebase();
	} catch (error) {
		throw {
			status: error?.status || 500,
			message: error?.message || error,
		};
	}
};
module.exports = {
	getAllWorkouts,
	createNewWorkout,
	getOneWorkout,
	updateOneWorkout,
	deleteOneWorkout,
};
