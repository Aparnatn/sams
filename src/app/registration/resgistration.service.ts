import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RegisterationResponse, RegisterationRequest } from './registration.interfaces';

@Injectable()
export class RegistrationService
{
    private apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl
    }

    register(data: RegisterationRequest ): Observable<RegisterationResponse> {
        return this.http.post<RegisterationResponse>(`${this.apiUrl}/register`, data);
    }
}
