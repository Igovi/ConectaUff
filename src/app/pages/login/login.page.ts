import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public password:string = '';
  public userName:string = '';
  constructor() { }

  ngOnInit() {

  }

  addItemUser(event){
    this.userName = event
  }
  addItemPass(event){
    this.password = event
  }
  save(){
    console.log(this.userName);
    console.log(this.password);
  }
}
