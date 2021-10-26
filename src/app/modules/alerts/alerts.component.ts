import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  @Input() type: string

  constructor() { }

  ngOnInit(): void {
    if(typeof this.type=='undefined'){
      this.type = 'primary'
    }
  }

  showAlert(){
    
  }

}
