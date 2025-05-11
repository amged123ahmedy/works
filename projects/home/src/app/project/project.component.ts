import { Component, AfterViewInit } from "@angular/core";

declare const AOS: any;

@Component({
  selector: 'project-root',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }
}
