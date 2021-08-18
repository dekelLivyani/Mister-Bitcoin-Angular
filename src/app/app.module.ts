import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomepageComponent,
      ContactListComponent,
      ContactPreviewComponent,
      ContactFilterComponent,
      ContactDetailsComponent,
      ContactPageComponent,
      StatisticsComponent,
      ContactEditComponent,
      TransferFundComponent,
      MoveListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      GoogleChartsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
