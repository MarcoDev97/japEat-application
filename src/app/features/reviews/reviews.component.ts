import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/IjapEat';
import { NgForm } from '@angular/forms';
import { japEatService } from 'src/app/services/japEat.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackbarComponent } from 'src/app/shared/mat-snackbar/mat-snackbar.component';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  constructor(
    private service: japEatService,
     private http: HttpClient,
     private _snackBar: MatSnackBar) {}

  reviews: Review[] = [];
  durationInSeconds: number = 5;

  urlReview: string = 'http://localhost:3000/reviews';
  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.service.getAllReviews().subscribe((result) => {
      if (result) {
        this.reviews = result;
      } else {
        window.alert('Recensioni non trovate');
      }
    });
  }

  confirm(review: Review) {
    this.add(review);
    this._snackBar.openFromComponent(MatSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: 'Grazie per la recensione!',
    });
  }

  reset(form: NgForm) {
    form.reset();
  }

  add(review: Review) {
    this.http.post<Review>(this.urlReview, review).subscribe((result) => {
      this.reviews.unshift(result);
    });
    // form.reset()
  }

}
