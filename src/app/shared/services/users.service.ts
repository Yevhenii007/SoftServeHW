import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUsers } from '../types/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Array<IUsers> = [
    {
      id: 1,
      firstName: 'User1',
      lastName: 'User-1',
      email: 'some1@email.com',
      age: 23,
    },
    {
      id: 2,
      firstName: 'User2',
      lastName: 'User-2',
      email: 'some2@email.com',
      age: 28,
    },
    {
      id: 3,
      firstName: 'User3',
      lastName: 'User-3',
      email: 'some3@email.com',
      age: 21,
    },
  ];

  subject = new Subject<any>();

  getUsersService(): Promise<Array<IUsers>> {
    return new Promise((resolve) => resolve(this.users));
  }

  // addUserService(user: IUsers): Promise<Array<IUsers>>  {
  //   return new Promise(() => {
  //     if (this.users.length > 0) {
  //       user.id = this.users.slice(-1)[0].id + 1;
  //     }
  //     this.users = [...this.users, user];
  //     this.subject.next(this.users);
  //   })
  // }

  // editUserService(user: IUsers): Promise<Array<IUsers>>  {
  //   return new Promise(() => {
  //     let editedUserIndex: number = this.users.findIndex((item) => item.id === user.id);
  //     this.users = [...this.users.slice(0, editedUserIndex), user, ...this.users.slice(editedUserIndex + 1)];
  //     this.subject.next(this.users);
  //   })
  // }

  updateUserService(user: IUsers): Promise<Array<IUsers>> {
    return new Promise(() => {
      const existedUser = this.users.find((itemUser) => itemUser.id === user.id);
      if (existedUser) {
        this.users = this.users.map((itemUser) => itemUser.id === user.id ? user : itemUser);
      } else {
        this.users = [...this.users, user];
      }
      this.subject.next(this.users);
    })
  }

  deleteUserService(user: IUsers): Promise<Array<IUsers>> {
    return new Promise(() => {
      let deletedUserIndex: number = this.users.findIndex((item) => item.id === user.id);
      this.users = [...this.users.slice(0, deletedUserIndex), ...this.users.slice(deletedUserIndex + 1)];
      this.subject.next(this.users);
    })
  }

}
