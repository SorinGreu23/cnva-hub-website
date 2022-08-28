import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear(): void {
    this.currentYear = new Date().getFullYear().toString();
  }
}
