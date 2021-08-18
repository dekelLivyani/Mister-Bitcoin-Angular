import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { Contact } from 'src/app/services/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
   selector: 'app-transfer-fund',
   template: `
   <section class="transfer-fund">
      <h2>Transfer coins to {{contactToTransfer.name}}</h2>
      <div class="action">
         <span>Amount: </span>
         <input type="number" [(ngModel)]="amount">
         <button class="transfer" [disabled]="!amount" (click)="transfer()">Transfer</button>
      </div>
      <section class="transfer-modal" *ngIf="TransferMsgOpen">
         {{TransferMsgOpen}}
      </section>
   </section>
  `,
   styleUrls: ['./transfer-fund.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferFundComponent implements OnInit {
   @Input() contactToTransfer: Contact
   private subscription: Subscription
   public loggedInUser: User
   public amount: number;
   public TransferMsgOpen: string;

   constructor(private userService: UserService) { }

   async transfer() {
      try {
         var answer = await this.userService.addMove(this.contactToTransfer, this.amount)
         this.amount = null
         this.TransferMsgOpen = answer;
      } catch (err) {
         this.TransferMsgOpen = err;
      } finally {
         setTimeout(() => {
            this.TransferMsgOpen = null
         }, 2500)
      }

   }
   ngOnInit(): void {

      this.subscription = this.userService.loggedInUser$.subscribe(user => {
         this.loggedInUser = user;
      })
   }
   ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubscribe()
   }

}
