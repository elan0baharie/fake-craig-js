import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PostService]
})
export class WelcomeComponent implements OnInit {
  posts: Post[];

  goToPostingPage(clickedPost: Post) {
     this.router.navigate(['posts', clickedPost.id]);
   };
  constructor(private router: Router, private postService: PostService){}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
