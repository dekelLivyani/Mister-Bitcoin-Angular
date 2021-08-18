import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
   selector: 'app-header',
   template: `
 <section class="header">
   <a routerLink="">  <img src="./assets/imgs/logo.png" alt=""> </a>
      <button class="menu-btn simple-button" (click)="toggleMenu()">
         <span class="material-icons-outlined">menu</span>
   </button>
     <nav [ngClass]="{'is-menu-open': isMenuOpen}">
      <a routerLink="" routerLinkActive="active"
      [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">Home</a> <span class="space"> | </span>
      <a routerLink="contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
      <span class="space"> | </span>
      <a routerLink="moves" routerLinkActive="active" (click)="closeMenu()">Moves</a>
      <section *ngIf="loggedinUser">
      <span class="space"> | </span> <button class="simple-button logout"(click)="onLogout()">Logout</button>
      </section>
     </nav>
     <section class="dark-window" [ngClass]="{isMenuOpen: isMenuOpen}" 
(click)="closeMenu()"></section>
  </section>
  `,
   styleUrls: ['./header.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
   public loggedinUser: User
   public subscription: Subscription;
   public isMenuOpen: boolean = false;

   constructor(private userService: UserService, private router: Router, private cd: ChangeDetectorRef) { }
   @Output() onMenuChange = new EventEmitter<boolean>()
   onLogout() {
      this.userService.logout()
      this.closeMenu()
      this.router.navigateByUrl('')
   }

   toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      this.onMenuChange.emit(this.isMenuOpen)
   }
   closeMenu() {
      this.isMenuOpen = false
      this.onMenuChange.emit(this.isMenuOpen)
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
