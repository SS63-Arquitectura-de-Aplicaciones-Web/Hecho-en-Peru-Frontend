import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Customer } from './models/customer';
import { CustomersService } from './customers.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  customerSearchForm: FormGroup;
  customers: Customer[] = [];
  dataSource = new MatTableDataSource<Customer>();
  
  searchAttempted: boolean = false;

  subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(FormGroupDirective)
  private customerSearchFormDir!: FormGroupDirective;

  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService,
    private alertService: AlertService,
  ) {
    this.customerSearchForm = this.fb.group({
      id: this.fb.control('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    });
  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loadCustomers(): void {
    const subscription = this.customersService
      .getCustomers()
      .subscribe({
        next: (customers) => {
          this.searchAttempted = false;
          this.customers = customers || [];
          this.dataSource.data = this.customers;
        },
        error: () => {
          this.dataSource.data = [];
          this.alertService.showError(
            'Ups! Ocurrió un error',
            'No se pudieron cargar los datos correctamente'
          )
        }
      });
    this.subscriptions.push(subscription);
  }
}
