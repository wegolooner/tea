import { Routes } from '@angular/router';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'collection/:id', component: CollectionComponent },
    { path: 'san-pham', component: SanPhamComponent },
    { path: 'chi-tiet-san-pham/:id', component: ChiTietSanPhamComponent }
];
