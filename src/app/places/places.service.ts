/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg',
      149.99
    ),
    new Place(
      'p2',
      `L'Amour Toujours`,
      'A romantic place in Paris!',
      'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://i.pinimg.com/736x/f8/f4/ec/f8f4ec1f3a8071099ae55a3ac2a41be1.jpg',
      99.99
    ),
  ];

  constructor() {}

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }
}
