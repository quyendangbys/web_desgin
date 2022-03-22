import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {
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
    
  }

}
