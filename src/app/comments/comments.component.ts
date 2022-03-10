import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from '../http/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];
  constructor(private commentsService: CommentService) { }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(response => this.comments = response)
  }

}
