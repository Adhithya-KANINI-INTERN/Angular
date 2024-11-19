import { Component } from '@angular/core';

@Component({
  selector: 'app-app-hover',
  standalone: true,
  imports: [],
  templateUrl: './app-hover.component.html',
  styleUrl: './app-hover.component.css'
})
export class AppHoverComponent {
  textColor: string = 'black';

  onMouseEnter() {
    this.textColor = 'blue';
  }

  onMouseLeave() {
    this.textColor = 'black';
  }
}
