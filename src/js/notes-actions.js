import axios from './axios-api';

axios.get('/notes').then(function(response) {
   // handle success
   console.log(response);
});

let notesList = [];

export function getAll() {
   return notesList;
}

export function add(title) {
   notesList.push({
      title,
      lastModified: Date.now()
   });
}

export function remove(noteId) {
   notesList = notesList.filter(note => note.id !== noteId);
}

export function save(noteId, noteContent) {
   notesList.map(note => {
      if (note.id === noteId) {
         note.body = noteContent;
         note.lastModified = Date.now();
      }

      return note;
   });
}
