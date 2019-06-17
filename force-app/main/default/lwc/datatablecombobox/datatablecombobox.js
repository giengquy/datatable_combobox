import LightningDatatable from 'lightning/datatable';
import comboboxcell from './comboboxcell.html';

export default class Datatablecombobox extends LightningDatatable {
    static customTypes = {
        comboboxtype: {
            template: comboboxcell,
            typeAttributes: ['tcid', 'placeholder', 'options'],
        }
    };
}