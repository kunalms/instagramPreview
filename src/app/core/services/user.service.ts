import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InstagramPost} from "../../shared/models/instagram-post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly INSTAGRAM_POST_API = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json';

  constructor(private httpClient: HttpClient) { }

  getPostsForUser(): Observable<InstagramPost[]>{
    return this.httpClient.get<InstagramPost[]>(this.INSTAGRAM_POST_API);
  }
}
