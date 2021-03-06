import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review, Menu } from '../models/IjapEat';

@Injectable({
  providedIn: 'root',
})
export class japEatService {
  reviews: Review[] = [];

  urlReview: string = 'http://localhost:3000/reviews';

  urlMenu: string = 'http://localhost:3000/menu';

  constructor(private http: HttpClient) {}

  // Restituisce tutte le recensioni

  getAllReviews() {
    return this.http.get<Review[]>(this.urlReview);
  }
  //Restituisce tutto il MENU
  getAllMenu() {
    return this.http.get<Menu[]>(this.urlMenu);
  }

  // Aggiunge un nuovo elemento tramite la form
  addReview(review: Review) {
    return this.http.post<Review>(this.urlReview, review);
    // form.reset()
  }
}
