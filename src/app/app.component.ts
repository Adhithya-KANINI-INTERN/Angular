import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { PopupMessageComponent } from './popup-message/popup-message.component';
import { FormsModule } from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { CommonModule } from '@angular/common';
import { CustomsliderComponent } from './customslider/customslider.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { AppHoverComponent } from "./app-hover/app-hover.component";
import { ContactComponent } from "./contact/contact.component";
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { PostsComponent } from "./posts/posts.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { SenderComponent } from "./sender/sender.component";
import { ReceiverComponent } from "./receiver/receiver.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetingComponent,
    PopupMessageComponent, FormsModule,
    LifeCycleComponent, CommonModule,
    RouterModule, CustomsliderComponent,
    HoverHighlightDirective, AppHoverComponent,
    FeedbackFormComponent, RegistrationFormComponent,
    PostsComponent, RxjsComponent, SenderComponent, ReceiverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'firstangularapp';
value: any;

showLifeCycle: boolean = false;


// value: string = 'Adhi';

onShowHide(): void {
  this.showLifeCycle = !this.showLifeCycle;
}
}
