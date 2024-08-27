import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class ColorPickerComponent {
  colors: { header: string; footer: string; content: string } = {
    header: '#ffffff',
    footer: '#ffffff',
    content: '#ffffff',
  };

  generateColors(): void {
    this.colors = {
      header: this.getRandomColor(),
      footer: this.getRandomColor(),
      content: this.getRandomColor(),
    };
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
