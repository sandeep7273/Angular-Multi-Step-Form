import { Component, OnChanges } from '@angular/core'
import { FormService} from '../form.service'
import { HttpClient , HttpEventType} from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../Home/App.Home.model';

@Component({
    templateUrl: './App.EducationView.html',
  styleUrls: ['../App.CommonStyle.css']
})

export class EducationComponent implements OnChanges{

  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();
  selectedFile: File = null;
  public imagePath;
  imgURL: any;
  public message: string;
  imgData : [];
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  marksPercentage: number = null;
  formSignUpGroup: FormGroup= null;
  disable : boolean = true;

  constructor( public formService : FormService, public httpc : HttpClient) {
    var _builder = new FormBuilder;
        this.formSignUpGroup = _builder.group({});
       
        this.formSignUpGroup.addControl('UserStreamControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserUnivControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserMarksObtControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserMarksMaxControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserYearControl', new FormControl('', Validators.required));
    
  }
  ngOnChanges() {
   
  }

  //
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }
   
  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
  }
  hasError(controlString: string, typeOfValidatior: string): boolean{
    return this.formSignUpGroup.controls[controlString].hasError(typeOfValidatior);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('files', this.fileData);
    this.fileUploadProgress = '100%';
    this.formService.addUser( formData)
    this.httpc.post('http://localhost:3000/Profile', formData, {
      reportProgress: true,
      observe: 'events'   
    })
    .subscribe(events => {
      if(events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
        console.log(this.fileUploadProgress);
      } else if(events.type === HttpEventType.Response) {
        this.fileUploadProgress = '';
        console.log(events.body);          
        alert('SUCCESS !!');
      }
    }) 
}

  finalSubmit(){
    window.confirm('You have Succefully Uploaded data ')
  }

  addUser(user){
    this.formService.addUser(this.UserModel);
    this.UserModels.push(this.UserModel);
    this.formService.createCustomer(this.UserModel);
    this.UserModel = new User();// clear UI
    this.disable=false;
  }
}