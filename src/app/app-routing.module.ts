import { ProjectsComponent } from './pages/projects/projects.component';
import { DataComponent } from './pages/data/data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  { path: 'data', component: DataComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  { path: 'projects/:id', component: ProjectsComponent },
  { path: '**', redirectTo: 'data', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
