import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
   selector: 'app-homepage',
   templateUrl: './homepage.component.html',
   styleUrls: ['./homepage.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
   constructor(
      private userService: UserService,
      private bitcoinService: BitcoinService,
      private cd: ChangeDetectorRef,
   ) { }

   loggedinUser: User;
   userName: string;
   bitcoinVal: number = null;
   subscription: Subscription;
   lastMoves: Move[];
   async onLogin() {
      this.userService.login(this.userName)
      this.userName = '';
      try {
         this.bitcoinVal = await this.bitcoinService.getRate(this.loggedinUser.coins)
         this.cd.markForCheck();
      }catch(err){
         console.log('err', err)
      }
   }
   async ngOnInit() {
      this.subscription = this.userService.loggedInUser$.subscribe((user) => {
         this.loggedinUser = user;
         this.cd.markForCheck();
         if (this.loggedinUser) {
            this.lastMoves = this.loggedinUser.moves.slice(
               this.loggedinUser.moves.length - 3, this.loggedinUser.moves.length)
         }
      })
      try {
         if (this.loggedinUser) this.bitcoinVal = await this.bitcoinService.getRate(this.loggedinUser.coins)
         this.cd.markForCheck();
      } catch (err) {
         console.log('err', err)
      }
   }
   ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubscribe()
   }

}
