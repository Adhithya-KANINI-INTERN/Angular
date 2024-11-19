import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customslider',
  standalone: true,
  imports: [],
  templateUrl: './customslider.component.html',
  styleUrl: './customslider.component.css'
})
export class CustomsliderComponent {
  @Input() sliderValue: number = 0;
}
