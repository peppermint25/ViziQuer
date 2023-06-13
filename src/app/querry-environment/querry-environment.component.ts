import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';

declare var $: any;

@Component({
  selector: 'app-querry-environment',
  templateUrl: './querry-environment.component.html',
  styleUrls: ['./querry-environment.component.scss']
})
export class QuerryEnvironmentComponent  {
  url_to_open: SafeResourceUrl = ''
  viziquer_host = 'https://viziquer.app'
  post_url = this.viziquer_host+'/api/public-diagram?schema=DBpedia';

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
    let current_url = localStorage.getItem('url');
    if(current_url){
      this.clipboard.copy(current_url);    
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
        console.log(url_open);
    });
  }
}
