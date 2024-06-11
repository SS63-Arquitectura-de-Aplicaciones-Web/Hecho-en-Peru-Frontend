import { CanActivateFn } from '@angular/router';

export const checkoutGuard: CanActivateFn = (route, state) => {
  return true;
};
