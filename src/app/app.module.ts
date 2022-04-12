import { MenuListComponent } from './features/menu/menu-list/menu-list.component';
import { HomeComponent } from './features/home/home.component';
import { MatDialogComponent } from './shared/mat-dialog/mat-dialog.component';
import { MenuComponent } from './features/menu/menu.component';
import { ReviewsFormComponent } from './features/reviews/reviews-form/reviews-form.component';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './features/login/login.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { CartComponent } from './features/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ReviewsListComponent } from './features/reviews/reviews-list/reviews-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ReviewsComponent,
    CartComponent,
    ReviewsFormComponent,
    ReviewsListComponent,
    MenuComponent,
    MatDialogComponent,
    HomeComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
