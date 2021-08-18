import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
   selector: 'app-all-move-list',
   template: `
     <ul class="move-list" *ngIf="moves.length">
   <h1 class="title">Move List:</h1>
   <li *ngFor="let move of moves">
      <p> <span class="sub-title">To:</span> {{move.to.name}}</p>
      <p><span class="sub-title"> At:</span> {{move.at | date:'shortDate'}} </p>
      <p><span class="sub-title"> Amount:</span> {{move.amount}} </p>
   </li>
</ul>
`,
   styleUrls: ['./all-move-list.component.scss']
})
export class AllMoveListComponent implements OnInit {
   public moves: Move[];
   private subscription: Subscription
   constructor(private userService: UserService) { }

   ngOnInit(): void {
      this.subscription = this.userService.loggedInUser$.subscribe((user) => {
         this.moves = user.moves;
      })
   }
   ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubscribe()
   }
         

}
