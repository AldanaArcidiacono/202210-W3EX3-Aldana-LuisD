import { Component } from './component.js';
import { Task } from '../models/task.js';
import { TASKS } from '../models/data.js';

export class Item extends Component {
    template: string;
    tasks = [...TASKS];
    constructor(public selector: string, public handle: (ev: Event) => void) {
        super();
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            document.querySelectorAll('.eraser').forEach((item) =>
                item.addEventListener('click', (ev: Event) => {
                    //ev.preventDefault();
                    console.log('Hay que borrar');
                    handle(ev);
                })
            );
        }, 100);
    }
    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.tasks.forEach((item: Task) => {
            template += `
            <li> ${item.id} - ${item.title} 
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `</ul>
            </section>`;
        return template;
    }
}
