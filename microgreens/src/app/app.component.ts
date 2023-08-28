import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'microgreens';


  constructor(private primengConfig: PrimeNGConfig) { }
  
  ngOnInit() {
      this.primengConfig.ripple = true;
  }

  BasicShow: boolean = false;

  showDialog() {
      this.BasicShow = true;
  }
}
