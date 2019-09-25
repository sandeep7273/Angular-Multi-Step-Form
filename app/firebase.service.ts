import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireList} from '@angular/fire/database';
import { Edu } from './Education/App.Education.model';
import { User } from './Home/App.Home.model';
import { FormService } from './form.service';


@Injectable({
  providedIn: 'root'
})
export class FibaseService {

//   items;

//   images = [];
//   // Customer : any [];
 
  
  //  constructor(private db: AngularFireDatabase, private formService: FormService, private httpc: HttpClient) {
  //   this.customersRef = db.list(this.dbPath);
  // }

//   addUser(UserModel) {
//     this.items.push(UserModel);
//     console.log(this.items);
//   }
  // addUser(UserModel) {
  //   this.images.push(UserModel);
  //   console.log(this.images);
  // }

//   getItems(){
//     console.log(this.items);
//     this.customersRef.push(this.items);
//   return this.items;
//   }

//   clearCart(){
//     this.items = [];
//     return this.items;
//   }
//  getShippingPrices() {
//     return this.httpc.get('/assets/shipping.json');
//   }

 

  
 
 
  // createCustomer(customer: FormService): void {
  //   this.customersRef.push(customer);
  // }
 
  // updateCustomer(key: string, value: any): Promise<void> {
  //   return this.customersRef.update(key, value);
  // }
 
  // deleteCustomer(key: string): Promise<void> {
  //   return this.customersRef.remove(key);
  // }
 
  // getCustomersList(): AngularFireList<FormService> {
  //   return this.customersRef;
  // }
 
  // deleteAll(): Promise<void> {
  //   return this.customersRef.remove();
  // }
  }
