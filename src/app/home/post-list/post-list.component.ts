import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {InstagramPost} from "../../shared/models/instagram-post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public userPosts: InstagramPost[] = [];
  sortBy: string = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getPostsForUser().subscribe(posts => this.userPosts = posts);
  }

  sortPosts() {
    this.userPosts = this.userPosts.sort((post1: InstagramPost, post2: InstagramPost) => {
      if (this.sortBy === 'likes_asc') {
        if (post1.likes < post2.likes) {
          return -1;
        }
        if (post1.likes > post2.likes) {
          return 1;
        }
        // a must be equal to b
        return 0;
      }

      if (this.sortBy === 'likes_desc') {
        if (post1.likes > post2.likes) {
          return -1;
        }
        if (post1.likes < post2.likes) {
          return 1;
        }
        // a must be equal to b
        return 0;
      }
      return 0;
    });
  }
}
