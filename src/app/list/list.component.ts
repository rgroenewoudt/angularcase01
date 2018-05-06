import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  data: RijksmuseumApi.ArtObject[];

  @Output()
  select = new EventEmitter<RijksmuseumApi.ArtObject>();

  selected: RijksmuseumApi.ArtObject;

  constructor() { }

  selectItem(item: RijksmuseumApi.ArtObject) {
    this.selected = item;
    this.select.emit(item);
  }

}
