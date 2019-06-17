import { LightningElement, api, track } from 'lwc';

export default class Tbcombobox extends LightningElement {
    @api options;
    @track value;
    @api tcid;
    @api placeholder;

    handlechange(event) {
        console.log('--handle change : ' + JSON.stringify(event.target.value));
        //this.value = event.target.value;
        const hcevent = CustomEvent('handletbcchange', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
                id: this.tcid,
                value: event.target.value
            },
        });
        this.dispatchEvent(hcevent);
    }
}