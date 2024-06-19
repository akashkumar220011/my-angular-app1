import { Component, Input } from '@angular/core';
import { TreeNode } from '../tree-data.model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  isExpanded = false;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
