import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '../products-service';
import { Product } from '../product/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [Product],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit {
  products = signal<any[]>([]);

  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.products.set(response.products);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
