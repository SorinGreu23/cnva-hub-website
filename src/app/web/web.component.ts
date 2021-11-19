import { Component, OnInit } from '@angular/core';
import courseData from './web.json';
import { Course } from "../interfaces/course";

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})

export class WebComponent {

  course: Course = courseData;

}
