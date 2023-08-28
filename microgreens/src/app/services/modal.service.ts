import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public visible: boolean = false;
  constructor() { }

  public show(componentName: string) {
    
    this.visible = true;
  }
}
