import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class APIService {
    constructor(private http: HttpClient) { }
    baseUrl="https://localhost:44345/api";

    get(url:string){
        return this.http.get(this.baseUrl+url);
    }

    post(url:string,model:any)
    {
        return this.http.post(this.baseUrl,model);
    }

}