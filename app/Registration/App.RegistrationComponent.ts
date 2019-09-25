import { Component, OnInit } from '@angular/core'
import {NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { FormService } from '../form.service'
import { User } from '../Home/App.Home.model';
@Component({
    templateUrl: './App.RegistrationView.html',
  styleUrls: ['../App.CommonStyle.css']

})

export class RegistrationComponent implements OnInit {
  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();
    
items;
formSignUpGroup: FormGroup= null;


constructor( public formService: FormService,  public httpc : HttpClient ) {

  var _builder = new FormBuilder;
  this.formSignUpGroup = _builder.group({});
  this.formSignUpGroup.addControl('UserHouseControl', new FormControl('', Validators.required));
  this.formSignUpGroup.addControl('UserCityControl', new FormControl('', Validators.required));
  this.formSignUpGroup.addControl('UserDisttControl', new FormControl('', Validators.required));
  this.formSignUpGroup.addControl('UserStateControl', new FormControl('', Validators.required));

  var validationCollection = [];
  validationCollection.push(Validators.required);
  validationCollection.push(Validators.pattern("^[0-9]{6,6}$"));
   var validationCollectionPassword = [];
   validationCollectionPassword.push(Validators.required);
   validationCollectionPassword.push(Validators.pattern("^[a-zA-Z0-9]{8,18}$"));
  
  this.formSignUpGroup.addControl('UserPasswordControl',
                           new FormControl('', Validators.compose(validationCollectionPassword)));

  this.formSignUpGroup.addControl('UserPinControl', 
                           new FormControl('', Validators.compose(validationCollection)));


}
 addToNext(){
  // this.UserModels = this.FormService.getItems();
  // console.log(this.UserModels);
 }

ngOnInit() {
  this.items = this.formService.getItems();
  console.log(this.items);
}
addUser(User){
  this.formService.addUser(this.UserModel);
  this.formService.createCustomer(this.UserModel);

}
hasError(controlString: string, typeOfValidatior: string): boolean{
  
  return this.formSignUpGroup.controls[controlString].hasError(typeOfValidatior);
}
// GetFromServer(){
//   this.httpc.get("http://localhost:3000/Users")
//   .subscribe(res=>this.Success(res), res=>this.Error(res));
//   this.UserInput = new User();// clear UI  
  
// }

// Error(res){
//   console.debug();
// }

// Success(res){
//   this.UserInputs = [res];
//   console.log(res[0].Name);

//   this.UserInput.UserName = res[0].Name ;
//   console.log(this.UserInput.UserName);
//   // res[0].Contact = this.UserInput.UserContact ;
//   // res[0].Email = this.UserInput.UserEmail ;
// }


}
