import { CanActivateFn } from '@angular/router';

export const shopGuard: CanActivateFn = (route, state) => {
  return true;
};
