import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  menu: { link: string; title: string }[] = [
    {
      link: 'data',
      title: 'Данные',
    },
    {
      link: 'projects',
      title: 'Проекты',
    },
  ];
}
