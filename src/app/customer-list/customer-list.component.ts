import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
//import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Customer } from '../shared/customer';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  dataSource = new MatTableDataSource<Customer>();
  //dataSource = new CustomerDataSource(this.restApi);
  displayedColumns = ['name','state','phone','country'];
  states = ['','Valid', 'Invalid'];
  Customer: any = [];
  countryFilter = new FormControl();
  model = {
    selectedState: '',
    selectedCountry: ''
  };

  constructor(public restApi: RestApiService) {

  }

  ngOnInit() {
    this.loadCustomers()
  }

  //load customer list
  loadCustomers() {   
    return this.restApi.getCustomers().subscribe((data: Customer[]) => {
      this.dataSource.data = data;
    });
  }

  refresh() {
    this.restApi.getCustomersFiltered(this.model.selectedState,this.model.selectedCountry).subscribe((data: Customer[]) => {
      this.dataSource.data = data;
    });
  }

  onStateSelection(){
    this.refresh()
  }
  onCountrySelection(){
    this.refresh()
  }

}

// export class CustomerDataSource extends DataSource<any> {
//   constructor(private customerService : RestApiService) {
//     super();
//   }
//   connect(): Observable<Customer[]> {
//     console.log("fetching customers..")
//     return this.customerService.getCustomers();
//   }
//   disconnect() {};
// }
