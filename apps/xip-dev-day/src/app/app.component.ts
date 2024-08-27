import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ColorPickerComponent} from "./color-picker/color-picker.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ColorPickerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'xip-dev-day';
}
