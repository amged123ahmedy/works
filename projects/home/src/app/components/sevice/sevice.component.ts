import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const AOS: any;

@Component({
  selector: 'app-sevice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sevice.component.html',
  styleUrls: ['./sevice.component.css']
})
export class SeviceComponent implements AfterViewInit {
  selectedIndex: number | null = null;

  faqs = [
    {
      question: 'How Long You Take To Design Website ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...'
    },
    {
      question: 'What Type Of Projects Do You Take On ?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      question: 'How Do You Charge For Projects ?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      question: 'How Often Can We Communicate?',
      answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  toggleAnswer(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }
}
