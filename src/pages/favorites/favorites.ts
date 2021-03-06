import { Component } from '@angular/core';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  
  quotes: Quote[];
  
  constructor( public quotesService: QuotesService ) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
    console.log(this.quotes);
  }

  

}
