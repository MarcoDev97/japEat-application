import { MenuComponent } from './features/menu/menu.component';
import { HomeComponent } from './features/home/home.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { CartComponent } from './features/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path:'home', component: HomeComponent , canActivate: [AuthGuard]},
  {path:'menu', component: MenuComponent , canActivate: [AuthGuard]},
  {path:'reviews', component: ReviewsComponent, canActivate: [AuthGuard]},
  {path:'**', redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
