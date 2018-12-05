import * as notesActions from '../../notes-actions';
import showdown from 'showdown';

const mdConverter = new showdown.Converter();

// show editor
function showEditor(noteContentEl, noteContentPreviewEl) {
   noteContentEl.classList.remove('d-none');
   noteContentPreviewEl.classList.add('d-none');
}

export function noteShowEditorHandler(noteEditorBtn, noteContentEl, noteContentPreviewEl) {
   noteEditorBtn.addEventListener('click', function() {
      showEditor(noteContentEl, noteContentPreviewEl);
   });
}
// show preview
function showPreview(noteContentEl, noteContentPreviewEl) {
   noteContentEl.classList.add('d-none');
   noteContentPreviewEl.classList.remove('d-none');
}
export function noteShowPreviewHandler(notePreviewBtn, noteContentEl, noteContentPreviewEl) {
   notePreviewBtn.addEventListener('click', function() {
      const text = noteContentEl.value;

      // show preview only if MD content exist
      if (text) {
         const html = mdConverter.makeHtml(text);

         showPreview(noteContentEl, noteContentPreviewEl);
         noteContentPreviewEl.innerHTML = html;
      }
   });
}

// remove
export function noteRemoveHandler(noteRemoveBtn, noteId) {
   noteRemoveBtn.addEventListener('click', function() {
      notesActions.remove(noteId);
   });
}

// save
export function noteSaveHander(noteContentForm, noteId, noteContentEl) {
   noteContentForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const noteContent = noteContentEl.value;
      notesActions.save(noteId, noteContent);
   });
}
