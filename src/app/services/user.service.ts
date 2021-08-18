import { Injectable } from '@angular/core';
import { utilService } from './util.service';
import { Move } from '../models/move';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Contact } from './contact.model';

const KEY_Users = 'users';
const KEY_LoggedInUser = 'loggedInUser';

@Injectable({
   providedIn: 'root'
})
export class UserService {

   private _loggedInUser$ = new BehaviorSubject<User>(utilService.load(KEY_LoggedInUser))
   public loggedInUser$ = this._loggedInUser$.asObservable()

   constructor() { }
   login(userName: string) {

      var users = utilService.load(KEY_Users) || [{
         _id: "2F3fds6NNv1Sa0s",
         name: "test",
         coins: 100,
         moves: <Move[]>[],
      }];
      let signedUser = users.find((u: User) => u.name === userName)
      if (signedUser) this._saveToStorageAndNextBall(signedUser)
      else {
         signedUser = this._singup(userName, users)
         this._saveToStorageAndNextBall(signedUser)
      }
   }
   logout() {
      this._saveToStorageAndNextBall(null)
   }

   getLoggedinUser() {
      return utilService.load(KEY_LoggedInUser);
   }

   async addMove(contact: Contact, amount: number) {
      const loggedInUser: User = { ...this._loggedInUser$.value }
      const users: User[] = [...utilService.load(KEY_Users)]
      if (loggedInUser.coins - amount < 0) {
         // console.log('not enough coins');
         return Promise.reject('not enough coins')
      }
      loggedInUser.coins = loggedInUser.coins - amount;
      const move = {
         _id: utilService.makeId(),
         to: contact,
         at: Date.now(),
         amount
      }
      loggedInUser.moves.push(move)
      const userIdx = users.findIndex((u: User) => u._id === loggedInUser._id)
      users.splice(userIdx, 1, loggedInUser)
      this._saveToStorageAndNextBall(loggedInUser)
      utilService.save(KEY_Users, users)
      return Promise.resolve('Move added!')
   }

   _saveToStorageAndNextBall(loggedInUser: User) {
      utilService.save(KEY_LoggedInUser, loggedInUser)
      this._loggedInUser$.next(loggedInUser);
   }

   _singup(userName: string, users: User[]) {
      const user = this._createNewUser(userName);
      users.push(user);
      utilService.save(KEY_Users, users)
      utilService.save(KEY_LoggedInUser, user)
      return user;
   }
   _createNewUser(userName: string) {
      return {
         _id: utilService.makeId(),
         name: userName,
         coins: 100,
         moves: <Move[]>[],
      }
   }
}
