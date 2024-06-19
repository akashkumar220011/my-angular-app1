import { Component, OnInit } from '@angular/core';
import { TreeDataService } from '../tree-data.service';
import { TreeNode } from '../tree-data.model';
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  treeData!: TreeNode; // Change to TreeNode

  constructor(private treeDataService: TreeDataService) { }

  ngOnInit(): void {
    this.treeDataService.getTreeData().subscribe({
      next: (data) => {
        this.treeData = data;
        console.log('Tree data fetched:', this.treeData); // Log the fetched data
      },
      error: (error) => console.error('Error fetching tree data:', error)
    });
  }
}
