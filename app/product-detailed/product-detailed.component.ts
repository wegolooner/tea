import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detailed',
  standalone: true,
  imports: [],
  templateUrl: './product-detailed.component.html',
  styleUrl: './product-detailed.component.css'
})
export class ProductDetailedComponent {
  @Input() product: any;
}
