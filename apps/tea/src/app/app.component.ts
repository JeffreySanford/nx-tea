import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@tea/api-interfaces';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'tea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  opened?:BooleanInput;
  events: string[] = [];
  teas = ['One', 'Two', 'Three', 'Four','One', 'Two', 'Three', 'Four','One', 'Two', 'Three', 'Four','Four','One', 'Two', 'Three', 'Four'];

  constructor(private http: HttpClient) {}


}
