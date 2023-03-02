import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-ssr';
  public tutorials: Tutorials[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    console.log({baseUrl})
    http.get<Tutorials[]>(baseUrl + 'api/tutorials').subscribe(result => {
      //this.books = result;
      this.tutorials = Object.values(result);
      console.log(baseUrl);
    }, error => console.error(error));
  }
}

interface Tutorials {
  title?: string;
  description?: any;
}
