import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  public visible: boolean = false;
  public show: string = 'user-profile';

  public itemsTotal: number = 0;
  public items: any = [];
  // private _subscriptions: Subscription[] = [];

  public get username() {
    return 'test@gmail.com'; //TODO: update this to real username
  }

  public get loggedIn(): boolean {
    return false;
  }

  public get header() {
    switch (this.show) {
      case 'userProfile':
        return 'User Profile';
      case 'login':
        return 'User Profile';
      case 'register':
        return 'User Profile';
    }
    return 'Login';
  }

  public onClickUserProfile() {
    this.show = 'login';
    this.visible = true;
  }

}
