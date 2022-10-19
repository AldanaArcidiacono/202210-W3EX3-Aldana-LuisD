import { Component } from './component.js';
export class AddTask extends Component {
    constructor(selector, handle) {
        super();
        this.selector = selector;
        this.handle = handle;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (ev) => {
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
