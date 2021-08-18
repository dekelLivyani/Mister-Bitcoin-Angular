import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact } from '../../models/contact'

@Component({
  selector: 'app-contact-list',
  template: `<ul class="contact-list">
  <app-contact-preview *ngFor="let contact of contacts" [contact]="contact"></app-contact-preview>
</ul>`,
   styleUrls: ['./contact-list.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {

  constructor() { }
  @Input() contacts:Contact[] 
}
