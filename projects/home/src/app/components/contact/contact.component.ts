import { Component, AfterViewInit } from '@angular/core';

declare const AOS: any;

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }
}
