import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Comment{
  id: number,
  body: string,
  postId: number
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseBath = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseBath);
  }

}
