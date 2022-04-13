import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackbarComponent } from 'src/app/shared/mat-snackbar/mat-snackbar.component';


@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.css']
})
export class ReviewsFormComponent implements OnInit {

  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();

  name: string = '';
  description: string = '';

  constructor() { }
  ngOnInit() {
  }

  resetHandler(f:NgForm){
    this.reset.emit(f);
    f.reset();
  }

  confirmHandler(f: NgForm){
    this.save.emit(f.value);
    f.reset();
  }


}
