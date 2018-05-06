import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResults: Observable<RijksmuseumApi.ArtObject[]>;
  selected: RijksmuseumApi.ArtObject;

  constructor(private dataService: DataService) {
  }

  search(q: string) {
    this.searchResults = this.dataService.search(q);
  }

  onSelected(item: RijksmuseumApi.ArtObject) {
    this.selected = item;
  }
}
