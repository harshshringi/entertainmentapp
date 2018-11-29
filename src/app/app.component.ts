import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entertainment-app';
  data = {
    movies: [{
      id: 1,
      title: 'Movie1',
      year: 1994,
      description: 'lorem ipsum'
    },
    {
      id: 2,
      title: 'Movie2',
      year: 1994,
      description: 'lorem ipsum'
    }],
    music: [{
      id: 1,
      title: 'Music1',
      year: 1994,
      description: 'lorem ipsum'
    },
    {
      id: 2,
      title: 'Music2',
      year: 1994,
      description: 'lorem ipsum'
    }]
  };

  selectedEntityType: any = null;
  isSelected = false;

  onEntitySelect() {
    this.isSelected = true;
    this.selectedEntityType = 'movies';
  }

  getData() {
    return Object.keys(this.data);
  }
}
