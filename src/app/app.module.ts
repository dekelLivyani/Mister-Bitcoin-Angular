import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { AllMoveListComponent } from './pages/all-move-list/all-move-list.component';
import { ChartsComponent } from './cmps/charts/charts.component';

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
      ContactEditComponent,
      TransferFundComponent,
      MoveListComponent,
      AllMoveListComponent,
      ChartsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      GoogleChartsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
