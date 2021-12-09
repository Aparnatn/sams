import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BalanceSheet, CashSaleRequest, CashSaleResponse, CreditPurchaseRequest, CreditPurchaseResponse, CreditSaleRequest, CreditSaleResponse, CustomerMasterdataRequest, CustomerMasterdataResponse, ManualJournalRequest, ManualJournalResponse, pandl, PCashSaleRequest, PCashSaleResponse, PurchaseReceiptRequest, PurchaseReceiptResponse, PurchasereturnRequest, SalesReceiptRequest, SalesReceiptResponse, SalesreturnRequest, SalesReturnResponse } from '../interfaces/sales.interfaces';
import { Company } from '../user/user.service';
import { CustomerResponse, ItemResponse, JobResponse } from '../user/login.interfaces';

// export interface manualjournalFilter {
//   from_date?: string,
//   to_date?: string,
//   name?: string,
// }
export interface CashFilter {
  date?: string,
  from_date?: string,
  to_date?: string,
  report_date?: string,
  name?: string,
}

export interface CustomerMasterFilter {
  date?:string,
  from_date?: string,
  to_date?: string,
  report_date?:string,
  name?: string,
}

export interface SupplierMasterFilter {
  date?:string,
  from_date?: string,
  to_date?: string,
  report_date?:string,
  name?: string,
}


export interface PCashFilter {
  date?:string,
  from_date?: string,
  to_date?: string,
  report_date?:string,
  name?: string,

}

export interface ReceiptFilter {
  from_date?: string,
  to_date?: string,
  report_date?: string,
  date?: string,
  name?: string,
}

export interface PReceiptFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
  report_date?: string,
  date?: string,
}

export interface creditsaleFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface PreceiptFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface PcreditFilter{
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface creditsaleFilter{
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface salesreceiptFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

@Injectable()
export class SalesService {
  customer_master(value: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl: string;
  getCustomers: any;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
  }

  manualjournal(data: ManualJournalRequest): Observable<ManualJournalResponse> {
    return this.http.post<ManualJournalResponse>(`${this.apiUrl}/Sam/ManualJournalApi`, data, {
      // observe: 'response',
      // withCredentials: true
    });

  }

  cashSale(data: CashSaleRequest): Observable<CashSaleResponse> {
    return this.http.post<CashSaleResponse>(`${this.apiUrl}/Sam/cashapi`, data, {
      // observe: 'response',
      // withCredentials: true
    });

  }

  customermasterdata(data: CustomerMasterdataRequest): Observable<CustomerMasterdataResponse> {
    return this.http.post<CustomerMasterdataResponse>(`${this.apiUrl}/Sam/customermasterdata`, data, {
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
    return this.http.post<PurchaseReceiptResponse>(`${this.apiUrl}/Sam/PRSales_ReturnApi`, data, {
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

  salesReturn(data: SalesreturnRequest): Observable<SalesReturnResponse> {
    return this.http.post<SalesReturnResponse>(`${this.apiUrl}/Sam/sales_returnapi`, data, {
      // observe: 'response',
      // withCredentials: true
    });
  }

  items: CashSaleRequest[] = [];
  item: PCashSaleRequest[] = [];
  receipt: SalesReceiptRequest[] = [];
  receipts: PurchaseReceiptRequest[] = [];


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
      `${this.apiUrl}/Sam/customermasterdata`,
      { params: params }
    )
  }







  si: CashSaleRequest[] = [];
  invoice: PCashSaleRequest[] = [];
  refno: SalesReceiptRequest[] = [];
  account: PurchaseReceiptRequest[] = [];
  amount: CreditSaleRequest[] = [];
  paid_amount: CreditPurchaseRequest[] = [];
  trial_balance(filter: CashFilter): Observable<CashSaleResponse[]> {
    // console.log(filter);
    let params = new HttpParams();
    if (filter.date) {
      params = params.append('date', filter.date);
    }
    if (filter.report_date) {
      params = params.append('report_date', filter.report_date);
    }
    if (filter.name) {
      params = params.append('name', filter.name);
    }
    return this.http.get<CashSaleResponse[]>(
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

  ledgerstatement(filter: CashFilter): Observable<CashSaleResponse[]> {
    // console.log(filter);
    let params = new HttpParams();
    if (filter.date) {
      params = params.append('date', filter.date);
    }
    if (filter.report_date) {
      params = params.append('report_date', filter.report_date);
    }
    if (filter.name) {
      params = params.append('name', filter.name);
    }
    return this.http.get<CashSaleResponse[]>(
      `${this.apiUrl}/Sam/gols`,
      { params: params }
    )

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








  siss: CashSaleRequest[] = [];
  invoicess: PCashSaleRequest[] = [];
  amountss: CreditSaleRequest[] = [];
  paid_amountss: CreditPurchaseRequest[] = [];


  getBalanceSheet(filter: PCashFilter): Observable<BalanceSheet> {
    // console.log(filter);
    let params = new HttpParams();
    if (filter.date) {
      params = params.append('date', filter.date);
    }
    if (filter.report_date) {
      params = params.append('report_date', filter.report_date);
    }
    if (filter.name) {
      params = params.append('name', filter.name);
    }
    return this.http.get<BalanceSheet>(
      `${this.apiUrl}/Sam/gob_s`,
      { params: params }
    )
  }
  
  
  getpl(filter: CashFilter): Observable<pandl> {
    // console.log(filter);
    let params = new HttpParams();
    if (filter.date) {
      params = params.append('date', filter.date);
    }
    if (filter.report_date) {
      params = params.append('report_date', filter.report_date);
    }
    if (filter.name) {
      params = params.append('name', filter.name);
    }
    return this.http.get<pandl>(
      `${this.apiUrl}/Sam/gopl`,
      { params: params }
    )
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
