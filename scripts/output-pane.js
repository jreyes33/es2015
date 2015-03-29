export default class OutputPane {
  constructor(id) {
    this.element = document.getElementById(id);
  }

  hide() {
    this.element.classList.add('hidden');
  }

  show() {
    this.element.classList.remove('hidden');
  }

  setContent(content) {
    this.element.innerHTML = content;
  }

  empty() {
    this.setContent('');
  }

  append(content) {
    this.element.innerHTML += content;
  }
}
