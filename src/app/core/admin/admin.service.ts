import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService
{
  constructor(
    private _httpClient: HttpClient,
  )
  {
  }

  getListVps(): Observable<any> {
    return this._httpClient.get('vps/@all/get_all');
  }

  createVps(body: any): Observable<any> {
    return this._httpClient.post('vps', body);
  }

  checkVps(): Observable<any> {
    return this._httpClient.get('vps/@all/check_vps');
  }

  updateVps(id: string, body: any): Observable<any> {
    return this._httpClient.put(`vps/${id}`, body);
  }

  deleteVps(id: string): Observable<any> {
    return this._httpClient.delete(`vps/delete_by_id/${id}`);
  }

  getListUsers(): Observable<any> {
    return this._httpClient.get('users/@all/get_all');
  }

  createUser(body: any): Observable<any> {
    return this._httpClient.post('users', body);
  }

  verifyUser(): Observable<any> {
    return this._httpClient.get('verify_user');
  }

  updateUser(id: string, body: any): Observable<any> {
    return this._httpClient.put(`users/${id}`, body);
  }

  deleteUser(id: string): Observable<any> {
    return this._httpClient.delete(`vps/${id}`);
  }

  getListProxy(): Observable<any> {
    return this._httpClient.get('proxies/@all/get_all');
  }

  createProxy(body: any): Observable<any> {
    return this._httpClient.post('proxies', body);
  }

}
