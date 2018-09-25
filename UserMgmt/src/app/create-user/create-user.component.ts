import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent{

  constructor(private userService : UserService) { }
  
    user = new User();

   
   submitted = false;

   onSubmit() { this.submitted = true; }
 
   get diagnostic(){
    return JSON.stringify(this.user); 
  }

  public createUser(user) {
    this.userService.createUser(user).subscribe(
      (response) => {
        console.log(response);
      });
   
  }
  
  
  ngOnInit() {
  }

}
