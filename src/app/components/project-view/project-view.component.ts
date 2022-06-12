import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../projects/projects.component';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit {
  @Input() project!: Project;

  constructor() {}

  ngOnInit(): void {}
}
