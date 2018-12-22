
import {Component, ViewEncapsulation } from '@angular/core';
import { ICellRenderer } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
// create your cellRenderer as a Angular component
@Component({
    selector: 'values-cell',
    template: `<div [innerHtml]='valueFunction()'></div>`,
    styleUrls: ['./myStyle.scss'],
    //reason for using below line of code below link
    //https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular-2-typescript
    encapsulation: ViewEncapsulation.None
})

// ICellRenderer also worked, difference between ICellRenderer and ICellRendererAngularComp ????

export class CellRendererComponent implements ICellRendererAngularComp {
    private params:any;

    agInit(params:any):any {
        this.params = params;
    }

    private valueFunction():any {
        for (let i =0 ; i<this.params.data.errorDescription.length; i++) {
            let key = this.params.data.errorDescription[i].uiField;
            if(this.params.data[key] === this.params.value) {
              
             return '<b>Validation Error</b>';
            }
          }
         
             return this.params.value;
    }

    refresh() {
        return false;
    }
}