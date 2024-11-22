// import { Component } from '@angular/core';
// import { fromEvent, map, switchMap, of, Subscription } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { ServiceService } from '../service.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-rxjs',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './rxjs.component.html',
//   styleUrls: ['./rxjs.component.css'],
// })
// export class RxjsComponent {
//   users: any[] = []; 
//   private subscription!: Subscription;

//   constructor(private service: ServiceService) {}

//   ngOnInit() {
//     const input = document.querySelector('input') as HTMLInputElement;

//     if (!input) {
//       console.error('Input element not found!');
//       return;
//     }

//     this.subscription = fromEvent(input, 'input')
//       .pipe(
//         map((event: any) => event.target.value.trim()), 
//         switchMap((value: string) => {
//           const limit = Number(value);
//           if (isNaN(limit) || limit <= 0) {
//             return of([]);
//           }
//           return this.service.getusers(limit).pipe(
//             catchError((err) => {
//               console.error('Error fetching users:', err);
//               return of([]); 
//             })
//           );
//         })
//       )
//       .subscribe({
//         next: (response) => {
//           this.users = response; 
//           console.log('Fetched users:', this.users);
//         },
//         error: (err) => {
//           console.error('Error in subscription:', err);
//         },
//       });
//   }

//   ngOnDestroy() {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
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

    this.subscription = this.service.getusers(this.limit).subscribe({
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
