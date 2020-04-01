import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sidebarStatus = true;

  constructor() { }

  ngOnInit(): void {

  }

  sidebarToggler() {
    this.sidebarStatus = !this.sidebarStatus
  }
}