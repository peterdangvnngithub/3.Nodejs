const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
	try {
		const allWorkouts = workoutService.getAllWorkouts();
		res.send({ status: 'OK', data: allWorkouts });
	} catch (error) {
		res.status(error?.status || 500).send({
			status: 'FAILED',
			data: { error: error?.message || error },
		});
	}
};

const getOneWorkout = (req, res) => {
	const {
		params: { workoutId },
	} = req;
	if (!workoutId) {
		// 400 Bad Request: The server cannot or will not precess the request due to an apparent client error
		res.status(400).send({
			status: 'FAILED',
			data: { error: "Parameter : 'workoutId' can not be empty" },
		});
	}
	try {
		const workout = workoutService.getOneWorkout(workoutId);
		res.send({ status: 'OK', data: workout });
	} catch (error) {
		res.status(error?.status || 500).send({
			status: 'FAILED',
			data: { error: error?.message || error },
		});
	}
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
		// 400 Bad Request: The server cannot or will not precess the request due to an apparent client error
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
	try {
		const createdWorkout = workoutService.createNewWorkout(newWorkout); // 201 Created : The request has been fulfilled, resulting in the creation of a new resource.[9]
		res.status(201).send({ status: 'OK', data: createNewWorkout });
	} catch (error) {
		// 500 Internal Server Error : A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
		res.status(error?.status || 500).send({
			status: 'FAILED',
			data: { error: error?.message || error },
		});
	}
};

const updateOneWorkout = (req, res) => {
	const {
		body,
		params: { workoutId },
	} = req;

	if (!workoutId) {
		res.status(400).send({
			status: 'FAILED',
			data: { error: "Parameter ':workoutId' can not be empty" },
		});
	}
	try {
		const updateWorkout = workoutService.updateOneWorkouts();
		res.send('Update an existing workout');
	} catch (error) {
		res.status(error?.status || 500).send({
			status: 'FAILED',
			data: { error: error?.message || error },
		});
	}
};

const deleteWorkout = (req, res) => {
	const {
		params: { workoutId },
	} = req;

	if (!workoutId) {
		res.status(400).send({
			status: 'FAILED',
			data: { error: error?.message || error },
		});
	}
	try {
		workoutService.deteleOneWorkouts();
		res.status(204).send({ status: 'OK' }); // 204 No content : The server successfully processed the request, and is not returning any content.
	} catch (error) {
		res.status(error?.status || 500).send({
			status: 'FAILED',
			data: { error: error?.message || error },
		});
	}
};

module.exports = {
	getAllWorkouts,
	getOneWorkout,
	createNewWorkout,
	updateOneWorkout,
	deleteWorkout,
};
