import { Component } from '@angular/core';
import { RoommateService } from '../services/roommate.service';
import { RoommateRequest } from 'src/shared/models/roommate.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-roommate-requests',
  templateUrl: './roommate-requests.component.html',
  styleUrls: ['./roommate-requests.component.scss']
})
export class RoommateRequestsComponent {
  roommateRequests: RoommateRequest[] = [];
  targetId?: number | null;

  constructor(private roommateRequestService: RoommateService, private userService: UserService) { }


  ngOnInit(): void {
    this.targetId = this.userService.getStudentId();
    if (this.targetId) {
      this.loadRoommateRequests(this.targetId);
    }
  }

  private loadRoommateRequests(targetId: number): void {
    this.roommateRequestService.getRoommateRequestsForTarget(targetId).subscribe({
      next: (response) => {
        this.roommateRequests = response.requests;
        this.markRequestsAsViewed();
      },
      error: (error) => console.error('Error fetching roommate requests:', error)
    });
  }

  private markRequestsAsViewed(): void {
    const requestIds = this.roommateRequests.map(request => request.request_id);
    if (requestIds.length > 0) {
      this.roommateRequestService.markRequestsAsViewed(requestIds).subscribe(() => {
        console.log('Requests marked as viewed');
      });
    }
  }

}
