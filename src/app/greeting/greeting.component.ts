import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  name: string = 'Adhithya'; 

  getGreeting(): string {
    return `Hello, ${this.name}! Welcome to Angular.`;
  }

}
