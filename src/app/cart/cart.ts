import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service'; 

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartService = inject(CartService);

  cartItems = this.cartService.getCartItems; 

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }

  increment(item: any) {
  this.cartService.addToCart(item);
  }

  decrement(id: number) {
    this.cartService.decrementQuantity(id);
  }


  get total() {
    return this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

}
