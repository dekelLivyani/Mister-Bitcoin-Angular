import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
   selector: 'app-header',
   template: `
 <section class="header">
     <img src="./assets/imgs/logo.png" alt="">
     <nav>
      <a routerLink="" routerLinkActive="active"
      [routerLinkActiveOptions]="{exact:true}">Home</a> |
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <section *ngIf="loggedinUser">
         |<button class="simple-button logout"(click)="onLogout()">Logout</button>
      </section>
     </nav>
  </section>
  `,
   styleUrls: ['./header.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
   public loggedinUser: User
   public subscription: Subscription;
   constructor(private userService: UserService, private router: Router, private cd: ChangeDetectorRef) { }
   onLogout() {
      this.userService.logout()
      this.router.navigateByUrl('')
   }
   ngOnInit(): void {
      this.subscription = this.userService.loggedInUser$.subscribe((user) => {
         this.loggedinUser = user;
         this.cd.markForCheck();
      })
   }
   ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubscribe()
   }

}
