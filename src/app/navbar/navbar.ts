import { Component , inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, NgbNavModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar  {
  cartService = inject(CartService);
}