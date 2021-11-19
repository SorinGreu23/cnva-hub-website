import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/course';
import courseData from './photo.json';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  course: Course = courseData;
}
