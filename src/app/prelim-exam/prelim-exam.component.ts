import { Component, signal } from "@angular/core";

@Component({
    selector: 'app-activity-1',
    templateUrl: './prelim-exam.component.html',
    styleUrls: ['./prelim-exam.component.scss']
})
export class prelimExamComponent {
    public title = signal('Activity 1');

}