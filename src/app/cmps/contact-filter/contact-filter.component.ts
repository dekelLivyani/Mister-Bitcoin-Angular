import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '../../models/contact'
import {ContactService} from '../../services/contact.service'

@Component({
  selector: 'app-contact-filter',
  template: `
  <input type="text" class="input-filter" name="term" placeholder="Search..." 
  [(ngModel)]="filterBy.term" (ngModelChange)="onSetFilter()">
  `,
   styleUrls: ['./contact-filter.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFilterComponent implements OnInit {
   @Input() contacts:Contact[] 
   public filterBy:{term:string} = {term:''}
   constructor(private contactService : ContactService) { }
   
   onSetFilter(){
      this.contactService.loadContacts(this.filterBy)
   }
  ngOnInit(): void {
  }

}
