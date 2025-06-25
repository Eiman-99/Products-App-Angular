// cart-service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSignal = signal<any[]>([]);

  getCartItems = this.cartItemsSignal.asReadonly();

  addToCart(product: any) {
    const currentItems = this.cartItemsSignal();
    this.cartItemsSignal.set([...currentItems, product]);
  }

  removeFromCart(productId: number) {
    const updated = this.cartItemsSignal().filter(p => p.id !== productId);
    this.cartItemsSignal.set(updated);
  }

  hasProduct(productId: number): boolean {
    return this.cartItemsSignal().some(p => p.id === productId);
  }

  toggleProduct(product: any) {
    this.hasProduct(product.id) ? this.removeFromCart(product.id) : this.addToCart(product);
  }
}
