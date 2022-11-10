import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './pages/data/data.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData, DatePipe } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ProjectsComponent,
    MenuComponent,
    ProjectDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
