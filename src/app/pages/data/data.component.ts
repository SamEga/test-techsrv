import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass'],
})
export class DataComponent {
  constructor(private router: Router) {}
  save(value: string): void {
    if (value) {
      localStorage.setItem('projects', value);
    }
    this.router.navigateByUrl('projects');
  }
}
