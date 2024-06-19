import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  declarations: [
    TreeViewComponent,
    TreeNodeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule // Correctly import HttpClientModule
  ],
  exports: [
    TreeViewComponent // Ensure TreeViewComponent is exported
  ]
})
export class TreeModule { }
