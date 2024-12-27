import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Post } from '../post/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  paginatedPosts: Post[] = [];
  currentPage: number = 1;
  postsPerPage: number = 5; 

  constructor(private apiService: PostService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.updatePaginatedPosts();
    });
  }

  updatePaginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    this.paginatedPosts = this.posts.slice(startIndex, startIndex + this.postsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.postsPerPage < this.posts.length) {
      this.currentPage++;
      this.updatePaginatedPosts();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedPosts();
    }
  }
}