import { Component } from '@angular/core';
import { CategorySectionComponent } from '../home-sections/category-section/category-section.component';
import { BannerSectionComponent } from '../home-sections/banner-section/banner-section.component';
import { TestOutfitSectionComponent } from '../home-sections/test-outfit-section/test-outfit-section.component';
import { SloganContainerComponent } from '../slogan-container/slogan-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategorySectionComponent, BannerSectionComponent, TestOutfitSectionComponent, SloganContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  viewCollection(collectionId: string) {
    this.router.navigate(['/collection', collectionId]);
  }
  luxuryProducts = [
    { name: 'Rocky Top', price: 199, image: '../../assets/rocky-top.png'},
    { name: 'Rocky Top', price: 199, image: '../../assets/rocky-top.png'},
    { name: 'Rocky Top', price: 199, image: '../../assets/rocky-top.png'},
    { name: 'Rocky Top', price: 199, image: '../../assets/rocky-top.png'},
    { name: 'Rocky Top', price: 199, image: '../../assets/rocky-top.png'},
    { name: 'Rocky Top', price: 199, image: '../../assets/rocky-top.png'},
  ];

  fashionableAccessories = [
    { name: 'Cat Eye Summer', price: 200, image: '../../assets/cat-eye-summer.png' },
    { name: 'Cat Eye Summer', price: 200, image: '../../assets/cat-eye-summer.png' },
    { name: 'Cat Eye Summer', price: 200, image: '../../assets/cat-eye-summer.png' },
    { name: 'Cat Eye Summer', price: 200, image: '../../assets/cat-eye-summer.png' },
    { name: 'Cat Eye Summer', price: 200, image: '../../assets/cat-eye-summer.png' },
    { name: 'Cat Eye Summer', price: 200, image: '../../assets/cat-eye-summer.png' },
  ];

  bestForYourFeet = [
    { name: 'Sneaker', price: 500, image: '../../assets/sneaker.png' },
    { name: 'Sneaker', price: 500, image: '../../assets/sneaker.png' },
    { name: 'Sneaker', price: 500, image: '../../assets/sneaker.png' },
    { name: 'Sneaker', price: 500, image: '../../assets/sneaker.png' },
    { name: 'Sneaker', price: 500, image: '../../assets/sneaker.png' },
    { name: 'Sneaker', price: 500, image: '../../assets/sneaker.png' },
  ];

  bestCollections = [
    {id:1, name: 'Summer Collection', slogan: 'Summer is good', price: 299, image: '../../assets/collection.png' },
    {id:2, name: 'Winter Collection', slogan: 'Winter is good', price: 299, image: '../../assets/collection.png' },
    {id:3, name: 'Spring Collection', slogan: 'Spring is good',price: 299, image: '../../assets/collection.png' },
    {id:4, name: 'Autumn Collection', slogan: 'Autumn is good',price: 299, image: '../../assets/collection.png' },
    {id:5, name: 'Year-round Collection', slogan: 'Yearround is good',price: 299, image: '../../assets/collection.png' },
    {id:6, name: 'Khongmacgi Collection', slogan: 'Khongmacgi is good',price: 299, image: '../../assets/collection.png' },
  ];
}
