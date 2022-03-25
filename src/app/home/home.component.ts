import { Component, OnInit } from '@angular/core';
// @ts-ignore
import AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
    });
  }

}
