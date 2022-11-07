const fs = require('fs');

const getNotes = function () {
	return 'Your notes...';
};

const addNote = function (title, body) {
	const notes = loadNotes();

	const duplicateNotes = notes.filter(function (note) {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body,
		});
		saveNote(notes);
		console.log('New note added!');
	} else {
		console.log('Note title taken!');
	}
};

const saveNote = function (notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
	try {
		const dataJSON = fs.readFileSync('notes.json', 'utf-8');
		return JSON.parse(dataJSON);
	} catch (error) {
		return [];
	}
};

const removeNote = function (title) {
	const notes = loadNotes();
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
};
