import { CanActivateFn } from '@angular/router';

export const profileGuard: CanActivateFn = (route, state) => {
  return true;
};
