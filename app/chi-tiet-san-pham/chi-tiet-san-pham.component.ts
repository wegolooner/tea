import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SloganContainerComponent } from '../slogan-container/slogan-container.component';
import { ProductDetailedComponent } from '../product-detailed/product-detailed.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chi-tiet-san-pham',
  standalone: true,
  imports: [SloganContainerComponent, ProductDetailedComponent, CommonModule],
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrl: './chi-tiet-san-pham.component.css'
})
export class ChiTietSanPhamComponent implements OnInit {

  productId: any;

  constructor(private activate: ActivatedRoute, private router: Router){
    
  }
  products = [
    { id: 1, name: 'Product 1', discountedPrice: '$20', originalPrice: '$30', imageUrl: '../../assets/discount-notify.png' },
    { id: 2, name: 'Product 2', discountedPrice: '$25', originalPrice: '$35', imageUrl: '../../assets/discount-notify.png' },
    { id: 3, name: 'Product 3', discountedPrice: '$30', originalPrice: '$38', imageUrl: '../../assets/discount-notify.png' },
    { id: 4, name: 'Product 4', discountedPrice: '$25', originalPrice: '$46', imageUrl: '../../assets/discount-notify.png' },
    { id: 5, name: 'Product 5', discountedPrice: '$35', originalPrice: '$39', imageUrl: '../../assets/discount-notify.png' },
    { id: 6, name: 'Product 6', discountedPrice: '$40', originalPrice: '$47', imageUrl: '../../assets/discount-notify.png' },
    // Add more products here
  ];

  relatedProducts = [
    { id: 1, name: 'Product 1', discountedPrice: '$20', originalPrice: '$30', imageUrl: '../../assets/discount-notify.png' },
    { id: 2, name: 'Product 2', discountedPrice: '$25', originalPrice: '$35', imageUrl: '../../assets/discount-notify.png' },
    { id: 3, name: 'Product 3', discountedPrice: '$30', originalPrice: '$38', imageUrl: '../../assets/discount-notify.png' }
    // Add more products here
  ];
  ngOnInit(): void { 
    this.productId = +this.activate.snapshot.paramMap.get('id')!;
  }

// Color and size selection, favorite toggle
isFavorite = false; // Default state for the heart icon
activeColorIndex: number = 0; // Default to the first color option
activeSizeIndex: number = 0; // Default to the first size option
// Example color and size options
colors = ['Red', 'Blue', 'Green'];
sizes = ['S', 'M', 'L', 'XL'];

// Handle color selection
selectColor(index: number): void {
  this.activeColorIndex = index;
}

// Handle size selection
selectSize(index: number): void {
  this.activeSizeIndex = index;
}

// Toggle favorite state
toggleFavorite(): void {
  this.isFavorite = !this.isFavorite;
}
  goBack(){
    this.router.navigate(['/san-pham'])
  }
}

