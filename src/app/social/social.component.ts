import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/course';
import courseData from './social.json';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  course: Course = courseData;
}
