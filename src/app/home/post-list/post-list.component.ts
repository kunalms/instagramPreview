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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getPostsForUser().subscribe(posts => this.userPosts = posts);
  }

}
