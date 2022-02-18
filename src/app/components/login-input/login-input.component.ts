import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss'],
})
export class LoginInputComponent implements OnInit {
  @Input() email:boolean = false;
  @Output() user = new EventEmitter<string>();
  @Output() pass = new EventEmitter<string>();

  public userName:string = '';
  public password:string = '';
  

  constructor() { }

  

  ngOnInit() {}

  onInput(event){
    (this.userName !== '') ?  this.user.emit(this.userName):null;

    (this.password !== '') ? this.pass.emit(this.password):null;
  
  }
}
