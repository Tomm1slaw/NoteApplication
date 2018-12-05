const searchBoxInput = document.querySelector('#note-search-input');
let searchPrase = '';

export function getSearchPhrase() {
   return searchPrase;
}

export function init(onChangeCallback) {
   searchBoxInput.addEventListener('input', function() {
      searchPrase = this.value;

      onChangeCallback();
   });
}
