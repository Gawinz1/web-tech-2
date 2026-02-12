import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { StudentsService } from '../services/students/students.service';
import { CreateStudentPayload } from '../models/student.model';
@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent {
  private readonly router = inject(Router);
  private readonly studentsService = inject(StudentsService);

  // Reactive Form Group + Validators (matches exam)
  public form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required]),
    year_level: new FormControl('', [Validators.required]),
    gpa: new FormControl('', [Validators.required]),
  });

  back() {
    this.router.navigate(['/students']);
  }

  public async createStudent(): Promise<void> {
    try {
      if (this.form.invalid) {
        this.form.markAllAsTouched(); // so errors show
        return;
      }

      const payload: CreateStudentPayload = {
        first_name: this.form.value.first_name ?? '',
        last_name: this.form.value.last_name ?? '',
        email: this.form.value.email ?? '',
        age: this.form.value.age ? Number(this.form.value.age) : 0,
        course: this.form.value.course ?? '',
        year_level: this.form.value.year_level ? Number(this.form.value.year_level) : 0,
        gpa: this.form.value.gpa ? Number(this.form.value.gpa) : 0,
        enrollment_status: 'Active',
      };

      await this.studentsService.createStudent(payload);

      // after success, go back to list
      this.router.navigate(['/students']);
    } catch (error) {
      console.error(error);
    }
  }
}