import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../student'
import { StudentService } from '../student.service'

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent implements OnInit {

 id: number
 student: Student
 constructor(private route: ActivatedRoute, private studentService: StudentService) { }

 ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];

   this.student = new Student();
   this.studentService.getStudentById(this.id).subscribe( data => {
     this.student = data;
   });
 }

}
