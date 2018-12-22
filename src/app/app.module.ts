import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CellRendererComponent } from './my-cellRenderer-component/MyCellRenderer.component';

@NgModule({
  declarations: [AppComponent,CellRendererComponent],
  imports: [BrowserModule, AgGridModule.withComponents([])],
  entryComponents: [CellRendererComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}