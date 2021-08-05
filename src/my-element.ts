import { LitElement, html } from "lit";
import { customElement , property} from "lit/decorators.js";
@customElement('my-element')
export class MyElement extends LitElement{
    @property({type: String})
    name: String = '';
    render(){
        return html`
            <h1>Hello ${this.name}</h1>
            `;
    }
} 