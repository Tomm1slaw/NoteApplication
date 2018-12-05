import * as notesActions from '../../notes-actions';
import DOM from '../dom';

export function init(onChangeCallback) {
   DOM.addBoxform.addEventListener('submit', function(e) {
      e.preventDefault();

      const noteTitle = DOM.addBoxInput.value.trim();

      if (noteTitle) {
         notesActions.add(noteTitle).then(notes => {
            onChangeCallback();
         });
      }
   });
}
