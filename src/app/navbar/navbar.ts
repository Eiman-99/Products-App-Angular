import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule,CardModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar  {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Products',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart',
        routerLink: '/cart',
        badge: '3',
      },

      {
        label: 'Login',
        icon: 'pi pi-sign-in',
        routerLink: '/login',
      },
      {
        label: 'Register',
        icon: 'pi pi-user-plus',
        routerLink: '/register',
      },
    ];
  }
}