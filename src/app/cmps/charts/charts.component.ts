import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
@Component({
   selector: 'app-charts',
   templateUrl: './charts.component.html',
   styleUrls: ['./charts.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit {
   public marketPrice: any
   public confirmedTransactions: any
   public marketPriceData: any
   public confirmedTransactionsData: any

   constructor(private bitcoinService: BitcoinService , private cd: ChangeDetectorRef) { }

   async ngOnInit() {
      this.marketPriceData = await this.bitcoinService.getMarketPrice()
      this.confirmedTransactionsData = await this.bitcoinService.getConfirmedTransactions()

      this.marketPrice = {
         title: 'Market Price',
         type: 'LineChart',
         data: this.marketPriceData,
         options: {
            hAxis: {
               title: 'Time',
            },
            vAxis: {
               title: 'Cost'
            },
            colors: ['#f0ad4e'],
            legend: 'none',
            backgroundColor:'whitesmoke',
            fontSize:12.5
         },
      }

      this.confirmedTransactions = {
         title: 'Confirmed Transactions',
         type: 'LineChart',
         data: this.confirmedTransactionsData,
         options: {
            
            hAxis: {
               title: 'Time'
            },
            vAxis: {
               title: 'Transfers'
            },
            legend: 'none',
            backgroundColor:'whitesmoke',
            fontSize:12.5
         },
      }

      this.cd.markForCheck()
   }

}
