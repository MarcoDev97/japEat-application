import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
   styles: [
    `
    .snack-bar {
      color: white;
    };
  `,
  ],
})
export class MatSnackbarComponent  {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public text: string) { }


}
