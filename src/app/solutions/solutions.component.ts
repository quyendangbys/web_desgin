import { Component, OnInit } from '@angular/core';
// @ts-ignore
import AOS from 'aos';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
    });
  }
}
