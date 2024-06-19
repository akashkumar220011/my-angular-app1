import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeModule } from './tree/tree.module'; // Import the TreeModule
import { HttpClientModule } from '@angular/common/http';
import { TreeChartComponent } from './tree-chart/tree-chart.component'; // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    TreeChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule here as well
    TreeModule // Import TreeModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
