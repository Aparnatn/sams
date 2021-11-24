import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CashSaleRequest, CashSaleResponse, CreditPurchaseRequest, CreditPurchaseResponse, CreditSaleRequest, CreditSaleResponse, CustomerMasterdataRequest, CustomerMasterdataResponse, PCashSaleRequest, PCashSaleResponse, PurchaseReceiptRequest, PurchaseReceiptResponse, PurchasereturnRequest, SalesReceiptRequest, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { Company } from '../user/user.service';
import { CustomerResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
export interface CashFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface CustomerMasterFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface PCashFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface ReceiptFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface PReceiptFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface creditsaleFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface PcreditFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

@Injectable()
export class SalesService {
  private apiUrl: string;
  getCustomers: any;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
  }

  cashSale(data: CashSaleRequest): Observable<CashSaleResponse> {
    return this.http.post<CashSaleResponse>(`${this.apiUrl}/Sam/cashapi`, data, {
      // observe: 'response',
      // withCredentials: true
    });

  }

  customermasterdata(data: CustomerMasterdataRequest): Observable<CustomerMasterdataResponse> {
    return this.http.post<CustomerMasterdataResponse>(`${this.apiUrl}/Sam/custom`, data, {
      // observe: 'response',
      withCredentials: true
    });

  }

  PcashSale(data: PCashSaleRequest): Observable<PCashSaleResponse> {
    return this.http.post<PCashSaleResponse>(`${this.apiUrl}/Sam/PCashApi`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  creditPurchase(data: CreditPurchaseRequest): Observable<CreditPurchaseResponse> {
    return this.http.post<CreditPurchaseResponse>(`${this.apiUrl}/Sam/PCreditApi`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  creditSale(data: CreditSaleRequest): Observable<CreditSaleResponse> {
    return this.http.post<CreditSaleResponse>(`${this.apiUrl}/Sam/creditapi`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  purchaseReceipt(data: PurchaseReceiptRequest): Observable<PurchaseReceiptResponse> {
    return this.http.post<PurchaseReceiptResponse>(`${this.apiUrl}/Sam/PReceiptApi`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  purchaseReturn(data: PurchasereturnRequest): Observable<PurchaseReceiptResponse> {
    return this.http.post<PurchaseReceiptResponse>(`${this.apiUrl}/Sam/PReceiptApi`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  salesReceipt(data: SalesReceiptRequest): Observable<SalesReceiptResponse> {
    return this.http.post<SalesReceiptResponse>(`${this.apiUrl}/Sam/ReceiptApi`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  salesReturn(data: PurchasereturnRequest): Observable<PurchaseReceiptResponse> {
    return this.http.post<PurchaseReceiptResponse>(`${this.apiUrl}/Sam/sales_returnapi`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  items: CashSaleRequest[] = [];
  item: PCashSaleRequest[] = [];
  receipt: SalesReceiptRequest[] = [];
  receipts: PurchaseReceiptRequest[] = [];

  pl(filter: CashFilter): Observable<CashSaleResponse[]> {
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
    return this.http.get<CashSaleResponse[]>(
      `${this.apiUrl}/Sam/gopl`,
      { params: params }
    )
  }

  customer: CustomerMasterdataRequest[] = [];

  customermaster(filter: CustomerMasterFilter): Observable<CustomerMasterdataResponse[]> {
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
    return this.http.get<CustomerMasterdataResponse[]>(
      `${this.apiUrl}/Sam/custom`,
      { params: params }
    )
  }

  p(filter: PCashFilter): Observable<PCashSaleResponse[]> {
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
    return this.http.get<PCashSaleResponse[]>(
      `${this.apiUrl}/Sam/gopl`,
      { params: params }
    )
  }

  r(filter: ReceiptFilter): Observable<SalesReceiptResponse[]> {
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
    return this.http.get<SalesReceiptResponse[]>(
      `${this.apiUrl}/Sam/gopl`,
      { params: params }
    )
  }

  pr(filter: PReceiptFilter): Observable<PurchaseReceiptResponse[]> {
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
    return this.http.get<PurchaseReceiptResponse[]>(
      `${this.apiUrl}/Sam/gopl`,
      { params: params }
    )
  }

  si: CashSaleRequest[] = [];
  invoice: PCashSaleRequest[] = [];
  refno: SalesReceiptRequest[] = [];
  account: PurchaseReceiptRequest[] = [];
  amount: CreditSaleRequest[] = [];
  paid_amount: CreditPurchaseRequest[] = [];
  l(filter: CashFilter): Observable<CashSaleResponse[]> {
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
    return this.http.get<CashSaleResponse[]>(
      `${this.apiUrl}/Sam/gotb`,
      { params: params }
    )
  }

  tl(filter: PCashFilter): Observable<PCashSaleResponse[]> {
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
    return this.http.get<PCashSaleResponse[]>(
      `${this.apiUrl}/Sam/gotb`,
      { params: params }
    )
  }

  tlr(filter: ReceiptFilter): Observable<SalesReceiptResponse[]> {
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
    return this.http.get<SalesReceiptResponse[]>(
      `${this.apiUrl}/Sam/gotb`,
      { params: params }
    )
  }

  tpr(filter: PReceiptFilter): Observable<PurchaseReceiptResponse[]> {
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
    return this.http.get<PurchaseReceiptResponse[]>(
      `${this.apiUrl}/Sam/gotb`,
      { params: params }
    )
  }

  tsr(filter: creditsaleFilter): Observable<CreditSaleResponse[]> {
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
    return this.http.get<CreditSaleResponse[]>(
      `${this.apiUrl}/Sam/gotb`,
      { params: params }
    )
  }

  tcr(filter: PcreditFilter): Observable<CreditPurchaseResponse[]> {
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
    return this.http.get<CreditPurchaseResponse[]>(
      `${this.apiUrl}/Sam/gotb`,
      { params: params }
    )
  }

  sis: CashSaleRequest[] = [];
  invoices: PCashSaleRequest[] = [];
  refnos: SalesReceiptRequest[] = [];
  accounts: PurchaseReceiptRequest[] = [];
  amounts: CreditSaleRequest[] = [];
  paid_amounts: CreditPurchaseRequest[] = [];

  ls(filter: CashFilter): Observable<CashSaleResponse[]> {
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
    return this.http.get<CashSaleResponse[]>(
      `${this.apiUrl}/Sam/gols`,
      { params: params }
    )
    // return this.http.get<CashSaleResponse[]>(
    //   `${this.apiUrl}/Sam/gotb`,
    //   { params: params }
    // )
  }

  lsl(filter: PCashFilter): Observable<PCashSaleResponse[]> {
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
    return this.http.get<PCashSaleResponse[]>(
      `${this.apiUrl}/Sam/go`,
      { params: params }
    )
  }

  tll(filter: ReceiptFilter): Observable<SalesReceiptResponse[]> {
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
    return this.http.get<SalesReceiptResponse[]>(
      `${this.apiUrl}/Sam/gols`,
      { params: params }
    )
  }

  tlrs(filter: PReceiptFilter): Observable<PurchaseReceiptResponse[]> {
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
    return this.http.get<PurchaseReceiptResponse[]>(
      `${this.apiUrl}/Sam/gols`,
      { params: params }
    )
  }

  tsl(filter: creditsaleFilter): Observable<CreditSaleResponse[]> {
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
    return this.http.get<CreditPurchaseResponse[]>(
      `${this.apiUrl}/Sam/gols`,
      { params: params }
    )
  }

  trl(filter: PcreditFilter): Observable<CreditPurchaseResponse[]> {
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
    return this.http.get<CreditPurchaseResponse[]>(
      `${this.apiUrl}/Sam/gols`,
      { params: params }
    )
  }

  siss: CashSaleRequest[] = [];
  invoicess: PCashSaleRequest[] = [];
  amountss: CreditSaleRequest[] = [];
  paid_amountss: CreditPurchaseRequest[] = [];

  lsb(filter: CashFilter): Observable<CashSaleResponse[]> {
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
    return this.http.get<CashSaleResponse[]>(
      `${this.apiUrl}/Sam/gob_s`,
      { params: params }
    )
  }

  lslb(filter: PCashFilter): Observable<PCashSaleResponse[]> {
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
    return this.http.get<PCashSaleResponse[]>(
      `${this.apiUrl}/Sam/gob_s`,
      { params: params }
    )
  }

  tsrl(filter: creditsaleFilter): Observable<CreditSaleResponse[]> {
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
    return this.http.get<CreditPurchaseResponse[]>(
      `${this.apiUrl}/Sam/gols`,
      { params: params }
    )
  }

  tcrlb(filter: PcreditFilter): Observable<CreditPurchaseResponse[]> {
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
    return this.http.get<CreditPurchaseResponse[]>(
      `${this.apiUrl}/Sam/gob_s`,
      { params: params }
    );
  }

  getCustomer(): Observable<CustomerResponse[]> {
    return this.http.get<CustomerResponse[]>(`${this.apiUrl}/Sam/customershowApi`, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  getItem(): Observable<ItemResponse[]> {
    return this.http.get<ItemResponse[]>(`${this.apiUrl}/Sam/itemshowApi`, {
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
}
