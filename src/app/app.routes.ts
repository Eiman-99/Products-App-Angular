import { Routes } from '@angular/router';
import { Products } from './products/products'; 
import { Cart } from './cart/cart'; 
import { Login } from './login/login';
import { Register } from './register/register';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
  { path: '', component: Products},
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
];
