import { Component, OnInit } from '@angular/core';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
    });
  }

}
