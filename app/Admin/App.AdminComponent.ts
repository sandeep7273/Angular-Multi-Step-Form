import { Component, OnInit } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { FormService } from '../form.service'
import { map } from 'rxjs/operators';

@Component({
    templateUrl: './App.AdminView.html',
  styleUrls: ['../App.CommonStyle.css']
})

export class AdminComponent implements OnInit {
    
items : any;

  constructor( public formService: FormService, public httpc: HttpClient) {
  }

  ngOnInit() {
  }
 
  getCustomersList() {
    this.formService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.items = customers;
      console.log(this.items);
      return this.items;
    });
  }

  deleteCustomers() {
    this.formService.deleteAll().catch(err => console.log(err));
  }
}