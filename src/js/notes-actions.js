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

export function getAll() {
   return notesList;
}

export function add(title) {
   notesList.push({
      title,
      lastModified: '18/06/2018 15:00'
   });
}
