import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  template: `
    <div class="timeline">
      <div *ngFor="let milestone of milestones" class="timeline-item">
        <h3>{{ milestone.year }}</h3>
        <p>{{ milestone.description }}</p>
      </div>
    </div>`
})
export class TimelineComponent {
  @Input() milestones: { year: number; description: string }[] = [];
}
