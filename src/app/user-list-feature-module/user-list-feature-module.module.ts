import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { TableComponent } from './parts/table/table.component';
import { TrItemComponent } from './parts/tr-item/tr-item.component';
import { ModalFeatureModuleModule } from '../modal-feature-module/modal-feature-module.module';

@NgModule({
  declarations: [
    UserListComponent,
    TableComponent,
    TrItemComponent,
  ],
  imports: [
    CommonModule,
    ModalFeatureModuleModule,
  ],
  exports: [
    UserListComponent,
    TableComponent,
    TrItemComponent,
  ]
})
export class UserListFeatureModuleModule { }
