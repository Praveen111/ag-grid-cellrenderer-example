import { Component } from '@angular/core';
import {  CellRendererComponent } from './my-cellRenderer-component/MyCellRenderer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    columnDefs = [
        {headerName: 'eStatus', field: 'eStatus',cellRendererFramework : CellRendererComponent },
        {headerName: 'eUrl', field: 'eUrl',cellRendererFramework : CellRendererComponent},
        {headerName: 'eDescription', field: 'eDescription',  cellRendererFramework : CellRendererComponent}
    ];


    rowData = [
      {
        eStatus : 'Active',
        eUrl : 'http://abcd.com/my-url',
        eDescription: 'Changed',
        errorDescription : [
          {
            uiField: 'eStatus',
            errorCode: 2
          },
          {
            uiField: 'eDescription',
            errorCode: 1
          },
        ]
      },    
      {
        eStatus : 'PostPoned',
        eUrl : 'http://abcd2222.com/my-url',
        eDescription: 'Changed',
        errorDescription : [
          {
            uiField: 'eUrl',
            errorCode: 2
          }
        ]
      },
      {
        eStatus : 'PostPoned',
        eUrl : 'http://abcd2222.com/my-url',
        eDescription: 'Changed',
        errorDescription : [
          {
            uiField: 'eUrl',
            errorCode: 2
          }
        ]
      },
      {
        eStatus : 'PostPoned',
        eUrl : 'http://abcd2222.com/my-url',
        eDescription: 'Changed',
        errorDescription : [
          {
            uiField: 'eUrl',
            errorCode: 2
          }
        ]
      }
    ]


  // this function will be called each time the data is passed to ag-grid for conditonal rendering
  // we can use this if don't need to create a seperate cellRenderer component, cellRenderer property at columns config
  
  public customCellRendererFunc(params) {

    // for each array of objects in params,data.errorDescription
 for (let i =0 ; i<params.data.errorDescription.length; i++) {

  //get the uiField, which will be key
   let key = params.data.errorDescription[i].uiField;

   //compare the uiField value with row value, if it satisfies return validaton error
   if(params.data[key] === params.value) {
     
    return 'Validation Error';
   }
 }

 // otherwise return normal value
    return params.value;
}

}