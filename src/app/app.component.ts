import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    columnDefs = [
        {headerName: 'eStatus', field: 'eStatus',cellRenderer : this.customCellRendererFunc},
        {headerName: 'eUrl', field: 'eUrl',cellRenderer : this.customCellRendererFunc},
        {headerName: 'eDescription', field: 'eDescription',  cellRenderer : this.customCellRendererFunc}
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
      }
    ]


  // this function will be called each time the data is passed to ag-grid for conditonal rendering
  public customCellRendererFunc(params) {

 for (let i =0 ; i<params.data.errorDescription.length; i++) {
   let key = params.data.errorDescription[i].uiField;
   if(params.data[key] === params.value) {
     
    return 'Validation Error';
   }
 }

    return params.value;
}

}