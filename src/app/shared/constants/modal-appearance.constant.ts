import { InjectionToken } from "@angular/core";
import { IModalAppearance } from '../types/modal-appearance.interface';

export const MODAL_APPEARANCE_TOKEN = new InjectionToken<IModalAppearance>('appearance.config');

export const MODAL_APPEARANCE_CONFIG: {[name: string]: IModalAppearance} = {
  add: {
    title: 'Add user modal',
    btnValue: 'Add',
    btnClass: 'btn-success',
  },
  edit: {
    title: 'Edit user modal',
    btnValue: 'Edit',
    btnClass: 'btn-warning',
  },
}