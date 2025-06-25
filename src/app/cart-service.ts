import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  remove(id: number) {
    throw new Error('Method not implemented.');
  }
  private cartItemsSignal = signal<any[]>([]);

  getCartItems = this.cartItemsSignal.asReadonly();

  addToCart(product: any) {
  const currentItems = this.cartItemsSignal();
  const existingItem = currentItems.find(p => p.id === product.id);

  if (existingItem) {
    if (existingItem.quantity < 5) {
      const updatedItems = currentItems.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      this.cartItemsSignal.set(updatedItems);
    }
  } else {
    this.cartItemsSignal.set([...currentItems, { ...product, quantity: 1 }]);
  }
  }

  decrementQuantity(productId: number) {
    const updatedItems = this.cartItemsSignal().map(p =>
      p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
    ).filter(p => p.quantity > 0); // remove if quantity becomes 0
    this.cartItemsSignal.set(updatedItems);
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
