import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private messageSubject = new BehaviorSubject<string>('Initial Message');
  message$ = this.messageSubject.asObservable();

  updateMessage(newMessage: string) {
    this.messageSubject.next(newMessage);
  }
}
