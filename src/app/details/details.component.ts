import { DataService } from './../services/data.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {

  data: Observable<RijksmuseumApi.ArtObjectDetails>;

  constructor(private dataService: DataService) {}

  @Input()
  objectNumber: string;

  ngOnInit(): void {
    this.data = this.dataService.getDetails(this.objectNumber);
  }

  ngOnChanges() {
    this.data = this.dataService.getDetails(this.objectNumber);
  }
}
