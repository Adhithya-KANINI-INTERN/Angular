import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})

export class RegistrationFormComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([this.createAddress()]),
    });
  }
  
  get addresses(): FormArray {
    return this.registrationForm.get('addresses') as FormArray;
  }
  
  createAddress(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      city: [''],
      zip: [''],
    });
  }
  
  addAddress(): void {
    this.addresses.push(this.createAddress());
  }
  
  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }
  
  onSubmit(): void {
    console.log(this.registrationForm.value);
  }
  
}



