import { LitElement, html } from "lit";
import { styles } from "./styles";

export class WarpField extends LitElement {
    static styles = [styles];

    render() {
        return html`<slot></slot>`;
    }
}