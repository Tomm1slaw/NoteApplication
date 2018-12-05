import DOM from '../dom';

// Get HTML template
const getTemplate = url => new Promise(resolve => resolve(url));

// Render the view
const render = html => (DOM().container.innerHTML = html);

// Load view
// 1. Get HTML template
// 2. Render the view
// 3. Resolve()
export const load = view =>
   new Promise((resolve, reject) => {
      getTemplate(view).then(html => {
         render(html);
         resolve();
      });
   });
