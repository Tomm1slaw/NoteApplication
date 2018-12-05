import * as notesActions from '../../notes-actions';

const addBoxform = document.querySelector('#note-add-form');

export function init(onChangeCallback) {
   addBoxform.addEventListener('submit', function(e) {
      e.preventDefault();

      const noteTitle = document.querySelector('#note-add-input').value.trim();

      if (noteTitle) {
         notesActions.add(noteTitle);
         onChangeCallback();
      }
   });
}
