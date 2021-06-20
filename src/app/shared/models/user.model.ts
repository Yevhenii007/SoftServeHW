import { IUsers } from '../types/users.interface';

export class User implements IUsers {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number | null,
  ) { }
}