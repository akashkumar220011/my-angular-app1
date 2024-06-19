import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TreeNode } from './tree-data.model';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {
  private data: TreeNode = {
    name: 'flare',
    children: [
      {
        name: 'analytics',
        children: [
          {
            name: 'cluster',
            children: [
              { name: 'AgglomerativeCluster'},
              { name: 'CommunityStructure' }
            ]
          }
        ]
      },
      {
        name: 'animate',
        children: [
          { name: 'Easing'},
          { name: 'FunctionSequence' }
        ]
      }
    ]
  };

  getTreeData(): Observable<TreeNode> {
    return of(this.data);
  }
}
