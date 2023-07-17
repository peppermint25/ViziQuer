import { Component} from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})

export class DocumentationComponent{
  isCollapsed: { [key: string]: boolean } = {};

  toggleCollapse(fragment: string): void {
    this.isCollapsed[fragment] = !this.isCollapsed[fragment];
  }
}