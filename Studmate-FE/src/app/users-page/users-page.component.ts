import { Component, OnInit } from '@angular/core';
import { Student } from '../../shared/models/student.interface';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  // ngOnInit(): void {
  //   this.studentService.getStudents().subscribe(response => {
  //     // TypeScript now knows that response has a property `students`
  //     this.students = response.students;
  //   }, error => {
  //     console.error('Error fetching students:', error);
  //   });
  // }


  ngOnInit(): void {
    this.getStudentMatches();
  }

  getStudentMatches(): void {
    this.studentService.getStudentMatches().subscribe(response => {
      this.students = response.students;
    }, error => {
      console.error('Error fetching student matches:', error);
    });
  }

  getOrdinalSuffix(year: number): string {
    if (year > 3 && year < 10) return `${year}th`;
    switch (year % 10) {
      case 1: return `${year}st`;
      case 2: return `${year}nd`;
      case 3: return `${year}rd`;
      default: return `${year}th`;
    }
  }

  getTopCategories(categories: { category: string, score: number }[]): { category: string, score: number }[] {
    return categories
      .sort((a, b) => b.score - a.score) // Sort by score descending
      .slice(0, 3); // Get top 5 categories
  }

  getColorForPercentage(pct: number): string {
    const percentColors = [
      { pct: 0.0, color: { r: 237, g: 41, b: 56 } }, // Imperial Red
      { pct: 0.25, color: { r: 178, g: 95, b: 74 } }, // Giant's Club
      { pct: 0.5, color: { r: 119, g: 148, b: 92 } }, // Russian Green
      { pct: 0.75, color: { r: 59, g: 202, b: 109 } }, // UFO Green
      { pct: 1.0, color: { r: 0, g: 255, b: 127 } } // Guppie Green
    ];

    let i = 1;
    for (i = 1; i < percentColors.length - 1; i++) {
      if (pct < percentColors[i].pct) {
        break;
      }
    }
    const lower = percentColors[i - 1];
    const upper = percentColors[i];
    const range = upper.pct - lower.pct;
    const rangePct = (pct - lower.pct) / range;
    const pctLower = 1 - rangePct;
    const pctUpper = rangePct;
    const color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  }
}
