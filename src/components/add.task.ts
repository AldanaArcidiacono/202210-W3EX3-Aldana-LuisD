import { Component } from './component.js';

export class AddTask extends Component {
    template: string;
    constructor(public selector: string, public handle: (ev: Event) => void) {
        super();
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
                    ev.preventDefault();
                    console.log('Tengo que añadir');
                    handle(ev);
                });
        }, 100);
    }
    createTemplate() {
        return `
        <form>
            <div>
                <input type="text" id="title" placeholder="Cuál es la tarea" required>
            </div>
            <div>
                <input type="text" id="resp" placeholder="Quien es el responsable">
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
