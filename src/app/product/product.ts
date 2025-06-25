import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';


@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  product = input<any>();
  inCart = input<boolean>(false);

  toggle = output();

  toggleCart() {
    this.toggle.emit(this.product());
  }
}
