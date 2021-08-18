import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
   providedIn: 'root'
})
export class BitcoinService {

   constructor() { }
   async getRate(coins = 1) {
      try {
         const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}&cors=true`)
         return res.data;
      } catch (err) {
         console.log('err', err)
      }
   }
   async getMarketPrice() {
      try {
         const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`)
         return res.data
      } catch (err) {
         console.log(err);
      }
   }
   async getConfirmedTransactions() {
      try {
         const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true`)
         return res.data
      } catch (err) {
         console.log(err);
      }

   }
}
