import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Injectable({
   providedIn: 'root'
})
export class ContactResolver implements Resolve<Observable<Contact>> {
   constructor(private contactService: ContactService) { }
   resolve(route: ActivatedRouteSnapshot) {
      const { id } = route.params;
      return this.contactService.getContactById(id)
   }
}
