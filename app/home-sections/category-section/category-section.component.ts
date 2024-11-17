import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css'
})
export class CategorySectionComponent {
  @Input() title: string = ''; // Section title (e.g., "Luxury Products")
  @Input() products: any[] = []; // Array of product data

}
