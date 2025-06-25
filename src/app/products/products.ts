// products.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '../products-service';
import { CartService } from '../cart-service';
import { Product } from '../product/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [Product, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit {
  products = signal<any[]>([]);
  private productService = inject(ProductService);
  protected cartService = inject(CartService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (response: any) => this.products.set(response.products),
      error: (err: any) => console.error(err),
    });
  }

  toggleCart(product: any) {
    this.cartService.toggleProduct(product);
    console.log('Updated cart:', this.cartService.getCartItems());
  }
}
