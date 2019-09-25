import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireList} from '@angular/fire/database';
import { User } from './Home/App.Home.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  items=[];

  images = [];
  private dbPath = '/customers';
 
  customersRef: AngularFireList<User> = null;
 

  constructor(private db: AngularFireDatabase, private httpc: HttpClient) {
    this.customersRef = db.list(this.dbPath);
  }

  createCustomer(customer: User): void {
    this.customersRef.push(customer);
  }
  getCustomersList(): AngularFireList<User> {
    return this.customersRef;
  }
  deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }
  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }
 
  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.remove(key);
  }

  addUser(UserModel) {
    this.items.push(UserModel);
    console.log(this.items);
  }
  // addUser(UserModel) {
  //   this.images.push(UserModel);
  //   console.log(this.images);
  // }

  getItems(){
    console.log(this.items);
    // this.fireService.createCustomer(this.form);
  return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
//  getShippingPrices() {
//     return this.httpc.get('/assets/shipping.json');
//   }

  
  }