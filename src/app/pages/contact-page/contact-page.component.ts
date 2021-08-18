import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../models/contact'
import {Observable} from 'rxjs'
@Component({
  selector: 'app-contact-page',
  template: `
  <section class="contact-page">
  <h1 class="title">Contacts</h1>
  <app-contact-filter [contacts]="contacts$|async"></app-contact-filter>
  <app-contact-list [contacts]="contacts$|async"></app-contact-list>
  <a class="add-contact" routerLink="/contact/edit">
     <span class="material-icons-outlined add-btn">add_circle</span>
  </a>
  </section>
  `,
   styleUrls: ['./contact-page.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent implements OnInit {
   contacts$: Observable<Contact[]>;

  constructor(private contactService: ContactService) { }
  ngOnInit(): void {
   this.contactService.loadContacts();
   this.contacts$ = this.contactService.contacts$
  }
}
