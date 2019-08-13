import { StockInterface, StocksService } from './services/stocks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface>;
  title = 'Angular-Action';
  constructor(service: StocksService){
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
