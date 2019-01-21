import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  values: any; // class property
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  // class method
  getValues() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}