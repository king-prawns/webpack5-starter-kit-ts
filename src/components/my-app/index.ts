import './style.pcss';
import view from './template.html';

const html = String.raw;

export default class MyApp extends HTMLElement {
  static template(): string {
    return html`${view}`;
  }

  connectedCallback(): void {
    this.appendChild(template.content.cloneNode(true));
  }
}

const template: HTMLTemplateElement = document.createElement('template');
template.innerHTML = MyApp.template();
