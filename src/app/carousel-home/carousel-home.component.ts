import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselHomeComponent implements OnInit {
  // @ViewChild('target') target: any;
  // @ViewChild('circle') circle: any;

  data = [
    {
      name: 'Target & Report',
      icon: ''
    },
    {
      name: 'Plan & Execute',
      icon: ''
    },
    
    {
      name: 'Communicate & Engage',
      icon: ''
    },
    {
      name: 'Measure & Track',
      icon: ''
    },
  ]
  isActiveIndex = 0;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // this.circle.nativeElement.innerHTML =
      //   Array.from(this.circle.nativeElement?.innerText)
      //     .map((char, i) => {
      //       return `<span style="transform:rotate(${270 + 10 + i * 5}deg)">${char}</span>`
      //     }).join('');

      (this.data ?? []).forEach((x, index) => {
        const itemPipe = document.getElementById('circle_' + index) as HTMLElement;


        // itemPipe.innerHTML =
        // Array.from(itemPipe?.innerText)
        // .map((char, i) => {
        //   return `<span style="transform:rotate(${270 + 10 + i * 5}deg)">${char}</span>`
        // }).join('');   
        console.log('index', index);
        if (index === 0) {
          itemPipe.innerHTML =
          Array.from(itemPipe?.innerText)
          .map((char, i) => {
            return `<span style="transform:rotate(${270 + 20 + i * 2.7}deg)">${char}</span>`
          }).join('');   
        }
        if (index === 1) {
          itemPipe.innerHTML =
          Array.from(itemPipe?.innerText)
          .map((char, i) => {
            return `<span style="transform:rotate(${27 + i * 2.7}deg)">${char}</span>`
          }).join('');   
        }

        if (index === 2) {
          itemPipe.innerHTML =
          Array.from(itemPipe?.innerText)
          .map((char, i) => {
            return `<span style="transform:rotate(${180 + 20 + i * 3.3}deg)">${char}</span>`
          }).join('');   
        }

        if (index === 3) {
          itemPipe.innerHTML =
          Array.from(itemPipe?.innerText)
          .map((char, i) => {
            return `<span style="transform:rotate(${90 + 20 + i * 3.3}deg)">${char}</span>`
          }).join('');   
        }
      })
    })
  }

}
