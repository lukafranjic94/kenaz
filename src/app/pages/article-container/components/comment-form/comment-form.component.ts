import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ICommentData } from '../../article-container.component';

export interface ICommentFormData {
  readonly name: string;
  readonly email: string;
  readonly body: string;
}

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent {
  @Input() articleId: string;
  @Output() addComment: EventEmitter<ICommentData> =
    new EventEmitter<ICommentData>();
  public commentFormGroup: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(254)]],
    email: ['', [Validators.required, Validators.email, Validators.max(254)]],
    body: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(254)],
    ],
  });
  constructor(private fb: FormBuilder) {}

  public onAddComment(formDirective: FormGroupDirective): void {
    this.addComment.emit({
      commentFormData: this.commentFormGroup.value,
      articleId: this.articleId,
    });
    formDirective.resetForm();
    this.commentFormGroup.reset();
  }
}
