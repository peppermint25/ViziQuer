import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('collapseMenu', { static: true }) collapseMenuRef!: ElementRef;

  constructor(private router: Router){}

  toggleCollapseMenu() {
    const collapseMenuElement = this.collapseMenuRef.nativeElement;
  
    if (collapseMenuElement.classList.contains('show')) {
      // Collapse menu is open, so close it
      collapseMenuElement.classList.remove('show');
    } else {
      // Collapse menu is closed, so open it
      collapseMenuElement.classList.add('show');
    }
  }

}
