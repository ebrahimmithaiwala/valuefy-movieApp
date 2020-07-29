import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://valuefy-assignment-x.herokuapp.com/api/getVideos");
  }


}
