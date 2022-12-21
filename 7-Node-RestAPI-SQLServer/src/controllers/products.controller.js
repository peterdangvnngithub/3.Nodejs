import { getConnection, sql } from '../database/connection.js';
import { queries } from '../database/index.js';

export const getWorkers = async (req, res) => {
	try {
		const pool = await getConnection();
		const result = await pool.request().query(queries.getAllShift);
		res.json(result.recordset);
	} catch (error) {
		res.status(500);
		res.send(error.message);
	}
};

export const createNewWorker = async (req, res) => {
	const { SHIFT_CODE, SHIFT_NAME, FROM_1, TO_1, FROM_2, TO_2 } = req.body;
	if (SHIFT_CODE == null || SHIFT_NAME == null || FROM_1 == null || TO_1 == null || FROM_2 == null || TO_2 == null) {
		return res.status(400).json({ msg: 'Bad requestg. Please fill all fields' });
	}
	try {
		const pool = await getConnection();
		await pool
			.request()
			.input('SHIFT_CODE', sql.VarChar, SHIFT_CODE)
			.input('SHIFT_NAME', sql.VarChar, SHIFT_NAME)
			.input('FROM_1', sql.VarChar, FROM_1)
			.input('TO_1', sql.VarChar, TO_1)
			.input('FROM_2', sql.VarChar, FROM_2)
			.input('TO_2', sql.VarChar, TO_2)
			.query(queries.createNewShift);

		res.json({ SHIFT_CODE, SHIFT_NAME });
	} catch (error) {}
};

export const getShiftById = async (req, res) => {
	const { id } = req.params;
	res.send(id);
};
