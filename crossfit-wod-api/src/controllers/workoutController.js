const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
	const allWorkouts = workoutService.getAllWorkouts();
	res.send({ status: 'OK', data: allWorkouts });
};

const getOneWorkout = (req, res) => {
	const workout = workoutService.getOneWorkouts();
	res.send('Get an existing workouts');
};

const createNewWorkout = (req, res) => {
	const { body } = req;

	if (
		!body.name ||
		!body.mode ||
		!body.equipment ||
		!body.excercises ||
		!body.trainerTips
	) {
		return;
	}

	const newWorkout = {
		name: body.name,
		mode: body.mode,
		equipment: body.equipment,
		excercises: body.exercises,
		trainerTips: body.trainerTips,
	};

	const createdWorkout = workoutService.createNewWorkouts(newWorkout);

	res.status(201).send({ status: 'OK', data: createdWorkout }); // 201 Created : The request has been fulfilled, resulting in the creation of a new resource.[9]
};

const updateWorkout = (req, res) => {
	const updateWorkout = workoutService.updateOneWorkouts();
	res.send('Update an existing workout');
};

const deleteWorkout = (req, res) => {
	const deleteWorkout = workoutService.deteleOneWorkouts();
	res.send('Delete an existing workout');
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createNewWorkout,
	updateWorkout,
	deleteWorkout,
};
