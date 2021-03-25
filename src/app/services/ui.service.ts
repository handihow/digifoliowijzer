import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import UIModalContent from '../models/ui.modal.model';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  private _createDefaultModalState = () : UIModalContent => {
    const emptyModal:UIModalContent =
      {
        title: '',
        highlight: '',
        text: '',
        showModal: false
      }
    return emptyModal;
  }

  private _modalState: BehaviorSubject<UIModalContent> = new BehaviorSubject(this._createDefaultModalState());
  public readonly modalState: Observable<UIModalContent> = this._modalState.asObservable();

  public setModalState = (modalState: UIModalContent) => {
    this._modalState.next(modalState);
  }


}
