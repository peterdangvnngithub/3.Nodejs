export const queries = {
	getAllShift: 'SELECT * FROM CA',
	createNewShift:
		'INSERT INTO CA (SHIFT_CODE,SHIFT_NAME,FROM_1,TO_1,FROM_2,TO_2) VALUES (@SHIFT_CODE, @SHIFT_NAME, @FROM_1, @TO_1, @FROM_2, @TO_2)',
};
