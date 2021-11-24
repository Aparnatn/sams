import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CompanylistResponse, CompanyRequest, CompanyResponse, CustomerRequest, CustomerResponse, EmployeeRequest, EmployeeResponse, GroupRequest, GroupResponse, ItemRequest, ItemResponse, JobRequest, JobResponse, Ledger, LedgereditRequest, LedgereditResponse, LedgerRequest, LedgerResponse, LedgerStatementRequest, LedgerStatementResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, SupplierRequest, SupplierResponse, UserlistResponse, User, EmployeeeditRequest, EmployeeeditResponse, Employee, Job, SuppliereditRequest, SuppliereditResponse, CustomereditRequest, CustomereditResponse, Customer, Supplier } from './login.interfaces';
import { LedgerComponent } from '../ledger/ledger.component';

export interface LedgerFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface Company {
  "id": number,
  "company_name": string,
  "reg_no": number,
  "app_regdate": string,
  "reg_mobno": number,
  "email": string,
  "admin_usernm": string,
  "admin_password": string,
  "username": string,
  "password": string,
  "mobile": number,
  "user_access": string,
  "imag1": string,
  "imag2": string
}
export interface Users {
  "mobile_no": string,
  "username": string,
}
export interface Register {
  "mobile_no": string,
  "username": string,
}
export interface empFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface companycreateFilter {

  name?: string,
}

