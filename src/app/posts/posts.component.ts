import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent{
  posts: any[] = [];
  loading: boolean = false;
  error: string | null=null;

  constructor(private apiService: ServiceService) {}

  // ngOnInit(): void {
  //   this.fetchPosts();
  // }

  fetchPosts(): void {
    this.loading = true;
    this.apiService.getposts().subscribe({
      next: (data) => {
        this.posts = data;
        console.log('Posts fetched:', data);
        this.loading=false;
      },

      error: (err) => {
        console.error('error fetching posts.',err);
        this.error= "Failed to Posts";
        this.loading=false;
      },

      complete: () =>{
        console.log('Fetching posts completed.');
      }
    });
  }

}
