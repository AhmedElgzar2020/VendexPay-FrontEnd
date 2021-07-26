import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }
    baseUrl="";

    get(){
        return this.http.get(this.baseUrl);
    }

    post(model:any)
    {
        return this.http.post(this.baseUrl,model);
    }

}