import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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

  toggleCart(event: Event) {
    event.preventDefault(); 
    event.stopPropagation();
    this.toggle.emit(this.product());
  }
}
