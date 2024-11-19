import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  value: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.value = this.route.snapshot.paramMap.get('value');
  }

}
