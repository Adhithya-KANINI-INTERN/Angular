import { Component } from '@angular/core';
import { StateService } from '../state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

  newMessage = '';

  constructor(private stateService: StateService) {}

  sendMessage() {
    this.stateService.updateMessage(this.newMessage);
  }
}
