const fs = require('fs');

const getNotes = () => {
    return "your notes...";
}

const addNote = (title, body) => {
    console.log('entering add note method in notes.js');
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title) 
    if (duplicateNotes.length === 0)
    {
     note = {
        title,
        body
    }
    notes.push(note);
    //convert javascript object to json string and write to file
    fs.writeFileSync('notes.json', JSON.stringify(notes));
    console.log('New note added');
}
else{
    console.log('Please enter a title which doesnt exist')
}
}

   const removeNote = (title) => {
       console.log(`The title to be removed is ${title}`);
       const notes = loadNotes();
       const non_matching_notes = notes.filter(title => note.title !==title);
        if(non_matching_notes.length !== notes.length){
            fs.writeFileSync('notes.json', JSON.stringify(non_matching_notes));
        }
        else{
            console.log('note dosent exist');
        }
   }

   const readNote = (title) => {
       const notes = loadNotes();
       const note = notes.filter(note => note.title === title);
       if(note !== 0){
           return note;
       }
       else {
           return [];
       }
   }

//return existing notes
const loadNotes =  () => {
    console.log('Entering load notes method');
    if(fs.existsSync('notes.json')){
       return JSON.parse(fs.readFileSync('notes.json').toString());
    }
    else{
        console.log('Notes.json dosent exist');
        return [];
    }

}

module.exports = {
    getNotes,
    addNote,
    loadNotes,
    removeNote,
    readNote
}
