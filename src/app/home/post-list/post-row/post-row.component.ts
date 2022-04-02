import {Component, Input, OnInit} from '@angular/core';
import {InstagramPost} from "../../../shared/models/instagram-post";
import {ViewPostDialogService} from "../../../core/services/view-post-dialog.service";

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.scss']
})
export class PostRowComponent implements OnInit {

  @Input() post: null | InstagramPost = null;

  constructor(private viewPostDialogService: ViewPostDialogService) {
  }

  ngOnInit(): void {
  }

  openViewPostDialog(post: InstagramPost | null) {
    this.viewPostDialogService.openDialog(post)
      .afterClosed()
      .subscribe((updatedPost: InstagramPost) => {
        post = updatedPost;
      });
  }
}
