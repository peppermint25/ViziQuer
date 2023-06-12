import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-querry-environment',
  templateUrl: './querry-environment.component.html',
  styleUrls: ['./querry-environment.component.scss']
})
export class QuerryEnvironmentComponent  {
  url_to_open: SafeResourceUrl = ''
  viziquer_host = 'https://viziquer.app'
  post_url = this.viziquer_host+'/api/public-diagram?schema=DBpedia';

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
    let local_url = localStorage.getItem('url')

    if(local_url){
      this.url_to_open = this.generate_url(local_url);
    }else{
      this.postUrl();
    }


  }

  // have to make a function openurl() for a pop up in html which displays the url of the iframe with a button to copy it
  getUrl(){
    let current_url = localStorage.getItem('url');
    return current_url;
  }

  // make a function which copys the url of the iframe to users clipboar
  



  copyUrl(){
    let current_url = localStorage.getItem('url');
    if(current_url){
      navigator.clipboard.writeText(current_url);
    };
    
  }

  generate_url(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);    
  }
  
  postUrl(){
    let data: Observable<any> = this.http.post(this.post_url, {});
    data.subscribe((result) => {
        let url_open = this.viziquer_host+result.response.url;
        this.url_to_open =  this.generate_url(url_open);
        localStorage.setItem('url', url_open);
    });
  }
}
