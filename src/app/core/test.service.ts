import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../models/register';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getallreg():Observable<Registration[]>
  {
    return this.http.get<Registration[]>("https://prod-05.centralus.logic.azure.com:443/workflows/30e3d19286a8472b8d4e166102537a10/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bfn_a_gjvi-1s6JspIbgssDbB3Fix6CjrpwSqrwPWHM");
  }

}

