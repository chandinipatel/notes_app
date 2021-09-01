/* const validator = require('validator')
const chalk = require('chalk')
console.log(chalk.green('Success!'))
console.log(chalk.bold.inverse('Success!'))

const notes = require('./notes.js');
const text = notes.getNotes();
console.log(text);

console.log(validator.isEmail('chandinicirana123@gmail.com'))

const fs = require('fs'); //core node module that contains all methods pertaining to file system


fs.writeFileSync('notes.txt', 'Hello, my name is chandini');*/

/* const utils = require('./utils.js');
const output = utils.add(3,4);
console.log(output);
console.log(utils.name); */

//console.log(process.argv[2]); 
const notes = require('./notes.js')
const yargs = require('yargs')
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       notes.addNote(argv.title, argv.body);
    }
   

});

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Title of the note to remove',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.removeNote (argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'list all new notes',
    handler() {
        const list_notes = notes.loadNotes()
        if(list_notes.length !== 0){
            console.log(list_notes);
        }
        else {
            console.log('No notes!');
        }
    }
});

yargs.command({
    command: 'read',
    describe: 'reading a new notes',
    builder: {
        title: {
            demandOption: true,
            type: 'String'
        }
    },
    handler (argv) {
        const note = notes.readNote(argv.title);
          if(notes === []) {
            console.log('Note is not present');
        }
        else{
            console.log(note)
        }

        }

});


yargs.parse()

//console.log(yargs.argv["_"])
/* const command = process.argv[2];
if(command === 'add'){
    console.log('Adding a note!');
}

if(command === 'remove'){
    console.log('removing note')
} */
















