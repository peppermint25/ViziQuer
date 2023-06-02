import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-querry-environment',
  templateUrl: './querry-environment.component.html',
  styleUrls: ['./querry-environment.component.scss']
})
export class QuerryEnvironmentComponent implements OnInit, OnDestroy {
  iframeSrc: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const storedSrc = sessionStorage.getItem('iframeSrc');
    if (storedSrc) {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(storedSrc);
    }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('iframeSrc');
  }

  saveIframeSrc(): void {
    const iframeElement = document.getElementById('app_iframe') as HTMLIFrameElement;
    const iframeSrc = iframeElement.src;
    sessionStorage.setItem('iframeSrc', iframeSrc);
  }
}