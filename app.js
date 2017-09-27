// console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
// console.log(argv);
var command = process.argv[2];

if (command === 'add') {
  console.log('adding new note');
  var note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('Note successfully added!');
    notes.logNote(note);
  } else {
    console.log(`Note could not be added: Note with title '${argv.title}' already exists!`);
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => {
    notes.logNote(note)
  })
  // console.log('listing all notes');
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
  // var message = note ? "Title: ", note.title, "\nBody: ", note.body :
  // console.log(message);
  // console.log('reading note');
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log('command not recognized');
}

// console.log(process.argv);

// console.log(user);

// var res = notes.addNote();
// console.log(res);

// var res = notes.add(3, -2);
// console.log(res);

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
