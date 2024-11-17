import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SloganContainerComponent } from './slogan-container/slogan-container.component';
import { HeaderComponent } from './header/header.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ProductDetailedComponent } from './product-detailed/product-detailed.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SloganContainerComponent, HeaderComponent, FilterBarComponent, ProductDetailedComponent, SanPhamComponent, ChiTietSanPhamComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='qastro-client'
}
