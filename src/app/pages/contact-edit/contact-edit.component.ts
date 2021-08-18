import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
   selector: 'app-contact-edit',
   templateUrl: './contact-edit.component.html',
   styleUrls: ['./contact-edit.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEditComponent implements OnInit {
   title: string
   contact: Contact
   subscription: Subscription
   editForm: FormGroup

   constructor(
      private contactService: ContactService,
      private route: ActivatedRoute,
      private router: Router,
   ) { }

   ngOnInit(): void {
      this.subscription = this.route.data.subscribe(data => {
         this.contact = (data.contact) ? data.contact : this.contactService.getEmptyContact()
      })
      this.title = (this.contact._id) ? 'Edit contact' : 'Add contact'
   }
   saveContact({ value }: any) {
      const newFormValue = JSON.parse(JSON.stringify(value))
      if (this.contact._id) newFormValue['_id'] = this.contact._id
      this.contactService.saveContact(newFormValue)
      this.router.navigateByUrl('/contact')
   }
   get name() {
      return this.editForm.get('name');
   }
   get email() {
      return this.editForm.get('email');
   }
   get phone() {
      return this.editForm.get('phone');
   }

}
