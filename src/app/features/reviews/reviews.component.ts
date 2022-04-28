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
    private _snackBar: MatSnackBar
  ) {}

  reviews: Review[] = [];
  durationInSeconds: number = 5;

  ngOnInit() {
    this.getReviews();
  }

  //Ritorna la lista delle recensioni
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

  //Aggiunge una recensione
  add(review: Review) {
    this.service.addReview(review).subscribe((result) => {
      this.reviews.unshift(result);
    });
    // form.reset()
  }
}
