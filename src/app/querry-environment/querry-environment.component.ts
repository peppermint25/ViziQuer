import { Component, Inject, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';

declare var $: any;
declare var bootstrap: any;

@Component({
  selector: 'app-querry-environment',
  templateUrl: './querry-environment.component.html',
  styleUrls: ['./querry-environment.component.scss']
})
export class QuerryEnvironmentComponent implements AfterViewInit {

  ngAfterViewInit() {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  url_to_open: SafeResourceUrl = ''
  viziquer_host = 'https://viziquer.app'

  // post_url = this.viziquer_host+'/api/public-diagram?schema=DBpedia';

  post_url = {
    "url": "https://viziquer.app/api/public-diagram",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "schema": "DBpedia",
      "query": "this is query",
      "isVisualizattionNeeded": 1,
    }),
  };

  constructor(@Inject(DomSanitizer) private sanitizer: DomSanitizer, private http: HttpClient, private clipboard: Clipboard) {
    let local_url = localStorage.getItem('url')

    if(local_url){
      this.url_to_open = this.generate_url(local_url);
    }else{
      this.postUrl();
    }


  }


  getUrl(){
    let current_url = localStorage.getItem('url');
    return current_url;
  }

  // make a function to reload the with a new one it needs to refresh the iframe too

  reloadUrl(){
    localStorage.removeItem('url');
    this.postUrl();
  }



  copyUrl(){
    const button = document.getElementById('copy');
    const tooltip = bootstrap.Tooltip.getInstance(button);

    if (tooltip) {
      tooltip._config.title = 'Link copied';
      tooltip.show();
    }
    
    let current_url = localStorage.getItem('url');
    if(current_url){
      this.clipboard.copy(current_url);    
    };
    
  }

  generate_url(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);    
  }
  
  // postUrl(){
  //   let data: Observable<any> = this.http.post(this.post_url, {});
  //   console.log(this.post_url);
  //   data.subscribe((result) => {
  //       let url_open = this.viziquer_host+result.response.url;
  //       this.url_to_open =  this.generate_url(url_open);
  //       localStorage.setItem('url', url_open);
  //       console.log(url_open);
  //   });
  // }
  postUrl() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    let options = {
      headers: headers
    };
  
    this.http.post(this.post_url.url, this.post_url.data, options)
      .subscribe((result: any) => {
        let url_open = this.viziquer_host + result.url;
        this.url_to_open = this.generate_url(url_open);
        localStorage.setItem('url', url_open);
        console.log(url_open);
      });
  }
}
