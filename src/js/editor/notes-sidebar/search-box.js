import DOM from '../dom';
let searchPrase = '';

export function getSearchPhrase() {
   return searchPrase;
}

export function init(onChangeCallback) {
   DOM.searchBoxInput.addEventListener('input', function() {
      searchPrase = this.value;

      onChangeCallback();
   });
}
