import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact } from '../../models/contact'
@Component({
   selector: 'app-contact-preview',
   template: `
   <a [routerLink]="['/contact',contact._id]">
      <section class="contact-preview">
         <img src="./assets/imgs/contact.png" alt="">
         {{contact.name}}
      </section>
   </a>
   `,
   styleUrls: ['./contact-preview.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPreviewComponent{
   @Input() contact: Contact
   constructor() { }
}
