import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Subscription, switchMap } from 'rxjs';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent {
  users: any[] = [];
  limit!: number; 
  private subscription!: Subscription;

  constructor(private service: ServiceService) {}

  fetchUsers(): void {
    if (this.limit <= 0 && this.limit == 0) {
      console.error('Invalid limit. Enter a number greater than 0.');
      return;
    }

    console.log('Fetching users with limit:', this.limit); 

    this.subscription = this.service.getusers(this.limit).pipe(
      map((response: any) => {
        return response.map((user: any) => ({
          ...user,
          name: user.name.toUpperCase(),
        }));
      }),
      switchMap((transformedUsers: any[]) => {
        return [transformedUsers];
      })
    )
    .subscribe({
      next: (response) => {
        console.log('API response:', response);
        this.users = response; 
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
