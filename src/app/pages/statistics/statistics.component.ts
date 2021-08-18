import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../../services/bitcoin.service';
import { GoogleChartComponent } from 'angular-google-charts';  
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
   marketPrice:any
   confirmedTransactions:any
   title = 'Area Chart';
   type = 'AreaChart';
   data = [
      ["2013", 1000, 400],
      ["2014", 1170, 460],
      ["2015", 660, 1120],
      ["2016", 1030, 540]
   ];
   columnNames = ['Year', 'Sales',"Expenses"];
   options = { 
      isStacked:true,
      hAxis: {
         title: 'Year'
      }  
   };
   width = 550;
   height = 400;
  constructor(private bitcoinService :BitcoinService ) { }

  async ngOnInit() {
     this.marketPrice = await this.bitcoinService.getMarketPrice()
     this.confirmedTransactions = await this.bitcoinService.getConfirmedTransactions()
     console.log('marketPrice', this.marketPrice)
  }

}
