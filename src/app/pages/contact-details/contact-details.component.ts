import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import { Subscription } from 'rxjs';
import { Contact } from '../../models/contact'
import { ActivatedRoute, Router } from '@angular/router';
import { Move } from 'src/app/models/move';
import { UserService } from 'src/app/services/user.service';

@Component({
   selector: 'app-contact-details',
   templateUrl: './contact-details.component.html',
   styleUrls: ['./contact-details.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit {
   contact: Contact
   subscriptionRoute: Subscription
   subscriptionUser: Subscription
   movesByContact: Move[]

   constructor(
      private contactService: ContactService,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService

   ) { }

   ngOnInit(): void {
      this.subscriptionRoute = this.route.data.subscribe(data => {
         
         this.contact = data.contact
      })
      this.subscriptionUser = this.userService.loggedInUser$.subscribe(user => {
         const loggedInUser = user
         this.movesByContact = loggedInUser.moves.filter
            ((move: Move) => move.to._id === this.contact._id)
      })
   }
   async removeContact() {
      await this.contactService.deleteContact(this.contact._id)
      this.router.navigateByUrl('/contact')
   }
   ngOnDestroy(): void {
      this.subscriptionRoute.unsubscribe()
      this.subscriptionUser.unsubscribe()
   }

}
