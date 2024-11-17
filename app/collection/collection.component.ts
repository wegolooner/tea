import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SloganContainerComponent } from '../slogan-container/slogan-container.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, SloganContainerComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent implements OnInit {
  collection: any;
  otherCollections: any;
  bestCollections = [
    {id:1, name: 'Summer Collection', slogan: 'Summer is good', price: 299, image: '../../assets/collection.png' },
    {id:2, name: 'Winter Collection', slogan: 'Winter is good', price: 299, image: '../../assets/collection.png' },
    {id:3, name: 'Spring Collection', slogan: 'Spring is good', price: 299, image: '../../assets/collection.png' },
    {id:4, name: 'Autumn Collection', slogan: 'Autumn is good', price: 299, image: '../../assets/collection.png' },
    {id:5, name: 'Year-round Collection', slogan: 'Yearround is good', price: 299, image: '../../assets/collection.png' },
    {id:6, name: 'Khongmacgi Collection', slogan: 'Khongmacgi is good', price: 299, image: '../../assets/collection.png' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  viewCollection(collectionId: string) {
    this.router.navigate(['/collection', collectionId]);
  }
  ngOnInit() {
    const collectionId = this.route.snapshot.paramMap.get('id') ?? ''; // Default to an empty string
    this.fetchCollection(collectionId);
    this.fetchOtherCollections(collectionId);
  }

   fetchCollection(id: string) {
    // Fetch the collection based on the ID
    this.collection = this.bestCollections.find(collection => collection.name === id) || null;
  }

  fetchOtherCollections(currentId: string) {
    // Filter out the current collection from the other collections
    this.otherCollections = this.bestCollections.filter(collection => collection.name !== currentId);
  }
}