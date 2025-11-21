import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserResponse } from "../models/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient);
    private apiUrl = "https://randomuser.me/api/?results=10";
    getUsers() {
        return this.http.get<UserResponse>(this.apiUrl);
    }
}