import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlidersComponent } from "../CB/sliders/sliders.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SlidersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design';
}
