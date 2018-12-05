let notesList = [
   {
      id: 1,
      title: 'notatka 1',
      body: '# asdfg',
      lastModified: '18/06/2018 15:00'
   },
   {
      id: 2,
      title: 'notatka 2',
      lastModified: '18/06/2018 15:00'
   },
   {
      id: 3,
      title: 'notatka 3',
      lastModified: '18/06/2018 15:00'
   },
   {
      id: 4,
      title: 'notatka 4',
      lastModified: '18/06/2018 15:00'
   }
];

export function getAll() {
   return notesList;
}

export function add(title) {
   notesList.push({
      title,
      lastModified: '18/06/2018 15:00'
   });
}

export function remove(noteId) {
   notesList = notesList.filter(note => note.id !== noteId);
   console.log(`${noteId} - remove`);
   console.log(notesList);
}
