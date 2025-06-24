import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product',
  imports: [ButtonModule, CardModule],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  product = input<any>();
}
