import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, OnInit, AfterViewChecked, Renderer2} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
declare var $: any;
declare var bootstrap: any;


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})

export class DocumentationComponent implements AfterViewInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.initializeScrollspy();

    // Re-initialize ScrollSpy when route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.reinitializeScrollspy();
      }
    });
  }

  private initializeScrollspy(): void {
    let scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);

    if (!scrollSpy) {
      scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar'
      });
    }
  }

  private reinitializeScrollspy(): void {
    const scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);

    if (scrollSpy) {
      scrollSpy.dispose();
    }

    this.initializeScrollspy();
  }
}