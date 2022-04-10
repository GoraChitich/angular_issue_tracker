import { Injectable } from '@angular/core';
import { Issue } from './issue';
import {issues} from '../assets/mocjkup-issues'
@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] = issues;
  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue =>
    !issue.completed);
    }
}