import { Component, Input, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modal-feature-module/modal/modal.component';
import { UsersService } from 'src/app/shared/services/users.service';
import { IUsers } from 'src/app/shared/types/users.interface';

@Component({
  selector: 'app-tr-item',
  templateUrl: './tr-item.component.html',
  styleUrls: ['./tr-item.component.scss']
})
export class TrItemComponent {

  @Input() user!: IUsers;

  @Input() indexUserElement!: number;

  @ViewChild(ModalComponent, { static: true })
  private modalComponent: ModalComponent | undefined;

  constructor(public usersService: UsersService) { }

  deleteUser(user: IUsers): void {
    this.usersService.deleteUserService(user);
  }

  editUser(user: IUsers) {
    this.modalComponent?.showModal(user);
  }

}
