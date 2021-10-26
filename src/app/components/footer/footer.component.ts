import { Component, Input, OnInit } from '@angular/core';

interface Links{
  value: string
  link: string
}

interface Footer{
  title: string
  subtitle?: string
  links?: Links[]
  alt_links?: Links[]
  copyright: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footer: Footer

  constructor() { }

  ngOnInit(): void {
  }

}
