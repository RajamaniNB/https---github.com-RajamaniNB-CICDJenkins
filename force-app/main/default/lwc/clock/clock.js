import { LightningElement } from 'lwc';

export default class Clock extends LightningElement {
    connectedCallback() {
        setInterval(() => {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;
            this.template.querySelector('.time').textContent = timeString;
        }, 3000);
    }
}