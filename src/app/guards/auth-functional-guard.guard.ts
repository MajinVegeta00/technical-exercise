import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { VerifySessionService } from '../services/verify-session/verify-session.service';

export const authFunctionalGuardGuard: CanActivateFn = (route, state) => {
  const checkSession=inject(VerifySessionService)
  const router=inject(Router)
   if(!checkSession.verifySession()){
   return  router.navigate(["/","no-access"])
   }else
   return true
};
