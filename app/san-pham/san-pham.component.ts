import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SloganContainerComponent } from '../slogan-container/slogan-container.component';
import { HeaderComponent } from '../header/header.component';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { ProductDetailedComponent } from '../product-detailed/product-detailed.component';

@Component({
  selector: 'app-san-pham',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SloganContainerComponent, HeaderComponent, FilterBarComponent, ProductDetailedComponent],
  templateUrl: './san-pham.component.html',
  styleUrl: './san-pham.component.css'
})
export class SanPhamComponent {
  products = [
    { id: 1, name: 'Product 1', discountedPrice: '$20', originalPrice: '$30', imageUrl: '../../assets/discount-notify.png' },
    { id: 2, name: 'Product 2', discountedPrice: '$25', originalPrice: '$35', imageUrl: '../../assets/discount-notify.png' },
    { id: 3, name: 'Product 3', discountedPrice: '$30', originalPrice: '$38', imageUrl: '../../assets/discount-notify.png' },
    { id: 4, name: 'Product 4', discountedPrice: '$25', originalPrice: '$46', imageUrl: '../../assets/discount-notify.png' },
    { id: 5, name: 'Product 5', discountedPrice: '$35', originalPrice: '$39', imageUrl: '../../assets/discount-notify.png' },
    { id: 6, name: 'Product 6', discountedPrice: '$40', originalPrice: '$47', imageUrl: '../../assets/discount-notify.png' },
    // Add more products here
  ];
  constructor(private router: Router, private activate: ActivatedRoute) {}

  viewProductDetails(product: any): void {
    this.router.navigate(['/chi-tiet-san-pham', product.id]);
  }
}
