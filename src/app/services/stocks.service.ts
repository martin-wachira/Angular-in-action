import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR','SLCK'];
let service: string = 'https://github.com/angular-in-action/api';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }
  
  get(){
    return stocks.slice();
  }

  add(stock){
    stocks.push(stock);
    return this.get();
  }

  remove(stock){
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols){
    if(symbols){
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
