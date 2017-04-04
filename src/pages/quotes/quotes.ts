import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})


export class QuotesPage implements OnInit {

  quoteGroup: {categoy: string, quotes: Quote, icon: string };

  constructor(
    private quotesService : QuotesService,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController) {}

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }


  onAddToFavorite(selectedQuote: Quote){
    const alert =  this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure',
      message: '<span class="message">Are uou sure you want to add that quote to favorites</span>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancelled');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
            console.log('Saved clicked');
          }
        }
      ]
    });
    alert.present();
  }
  

}
