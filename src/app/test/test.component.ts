import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  
  footer = {
    title: "Title",
    copyright: "Company",
    links: [
      {value: 'Link 1', link:''},
      {value: 'Link 2', link:''},
      {value: 'Link 3', link:''},
      {value: 'Link 4', link:''},
      {value: 'Link 5', link:''}
    ],
    alt_links: [
      {value: 'Link 1', link:''},
      {value: 'Link 2', link:''},
      {value: 'Link 3', link:''},
      {value: 'Link 4', link:''},
      {value: 'Link 5', link:''}
    ]
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
