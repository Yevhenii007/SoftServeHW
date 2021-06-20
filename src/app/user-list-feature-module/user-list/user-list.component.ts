import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modal-feature-module/modal/modal.component';
import { IUsers } from 'src/app/shared/types/users.interface';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  emptyObj = {} as IUsers;

  @ViewChild(ModalComponent, { static: false })
  private modalComponent: ModalComponent | undefined;


  showModal(): void {
    this.modalComponent?.showModal(this.emptyObj);
  }

}
