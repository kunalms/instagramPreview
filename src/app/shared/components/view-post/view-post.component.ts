import {Component, Inject} from '@angular/core';
import {InstagramPost} from "../../models/instagram-post";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent {

  public post: InstagramPost;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { post: InstagramPost }, private dialogRef: MatDialogRef<ViewPostComponent>) {
    this.post = data.post;
  }

  likePost() {
    this.post.likes++;
    this.post.isLiked = true;
    this.dialogRef.close(this.post);
  }

  unLikePost() {
    this.post.likes--;
    this.post.isLiked = false;
    this.dialogRef.close(this.post);
  }
}
