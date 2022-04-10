import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {
  @Input() currentIssue: Issue | undefined;
  @Output() formClose = new EventEmitter();
  issueForm: FormGroup | undefined;

  constructor(private builder: FormBuilder, private issueService: IssuesService ) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: [this.currentIssue?.title, Validators.required],
      description: [this.currentIssue?.description],
      priority: [this.currentIssue?.priority, Validators.required],
      type: [this.currentIssue?.type]
    });
    this.issueForm.controls['type'].disable();

  }

  updateIssue() {
    ;
    this.issueService.updateIssue(this.currentIssue,this.issueForm?.getRawValue());
    this.formClose.emit("");
  }

}
