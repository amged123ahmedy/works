import { Component, AfterViewInit } from '@angular/core';

declare const AOS: any;

@Component({
  selector: 'app-fille',
  imports: [],
  templateUrl: './fille.component.html',
  styleUrl: './fille.component.css'
})
export class FilleComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }
}
