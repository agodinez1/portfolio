import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
  // styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  avatarImagePath: string;
  fidelityImagePath: string;

  constructor() {
  }

  ngOnInit() {
    this.avatarImagePath = './assets/images/andre-avatar.png';
    this.fidelityImagePath = './assets/images/fidelity-logo.jpg';
  }

}
