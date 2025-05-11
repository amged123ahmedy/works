import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('contactForm') contactFormRef!: ElementRef<HTMLFormElement>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.contactFormRef) {
      const form = this.contactFormRef.nativeElement;

      this.renderer.listen(form, 'submit', (event: Event) => {
        const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
        let valid = true;

        inputs.forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.style.border = '1px solid red';
          } else {
            input.style.border = '';
          }

          // Phone number validation (regex for a specific pattern)
          if (input.type === 'tel' && input.value.trim() && !this.validatePhoneNumber(input.value.trim())) {
            valid = false;
            input.style.border = '1px solid red';
          }

          // URL validation (regex for a valid URL format)
          if (input.type === 'url' && input.value.trim() && !this.validateURL(input.value.trim())) {
            valid = false;
            input.style.border = '1px solid red';
          }
        });

        if (!valid) {
          event.preventDefault();
          alert('Please fill in all fields correctly.');
        }
      });
    }
  }

  // Regex validation for phone number
  validatePhoneNumber(phone: string): boolean {
    const phoneRegex = /^\+(\d{1,3})\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/;
    return phoneRegex.test(phone);
  }

  // Regex validation for URL
  validateURL(url: string): boolean {
    const urlRegex = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
    return urlRegex.test(url);
  }
}
