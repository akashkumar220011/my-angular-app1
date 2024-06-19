import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { TreeDataService } from '../tree/tree-data.service';
import { TreeNode } from '../tree/tree-data.model';

@Component({
  selector: 'app-tree-chart',
  templateUrl: './tree-chart.component.html',
  styleUrls: ['./tree-chart.component.css']
})
export class TreeChartComponent implements OnInit {
  private data!: TreeNode;

  constructor(private treeDataService: TreeDataService) { }

  ngOnInit(): void {
    this.treeDataService.getTreeData().subscribe(data => {
      this.data = data;
      this.createChart();
    });
  }

  private createChart(): void {
    const width = 500;
    const height = 500;

    const svg = d3.select('svg')
      .attr('width', width)
      .attr('height', height);

    const root = d3.hierarchy(this.data);
    const treeLayout = d3.tree<TreeNode>().size([width, height]);
    treeLayout(root);

    const link = svg.selectAll('.link')
      .data(root.links())
      .enter()
      .append('line')
      .classed('link', true)
      .attr('x1', d => d.source.x!)
      .attr('y1', d => d.source.y!)
      .attr('x2', d => d.target.x!)
      .attr('y2', d => d.target.y!);

    const node = svg.selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .classed('node', true)
      .attr('transform', d => `translate(${d.x},${d.y})`);

    node.append('circle')
      .attr('r', 5);

    node.append('text')
      .attr('dy', -10)
      .attr('text-anchor', 'middle')
      .text(d => d.data.name);
  }
}
