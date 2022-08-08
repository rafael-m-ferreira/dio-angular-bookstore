import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        id: 1,
        name: 'Beginning Angular',
        price: '24',
        quantity: 1,
        category: 'Angular',
        img: 'img1',
      },
      {
        id: 2,
        name: 'The Angular Tutorial',
        price: '50',
        quantity: 1,
        category: 'Angular',
        img: 'img2',
      },
      {
        id: 3,
        name: 'Building Angular Apps',
        price: '20',
        quantity: 2,
        category: 'Angular / TS',
        img: 'img3',
      },
      {
        id: 4,
        name: 'Learning TypeScript',
        price: '10',
        quantity: 1,
        category: 'TypeScript',
        img: 'img4',
      },
      {
        id: 5,
        name: 'JavaScript The Definitive',
        price: '15',
        quantity: 5,
        category: 'JavaScript',
        img: 'img5',
      },
    ];
    return { books };
  }
}
