import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './products/products';
import { Navbar } from './navbar/navbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Products,NgbModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Product-App';
}
