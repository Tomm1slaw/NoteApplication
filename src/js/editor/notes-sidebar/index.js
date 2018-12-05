import * as searchBox from './search-box';
import { normalizeText } from '../../tools';

const notesListEl = document.querySelector('#notes-list');

const notesList = [
   {
      title: 'notatka 1',
      lastModified: '18/06/2018 15:00'
   },
   {
      title: 'notatka 2',
      lastModified: '18/06/2018 15:00'
   },
   {
      title: 'notatka 3',
      lastModified: '18/06/2018 15:00'
   },
   {
      title: 'notatka 4',
      lastModified: '18/06/2018 15:00'
   }
];

const generateNotesList = () => {
   const generateNoteHTML = note => {
      return `<li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
         <h6 class="my-0">${note.title}</h6>
         <small class="text-muted">${note.lastModified}</small>
      </div>
      </li> `;
   };

   const html = notesList
      .filter(note =>
         normalizeText(note.title).includes(normalizeText(searchBox.getSearchPhrase()))
      )
      .map(note => generateNoteHTML(note))
      .join('');

   notesListEl.innerHTML = html;
};

generateNotesList();
searchBox.init(() => generateNotesList());
