import * as notesActions from '../../notes-actions';

export function noteRemoveHandler(noteRemoveBtn, noteId) {
   noteRemoveBtn.addEventListener('click', function() {
      notesActions.remove(noteId);
   });
}

export function noteSaveHander(noteContentForm, noteId, noteContentEl) {
   noteContentForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const noteContent = noteContentEl.value;
      notesActions.save(noteId, noteContent);
   });
}
