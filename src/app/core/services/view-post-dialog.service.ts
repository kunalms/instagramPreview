import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ViewPostComponent} from "../../shared/components/view-post/view-post.component";
import {InstagramPost} from "../../shared/models/instagram-post";

@Injectable({
  providedIn: 'root'
})
export class ViewPostDialogService {

  constructor(public dialog: MatDialog) {
  }

  openDialog(post: InstagramPost | null): MatDialogRef<ViewPostComponent> {
    return this.dialog.open(ViewPostComponent, {
      autoFocus: false,
      disableClose: true,
      position: {
        right: '5vw'
      },
      width: '50%',
      data: {
        post
      }
    });
  }
}
