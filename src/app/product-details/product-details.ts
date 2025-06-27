import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private cartService = inject(CartService);

  product: any = null;
  readonly cartItems = this.cartService.getCartItems;

  quantity = computed(() => {
    const item = this.cartItems().find(p => p.id === this.product?.id);
    return item?.quantity || 0;
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://dummyjson.com/products/${id}`).subscribe((res: any) => {
      this.product = res;
    });
  }

  increment() {
    if (this.quantity() < 5 && this.quantity() < this.product.stock) {
      this.cartService.addToCart(this.product);
    }
  }

  decrement() {
    if (this.quantity() > 0) {
      this.cartService.decrementQuantity(this.product.id);
    }
  }
}
