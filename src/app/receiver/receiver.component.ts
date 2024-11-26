import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {

  message: string = '';

  constructor(private stateService: StateService) {
    this.stateService.message$.subscribe((msg) => {
      this.message =msg;
    });
  }

}
