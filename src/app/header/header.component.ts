import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoImagePath: string;

  constructor() {
  }
  ngOnInit() {
    this.logoImagePath = './assets/images/andre-logo-white.png';
  }

}
