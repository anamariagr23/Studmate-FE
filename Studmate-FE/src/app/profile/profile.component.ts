import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { UtilService } from 'src/shared/utils/util.service';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  student: any;
  compatibilityScore: any;
  categories!: any[];
  loggedInUserId?: number | null;
  studentId?: number;
  private queryParamsSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private utilService: UtilService, private studentService: StudentService, private userService: UserService) { }


  ngOnInit(): void {
    this.loggedInUserId = this.userService.getStudentId();
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.studentId = Number(params['id']);
      this.loadStudentProfile(this.studentId);
    });
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  loadStudentProfile(studentId: number): void {
    this.studentService.getStudentProfile(studentId).subscribe(response => {
      this.student = response.student;
      this.compatibilityScore = response.compatibility_score;
      this.categories = response.categories;
      console.log(this.student);
      console.log(this.categories);
    });
  }

  getOrdinalSuffix(year: number): string {
    return this.utilService.getOrdinalSuffix(year);
  }

  getColorForPercentage(pct: number): string {
    return this.utilService.getColorForPercentage(pct);
  }

  //TODO: use this as a setting 
  getTopCategories(categories: { category: string, score: number }[]): { category: string, score: number }[] {
    return categories
      .sort((a, b) => b.score - a.score) // Sort by score descending
      .slice(0, 10); // Get top <number> categories
  }


}
