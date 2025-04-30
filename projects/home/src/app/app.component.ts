import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
}
