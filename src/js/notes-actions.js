let notesList = [
   {
      id: 1,
      title: 'notatka 1',
      body: '# asdfg',
      lastModified: 1544010561795
   },
   {
      id: 2,
      title: 'notatka 2',
      lastModified: 1544010561795
   },
   {
      id: 3,
      title: 'notatka 3',
      lastModified: 1544010561795
   },
   {
      id: 4,
      title: 'notatka 4',
      lastModified: 1544010561795
   }
];

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
