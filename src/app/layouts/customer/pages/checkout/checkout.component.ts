import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  selectShoppingCartProducts,
  selectShoppingCartTotal,
} from '../../../../core/store/shopping-cart/shopping-cart.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartService } from '../../components/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
import { OrderDetailRequest } from './models/order-detail-request';
import { OrderService } from './order.service';
import { LoginResponse } from '../auth/models/login-response';
import { selectAuthUser } from '../../../../core/store/auth/auth.selectors';
import { AuthService } from '../auth/auth.service';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  
}
