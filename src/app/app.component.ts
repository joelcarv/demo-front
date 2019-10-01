import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-front';
  tableColumns  :  string[] = ['name','number','state','country', 'countryCode'];
  dataSource = [];

}
