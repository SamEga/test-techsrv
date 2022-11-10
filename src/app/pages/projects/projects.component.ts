import { Project } from './../../models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  activeProject?: Project;

  ngOnInit(): void {
    this.projects = JSON.parse(localStorage.getItem('projects')!)?.Projects;
  }

  select(project: Project): void {
    if (project) {
      this.activeProject = project;
    }
  }

  onChanged(project: Project): void {
    this.projects = this.projects.map((p) => project.id === p.id ? project : p);
  }

  trackByFn(index: number, project: Project): number {
    return Number(project.id);
  }
}
