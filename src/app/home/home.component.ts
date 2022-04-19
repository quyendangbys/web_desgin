import { Component, OnInit } from '@angular/core';
// @ts-ignore
import AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fakeMenu = [
    {
      title: 'Diagramming & Flowcharting',
      desc: `Create powerful flowcharts and visuals to show clear processes that drive the better decision for your business.`
    },
    {
      title: 'Floor Plan Design',
      desc: `Offer a flexible and easy-to-use floor planning solution to maximize your space potential for everyone.`
    },
  ]
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
    });
  }

}
