import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { utilService } from './util.service';


const KEY = 'CoinRate'
@Injectable({
   providedIn: 'root'
})
export class BitcoinService {

   constructor(private http: HttpClient) { }
   async getRate(coins = 1) {
      const coinRate = utilService.load(KEY + coins)
      if (coinRate) return coinRate;
      try {
         const res = await this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}&cors=true`).toPromise()
         utilService.save(KEY + coins, res)
         return res;
      } catch (err) {
         console.log('err', err)
         return Promise.reject(err)
      }
   }
   async getMarketPrice() {
      try {
         const res = await this.http.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`).toPromise()
         // @ts-ignore
         const values = res.values.map(value => {
            return [null, +value.y]
         })
         return values
      } catch (err) {
         console.log(err);
         return Promise.reject(err)
      }
   }
   async getConfirmedTransactions() {
      try {
         const res = await this.http.get(`https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true`).toPromise()
         // @ts-ignore
         const values = res.values.map(value => {
            return [null, +value.y]
         })
         return values
      } catch (err) {
         console.log(err);
         return Promise.reject(err)
      }

   }
}
