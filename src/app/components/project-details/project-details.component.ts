import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.sass'],
})
export class ProjectDetailsComponent implements OnInit, OnChanges {
  @Input() activeProject?: Project;
  @Output() changed: EventEmitter<Project> = new EventEmitter();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private acitivatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.form = this.fb.group({
      id: '',
      subject: '',
      description: '',
      createdBy: '',
      startDate: '',
      endDate: '',
      cost: '',
    });
  }

  ngOnInit(): void {
    const id = this.acitivatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const active = this.parseDate(this.findActiveById(id));
      this.activeProject = active;
      this.form.patchValue(active);
    }
  }

  parseDate(project: Project): Project {
    const startDate = this.datePipe.transform(project.startDate, 'shortDate') || project.startDate;
    const endDate =  this.datePipe.transform(project.endDate, 'shortDate') || project.endDate;
    return {...project, startDate, endDate}
  }

  findActiveById(id: string): Project {
    const projects = JSON.parse(localStorage.getItem('projects')!)?.Projects;
    return projects.find((p: Project) => p.id === id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const active = changes['activeProject']?.currentValue;
    if (active) {
      this.activeProject = this.parseDate(active);
      this.form.patchValue(active);
    }
  }

  change(): void {
    this.changed.emit(this.form.getRawValue());
  }
}
