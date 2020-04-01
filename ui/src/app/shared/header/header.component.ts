import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icon = true

  @Output() sideToggler = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.icon = !this.icon
    this.sideToggler.emit()
  }
}