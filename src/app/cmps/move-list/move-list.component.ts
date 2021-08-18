import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Move } from 'src/app/models/move';

@Component({
   selector: 'app-move-list',
   template: `
   <ul class="move-list" *ngIf="moves.length">
   <h1 class="title">Move List:</h1>
   <li *ngFor="let move of moves">
      <p> <span class="sub-title">To:</span> {{move.to.name}}</p>
      <p><span class="sub-title"> At:</span> {{move.at |date:'shortDate'}} </p>
      <p><span class="sub-title"> Amount:</span> {{move.amount}} </p>
   </li>
</ul>
   `,
   styleUrls: ['./move-list.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoveListComponent {
   @Input() moves: Move[]
   constructor() { }

}
