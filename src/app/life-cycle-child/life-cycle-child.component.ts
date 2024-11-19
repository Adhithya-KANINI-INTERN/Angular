import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-child.component.html',
  styleUrl: './life-cycle-child.component.css'
})
export class LifeCycleChildComponent implements OnInit {


  @Input() value: string = '';

  constructor() {
    console.log("Child Constructor!!");
  }
  ngOnInit(): void {
    console.log("Child NgOnInit!!");
  }

  ngOnChanges(): void {
    console.log("Child NgOnChanges!!");
  }
  
  ngDoCheck(): void {
    console.log("Child NgDoCheck!!");
  }

  ngAfterContentInit(): void {
    console.log("Child NgAfterContentInit!!");
  }

  ngAfterContentChecked(): void {
    console.log("Child NgAfterContentChecked!!");
  }

  ngAfterViewInit(): void {
    console.log("Child NgAfterViewInit!!");
  }

  ngAfterViewChecked(): void {
    console.log("Child NgAfterViewChecked!!");
  }

  ngOnDestroy(): void {
    console.log("Child NgOnDestroy!!");
  }

}
