import { Component, Inject, OnInit } from '@angular/core';
import { IUsers } from 'src/app/shared/types/users.interface';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { IModalAppearance } from '../../shared/types/modal-appearance.interface';
import { MODAL_APPEARANCE_TOKEN } from 'src/app/shared/constants/modal-appearance.constant';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  users: Array<IUsers> = [];
  id: number = 0;
  firstnameValue!: string;
  lastnameValue!: string;
  emailValue!: string;
  ageValue!: number | null;

  isShownModal: boolean | undefined = false;
  modalAttributes: IModalAppearance = this.config.add;

  constructor(
    @Inject(MODAL_APPEARANCE_TOKEN) private config: { [name: string]: IModalAppearance },
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsersService().then((users: Array<IUsers>) => this.users = users)
  }

  updateUser(): void {
    // if (this.firstnameValue && this.lastnameValue && this.emailValue && this.ageValue) {
      let newUser: IUsers = new User(
        this.id,
        this.firstnameValue,
        this.lastnameValue,
        this.emailValue,
        this.ageValue
      );
      this.usersService.updateUserService(newUser);
      console.log(this.id);
      this.resetForm();
      this.getUsers();
      this.hideModal();
    // } else {
    //   alert('Add more data');
    // }
  }

  showModal(user: IUsers) {
    const isUserPassed = typeof user.id !== 'undefined';
    if (isUserPassed) {
      this.id = user.id;
      this.firstnameValue = user.firstName;
      this.lastnameValue = user.lastName;
      this.emailValue = user.email;
      this.ageValue = user.age;
    } else {
      console.log(this.users.length);
      
      this.users.length > 0 ?
        this.id = this.users.slice(-1)[0].id + 1 :
        this.id = 0;
    }
    this.modalAttributes = isUserPassed ? this.config.edit : this.config.add;
    this.isShownModal = true;
  }

  hideModal(): void {
    this.isShownModal = false;
    this.resetForm();
  }

  resetForm() {
    this.id = 0;
    this.firstnameValue = '';
    this.lastnameValue = '';
    this.emailValue = '';
    this.ageValue = null;
  }

}

