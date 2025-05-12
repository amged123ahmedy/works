import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

type DropdownType = 'projects' | 'pages' | 'menu';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  dropdownOpen: Record<DropdownType, boolean> = {
    projects: false,
    pages: false,
    menu: false
  };

  toggleDropdownMenu(menu: DropdownType) {
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