@Injectable()
export class UserService {
  private apiUrl: string;
  company: any;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/Sam/login`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  register(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/Sam/register`, data, {
      // observe: 'response',
      // // withCredentials: true
    });
  }

  customer(data: CustomerRequest): Observable<CustomerResponse> {
    return this.http.post<CustomerResponse>(`${this.apiUrl}/Sam/cust`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  supplier(data: SupplierRequest): Observable<SupplierResponse> {
    return this.http.post<SupplierResponse>(`${this.apiUrl}/Sam/suppl`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }



  ledgerstatement(data: LedgerStatementRequest): Observable<LedgerStatementResponse> {
    return this.http.post<LedgerStatementResponse>(`${this.apiUrl}/goledgers_statement`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  job(data: JobRequest): Observable<JobResponse> {
    return this.http.post<JobResponse>(`${this.apiUrl}/Sam/job`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  getJob(): Observable<JobResponse[]> {
    return this.http.get<JobResponse[]>(`${this.apiUrl}/Sam/jobsshowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  item(data: ItemRequest): Observable<ItemResponse> {
    return this.http.post<ItemResponse>(`${this.apiUrl}/Sam/item`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  group(data: GroupRequest): Observable<GroupResponse> {
    return this.http.post<GroupResponse>(`${this.apiUrl}/groups`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  employee(data: EmployeeRequest): Observable<EmployeeResponse> {
    return this.http.post<EmployeeResponse>(`${this.apiUrl}/Sam/emp`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  companycreate(data: CompanyRequest): Observable<CompanyResponse> {
    return this.http.post<CompanyResponse>(`${this.apiUrl}/Sam/companycreate`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  userlist(data: RegisterRequest): Observable<UserlistResponse> {
    return this.http.post<UserlistResponse>(`${this.apiUrl}/Sam/userlist`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  companylist(data: CompanyRequest): Observable<CompanylistResponse> {
    return this.http.post<CompanylistResponse>(`${this.apiUrl}/Sam/companylist`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  companydelete(data: EmployeeRequest): Observable<EmployeeResponse> {
    return this.http.post<EmployeeResponse>(`${this.apiUrl}/Sam/companydelete`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  ledgeredit(data: LedgereditRequest,id): Observable<LedgereditResponse> {
    return this.http.post<LedgereditResponse>(`${this.apiUrl}/Sam/ledger/${id}/update`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  ledgerdelete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Sam/ledger/${id}/delete`,  {
      // observe: 'response',
      // withCredentials: true
    });
  }
  employeeedit(data: EmployeeeditRequest,id): Observable<EmployeeeditResponse> {
    return this.http.post<EmployeeeditResponse>(`${this.apiUrl}/Sam/employee/${id}/update`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  jobedit(data: EmployeeeditRequest,id): Observable<EmployeeeditResponse> {
    return this.http.post<EmployeeeditResponse>(`${this.apiUrl}/Sam/job/${id}/update`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  supplieredit(data: SuppliereditRequest,id): Observable<SuppliereditResponse> {
    return this.http.post<SuppliereditResponse>(`${this.apiUrl}/Sam/supplier/${id}/update`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  customeredit(data: CustomereditRequest,id): Observable<CustomereditResponse> {
    return this.http.post<CustomereditResponse>(`${this.apiUrl}/Sam/customer/${id}/update`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  employeedelete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Sam/employee/${id}/delete`,  {
      // observe: 'response',
      // withCredentials: true
    });
  }
 jobdelete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Sam/job/${id}/delete`,  {
      // observe: 'response',
      // withCredentials: true
    });
  }
  customerdelete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Sam/customer/${id}/delete`,  {
      // observe: 'response',
      // withCredentials: true
    });
  }
  supplierdelete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Sam/supplier/${id}/delete`,  {
      // observe: 'response',
      // withCredentials: true
    });
  }

  ledgers(filter: LedgerFilter): Observable<Ledger[]> {
    // console.log(filter);
    let params = new HttpParams();
    if (filter.from_date) {
      params = params.append('from_date', filter.from_date);
    }
    if (filter.to_date) {
      params = params.append('to_date', filter.to_date);
    }
    if (filter.name) {
      params = params.append('name', filter.name);
    }

    return this.http.get<Ledger[]>(
      `${this.apiUrl}/Sam/goledgers_statement`,
      { params: params }
    )
  }

  ledgertrial(filter: LedgerFilter): Observable<Ledger[]> {
    // console.log(filter);
    let params = new HttpParams();
    if (filter.from_date) {
      params = params.append('from_date', filter.from_date);
    }
    if (filter.to_date) {
      params = params.append('to_date', filter.to_date);
    }
    if (filter.name) {
      params = params.append('name', filter.name);
    }

    return this.http.get<Ledger[]>(
      `${this.apiUrl}/Sam/gotrial`,
      { params: params }
    )
  }


  companyupdate(data: CompanyRequest): Observable<CompanyResponse> {
    return this.http.post<CompanyResponse>(`${this.apiUrl}/Sam/companyupdate`, data, {
      // withCredentials: true
    });
  }

  // userlist(data: RegisterRequest): Observable<UserlistResponse> {
  //   return this.http.post<UserlistResponse>(`${this.apiUrl}/Sam/userlist`, data, {
  //     // observe: 'response',
  //     withCredentials: true
  //   });
  // }

  getLedger(id: number): Observable<Ledger> {
    return this.http.get<Ledger>(`${this.apiUrl}/Sam/ledger/${id}`);
  }
  getJobs(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/Sam/job/${id}`);
  }
  getemp(id:number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/Sam/employee/${id}`,
    );
  }

  getcust(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}Sam/customer/${id}`,
    );
  }
  getsupp(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}Sam/supplier/${id}`,
    );
  }

  pandl(data: LedgereditRequest): Observable<LedgereditResponse> {
    return this.http.post<LedgereditResponse>(`${this.apiUrl}/Sam/gopl`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  getCustomers(): Observable<CustomerResponse[]> {
    return this.http.get<CustomerResponse[]>(`${this.apiUrl}/Sam/customershowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  getCustomer(): Observable<CustomerResponse[]> {
    return this.http.get<CustomerResponse[]>(`${this.apiUrl}/Sam/customershowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  getSuppliers(): Observable<SupplierResponse[]> {
    return this.http.get<SupplierResponse[]>(`${this.apiUrl}/Sam/SuppliershowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  getItems(): Observable<ItemResponse[]> {
    return this.http.get<ItemResponse[]>(`${this.apiUrl}/Sam/itemshowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  getLedgers(): Observable<LedgerResponse[]> {
    return this.http.get<LedgerResponse[]>(`${this.apiUrl}/Sam/ledgershowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  getEmployees(): Observable<EmployeeResponse[]> {
    return this.http.get<EmployeeResponse[]>(`${this.apiUrl}/Sam/employeeshowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  getItem(): Observable<ItemResponse[]> {
    return this.http.get<ItemResponse[]>(`${this.apiUrl}/Sam/SuppliershowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/Sam/companylist`, {
      // observe: 'response',
      // withCredentials: true
    });
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/Sam/userlist`, {
      // observe: 'response',
      withCredentials: true
    });
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/Sam/user`, {
      // observe: 'response',
      withCredentials: true
    });
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/Sam/companyupdate/${id}`, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  deleteCompany(id: number): Observable<Company> {
    return this.http.delete<Company>(`${this.apiUrl}/Sam/companydelete/${id}`, {
      // observe: 'response',
      // withCredentials: true
    });
  }
}
