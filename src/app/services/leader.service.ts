import { ProcessHttpmsgService } from './process-httpmsg.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Leader } from '../shared/leader';
import { baseURL } from './../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0])).pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
