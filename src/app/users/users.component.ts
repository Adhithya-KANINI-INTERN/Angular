import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any[] = [];
  loading: boolean = false;
  error: string | null=null;
  limit: number = 5;

  constructor(private api: ServiceService) {}

  fetchUsers(): void {
    this.loading = true;
    this.error = null;
    this.api.getusers(this.limit).subscribe({
      next: (data) => {
        this.users=data;
        console.log('fetch ${data.length} users:', data);
        this.loading = false;
      },

      error: err => {
        console.error('Error fetching users:', err);
        console.log("Failed to fetch users. please try again later.");
        this.loading = false;
      },

      complete: () => {
        console.log('User fetching completed.');
      }
    }) 
  }
  

}
