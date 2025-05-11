import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgIf], // <-- Add NgIf here
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  dropdownOpen = {
    projects: false,
    pages: false,
    menu: false
  };

  toggleDropdownMenu(menu: 'projects' | 'pages' | 'menu') {
    if (menu === 'menu') {
      this.dropdownOpen.menu = !this.dropdownOpen.menu;
      if (!this.dropdownOpen.menu) {
        this.dropdownOpen.projects = false;
        this.dropdownOpen.pages = false;
      }
    } else {
      this.dropdownOpen[menu] = !this.dropdownOpen[menu];
    }
  }
}
