/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import {  LightningElement, api, track, wire  } from 'lwc';

const columns = [
    {
      label: 'Name',
      fieldName: 'name',
      editable: true,
    },
    {
        label: 'Combobox',
        type: 'comboboxtype',
        fieldName: 'comboboxvalue',
        typeAttributes: {
            label: '',
            placeholder: 'Please Select Status',
            tcid: {fieldName: 'id'},
            options: [
                { label: 'New', value: 'new' },
                { label: 'In Progress', value: 'inProgress' },
                { label: 'Finished', value: 'finished' },
            ],
        },
        editable: true,
    },
];

export default class Lwcdemo extends LightningElement {
    @api recordId;
    @track data = [
        {
            id: '1',
            name: 'Name1',
            comboboxvalue: '1'
        },
        {
            id: '2',
            name: 'Name2',
            comboboxvalue: 'Completed'
        }
    ];
    @track columns = columns;

    handlechange(event) {
        console.log('combobox value : ' + event.detail.value);
        console.log('combobox id : ' + event.detail.id);
    }
}