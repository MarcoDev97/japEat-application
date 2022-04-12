import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/IjapEat';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  @Input() reviews: Review[];

  constructor() { }

  ngOnInit() {
  }

}
