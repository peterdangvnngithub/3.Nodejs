import sql from 'mssql';

const dbSettings = {
	user: 'sa',
	password: 'Login@W',
	server: 'App.takako.vn',
	database: 'HANDY_PICKING',
	options: {
		encrypt: true, // for azure
		trustServerCertificate: true, // change to true for local dev / self-signed certs
	},
};

export async function getConnection() {
	try {
		const pool = await sql.connect(dbSettings);
		return pool;
	} catch (error) {
		console.error(error);
	}
}

export { sql };
