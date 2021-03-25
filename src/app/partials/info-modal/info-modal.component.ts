import { Component, Input, OnInit } from '@angular/core';
import UIModalContent from '../../models/ui.modal.model';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  modalContent: UIModalContent | undefined;

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.modalState.subscribe(modalState => {
      if(modalState.showModal){
        this.disableScrolling();
      } else {
        this.enableScrolling();
      }
      this.modalContent = modalState;
    })
  }

  disableScrolling(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    window.onscroll=function(){window.scrollTo(0, 0)};
  }

  enableScrolling(){
    window.onscroll=function(){};
  }

  closeModal() {
    if(!this.modalContent) return;
    this.uiService.setModalState({
      ...this.modalContent,
      showModal: false
    })
  }

}
