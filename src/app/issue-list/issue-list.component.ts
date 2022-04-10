import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';
import { IssueReportComponent } from '../issue-report/issue-report.component';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  showReportIssue = false;
  issues: Issue[] = [];
  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }
  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }
}
