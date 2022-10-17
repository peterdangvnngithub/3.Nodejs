const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
	const allWorkouts = workoutService.getAllWorkouts();
	res.send({ status: 'OK', data: allWorkouts });
};

const getOneWorkout = (req, res) => {
	const {
		params: { workoutId },
	} = req;
	if (!workoutId) {
		return;
	}
	const workout = workoutService.getOneWorkouts();
	res.send({ status: 'OK', data: workout });
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
		res.status(400).send({
			status: 'FAILED',
			data: {
				error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
			},
		});
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

const updateOneWorkout = (req, res) => {
	const {
		body,
		params: { workoutId },
	} = req;

	if (!workoutId) {
		return;
	}

	const updateWorkout = workoutService.updateOneWorkouts();
	res.send('Update an existing workout');
};

const deleteWorkout = (req, res) => {
	const {
		params: { workoutId },
	} = req;

	if (!workoutId) {
		return;
	}

	workoutService.deteleOneWorkouts();
	res.status(204).send({ status: 'OK' }); // 204 No content : The server successfully processed the request, and is not returning any content.
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createNewWorkout,
	updateWorkout,
	deleteWorkout,
};
