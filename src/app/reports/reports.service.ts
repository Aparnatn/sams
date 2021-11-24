import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';





import {  CashSaleRequest, CashSaleResponse, CreditPurchaseRequest, CreditPurchaseResponse, CreditSaleRequest, CreditSaleResponse, ItemStatementRequest, ItemStatementResponse, JobStatementRequest, JobStatementResponse, PCashSaleRequest, PCashSaleResponse, PurchaseReceiptRequest, PurchaseReceiptResponse, SalesReceiptRequest, SalesReceiptResponse, StockAdjustmentRequest, StockAdjustmentResponse } from '../interfaces/sales.interfaces';



import { AllJournalRequest, AllJournalResponse,   } from '../interfaces/sales.interfaces';
import { CashFilter, creditsaleFilter, PCashFilter, PcreditFilter, PReceiptFilter, ReceiptFilter } from '../services/sales.service';

import { ItemRequest, ItemResponse } from '../user/login.interfaces';
import { customerAccountStatementRequest, customerAccountStatementResponse, CustomerInvoiceHistoryRequest, CustomerInvoiceHistoryResponse, customerInvoRecptRegRequest, customerInvoRecptRegResponse, customerOutstandingRequest, customerOutstandingResponse, CustomerReceiptHistoryRequest, CustomerReceiptHistoryResponse, jobMasterdataRequest, jobMasterdataResponse, LedgerMasterDataRequest, LedgerMasterDataResponse, PaymentHistoryRequest, PaymentHistoryResponse, StockBalanceRequest, StockBalanceResponse, stockmasterdataRequest, stockmasterdataResponse, supplierAccountStatementRequest, supplierAccountStatementResponse, SupplierInvoiceHistoryRequest, SupplierInvoiceHistoryResponse, supplierInvoRcptRegRequest, supplierInvoRcptRegResponse, supplierMasterdataRequest, supplierMasterdataResponse, supplierOutstandingRequest, supplierOutstandingResponse } from './reports.interface';






export interface customerInvoRecptRegFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface allJournalEntryFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface itemStatementFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface stockAdjustmentFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface jobStatementFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface supplierMasterdataFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface supplierInvoRecptRegisterFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface jobmasterdataFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface stockmasterFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface customerAccountFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface customeroutstandingFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface supplierAccountFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}

export interface supplierOutstandingFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface stockbalanceFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface SupplierInvoiceHistoryFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface CustomerInvoiceHistoryFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface SupplierPaymentHistoryFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface LedgerMasterDataFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}
export interface CustomerReceiptHistoryFilter {
  from_date?: string,
  to_date?: string,
  name?: string,
}



@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
}

  customerInvoRecptReg(data: customerInvoRecptRegRequest ): Observable<customerInvoRecptRegResponse> {
    return this.http.post<customerInvoRecptRegResponse>(`${this.apiUrl}/Sam/customerInvoReceiptRegister`, data, {
        // observe: 'response',
        withCredentials: true
    });

}

supplierMaster(data: supplierMasterdataRequest ): Observable<supplierMasterdataResponse> {
  return this.http.post<supplierMasterdataResponse>(`${this.apiUrl}/Sam/supplierMasterData`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
allJournal(data: AllJournalRequest ): Observable<AllJournalResponse> {
  return this.http.post<AllJournalResponse>(`${this.apiUrl}/Sam/allJournalEntry`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
itemStatement(data: ItemRequest ): Observable<ItemResponse> {
  return this.http.post<ItemResponse>(`${this.apiUrl}/Sam/itemStatement`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
stockAdjustment(data: StockAdjustmentRequest ): Observable<StockAdjustmentResponse> {
  return this.http.post<StockAdjustmentResponse>(`${this.apiUrl}/Sam/stockAdjustment`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
jobStatement(data: JobStatementRequest ): Observable<JobStatementResponse> {
  return this.http.post<JobStatementResponse>(`${this.apiUrl}/Sam/jobStatement`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
supplierInvoRcpt(data: supplierInvoRcptRegRequest ): Observable<supplierInvoRcptRegResponse> {
  return this.http.post<supplierInvoRcptRegResponse>(`${this.apiUrl}/Sam/supplierInvoRecptReg`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
jobmasterdata(data: jobMasterdataRequest ): Observable<jobMasterdataResponse> {
  return this.http.post<jobMasterdataResponse>(`${this.apiUrl}/Sam/JobMasterData`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
stockmasterdata(data: stockmasterdataRequest ): Observable<stockmasterdataResponse> {
  return this.http.post<stockmasterdataResponse>(`${this.apiUrl}/Sam/stockMasterData`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
customerAccountstatement(data: customerAccountStatementRequest ): Observable<customerAccountStatementResponse> {
  return this.http.post<customerAccountStatementResponse>(`${this.apiUrl}/Sam/CustomerAccountStatement`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
customerOutstanding(data: customerOutstandingRequest ): Observable<customerOutstandingResponse> {
  return this.http.post<customerOutstandingResponse>(`${this.apiUrl}/Sam/CustomerOutstanding`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
supplierAccountStatement(data: supplierAccountStatementRequest ): Observable<supplierAccountStatementResponse> {
  return this.http.post<supplierAccountStatementResponse>(`${this.apiUrl}/Sam/SupplierAccountStatement`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
supplierOutstanding(data: supplierOutstandingRequest ): Observable<supplierOutstandingResponse> {
  return this.http.post<supplierOutstandingResponse>(`${this.apiUrl}/Sam/SupplierOutstanding`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
stockBalance(data: StockBalanceRequest ): Observable<StockBalanceResponse> {
  return this.http.post<StockBalanceResponse>(`${this.apiUrl}/Sam/StockBalance`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
SupplierInvoiceHi(data: SupplierInvoiceHistoryRequest ): Observable<SupplierInvoiceHistoryResponse> {
  return this.http.post<SupplierInvoiceHistoryResponse>(`${this.apiUrl}/Sam/SupplierInvoiceHistory`, data, {
      // observe: 'response',
      withCredentials: true
  });

}
supplierPaymentHist(data: PaymentHistoryRequest ): Observable<PaymentHistoryResponse> {
  return this.http.post<PaymentHistoryResponse>(`${this.apiUrl}/Sam/SupplierPaymentHistory`, data, {
      // observe: 'response',
      withCredentials: true
  });

}

customerReceiptH(data: CustomerReceiptHistoryRequest ): Observable<CustomerReceiptHistoryResponse> {
  return this.http.post<CustomerReceiptHistoryResponse>(`${this.apiUrl}/Sam/CustomerReceiptHistory`, data, {
      // observe: 'response',
      withCredentials: true
  });

}

customerInvoiceHistory(data: CustomerInvoiceHistoryRequest ): Observable<CustomerInvoiceHistoryResponse> {
  return this.http.post<CustomerInvoiceHistoryResponse>(`${this.apiUrl}/Sam/CustomerInvoiceHistory`, data, {
      // observe: 'response',
      withCredentials: true
  });

}

ledgermasterdata(data: LedgerMasterDataRequest ): Observable<LedgerMasterDataResponse> {
  return this.http.post<LedgerMasterDataResponse>(`${this.apiUrl}/Sam/LedgerMasterData`, data, {
      // observe: 'response',
      withCredentials: true
  });

}

customerInvoRecpt: customerInvoRecptRegRequest[] = [];
    customerInvoR(filter: customerInvoRecptRegFilter): Observable<customerInvoRecptRegResponse[]> {
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
      return this.http.get<customerInvoRecptRegResponse[]>(
        `${this.apiUrl}/Sam/customerInvoReceiptRegister`,
        {params: params}
      )
    }


  supplierMasterD: supplierMasterdataRequest[] = [];
    supplierMasterDF(filter: supplierMasterdataFilter): Observable<supplierMasterdataResponse[]> {
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
      return this.http.get<supplierMasterdataResponse[]>(
        `${this.apiUrl}/Sam/supplierMasterData`,
        {params: params}
      )
    }

    supplierInvoR: supplierMasterdataRequest[] = [];
    supplierInvoRF(filter: supplierInvoRecptRegisterFilter): Observable<supplierInvoRcptRegResponse[]> {
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
      return this.http.get<supplierInvoRcptRegResponse[]>(
        `${this.apiUrl}/Sam/supplierInvoRecptReg`,
        {params: params}
      )
    }

    jobmasterD: jobMasterdataRequest[] = [];
    jobmasterDF(filter: jobmasterdataFilter): Observable<jobMasterdataResponse[]> {
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
      return this.http.get<jobMasterdataResponse[]>(
        `${this.apiUrl}/Sam/JobMasterData`,
        {params: params}
      )
    }


    stockmasterD: stockmasterdataRequest[] = [];
    stockmasterDF(filter: stockmasterFilter): Observable<stockmasterdataResponse[]> {
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
      return this.http.get<stockmasterdataResponse[]>(
        `${this.apiUrl}/Sam/stockMasterData`,
        {params: params}
      )
    }


    customerAccounts: customerAccountStatementRequest[] = [];
    customerAccountSF(filter: customerAccountFilter): Observable<customerAccountStatementResponse[]> {
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
      return this.http.get<customerAccountStatementResponse[]>(
        `${this.apiUrl}/Sam/CustomerAccountStatement`,
        {params: params}
      )
    }

    customerOutstandinG: customerOutstandingRequest[] = [];
    customerOutstandF(filter: customeroutstandingFilter): Observable<customerOutstandingResponse[]> {
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
      return this.http.get<customerOutstandingResponse[]>(
        `${this.apiUrl}/Sam/CustomerOutstanding`,
        {params: params}
      )
    }

    supplierAccountS: supplierAccountStatementRequest[] = [];
    supplierAccountF(filter: supplierAccountFilter): Observable<supplierAccountStatementResponse[]> {
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
      return this.http.get<supplierAccountStatementResponse[]>(
        `${this.apiUrl}/Sam/SupplierAccountStatement`,
        {params: params}
      )
    }

    supplierOutstandinG: supplierOutstandingRequest[] = [];
    supplierOutstandF(filter: supplierOutstandingFilter): Observable<supplierOutstandingResponse[]> {
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
      return this.http.get<supplierOutstandingResponse[]>(
        `${this.apiUrl}/Sam/SupplierOutstanding`,
        {params: params}
      )
    }

    ItemStatement: ItemStatementRequest[] = [];
    ItemStatementF(filter: itemStatementFilter): Observable<ItemStatementResponse[]> {
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
      return this.http.get<ItemStatementResponse[]>(
        `${this.apiUrl}/Sam/itemStatement`,
        {params: params}
      )
    }
    JobStatement: JobStatementRequest[] = [];
    JobStatementF(filter: jobStatementFilter): Observable<JobStatementResponse[]> {
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
      return this.http.get<JobStatementResponse[]>(
        `${this.apiUrl}/Sam/jobStatement`,
        {params: params}
      )
    }
    StockAdjustment: StockAdjustmentRequest[] = [];
    StockAdjustmentF(filter: stockAdjustmentFilter): Observable<StockAdjustmentResponse[]> {
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
      return this.http.get<StockAdjustmentResponse[]>(
        `${this.apiUrl}/Sam/stockAdjustment`,
        {params: params}
      )
    }

    StockBalance: StockBalanceRequest[] = [];
    stockbalanceF(filter: stockbalanceFilter): Observable<StockBalanceResponse[]> {
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
      return this.http.get<StockBalanceResponse[]>(
        `${this.apiUrl}/Sam/StockBalance`,
        {params: params}
      )
    }


    supplierInvoiceH: SupplierInvoiceHistoryRequest[] = [];
    supplierInvoiceHF(filter: SupplierInvoiceHistoryFilter): Observable<SupplierInvoiceHistoryResponse[]> {
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
      return this.http.get<SupplierInvoiceHistoryResponse[]>(
        `${this.apiUrl}/Sam/SupplierInvoiceHistory`,
        {params: params}
      )
    }
    csr: CashSaleRequest[] = [];
pcsr: PCashSaleRequest[] = [];
srr: SalesReceiptRequest[] = [];
prr: PurchaseReceiptRequest[] = [];
csr2:CreditSaleRequest[] = [];
cpr:CreditPurchaseRequest[] = [];
chs(filter: CashFilter): Observable<CashSaleResponse[]> {
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
    `${this.apiUrl}/Sam/allJournalEntry`,
    {params: params}
  )
}

pchs(filter: PCashFilter): Observable<PCashSaleResponse[]> {
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
      `${this.apiUrl}/Sam/allJournalEntry`,
      {params: params}
    )
}

rs(filter: ReceiptFilter): Observable<SalesReceiptResponse[]> {
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
`${this.apiUrl}/Sam/allJournalEntry`,
{params: params}
)
}

rp(filter: PReceiptFilter): Observable<PurchaseReceiptResponse[]> {
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
`${this.apiUrl}/Sam/allJournalEntry`,
{params: params}
)
}
crs(filter: creditsaleFilter): Observable<CreditSaleResponse[]> {
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
  `${this.apiUrl}/Sam/allJournalEntry`,
  {params: params}
  )
  }
  crp(filter: PcreditFilter): Observable<CreditPurchaseResponse[]> {
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
    `${this.apiUrl}/Sam/allJournalEntry`,
    {params: params}
    )
    }

    csr3: CashSaleRequest[] = [];
pcsr3: PCashSaleRequest[] = [];
csr4:CreditSaleRequest[] = [];
cpr3:CreditPurchaseRequest[] = [];
chs3(filter: CashFilter): Observable<CashSaleResponse[]> {
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
    `${this.apiUrl}/Sam/stockAdjustment`,
    {params: params}
  )
}

pchs3(filter: PCashFilter): Observable<PCashSaleResponse[]> {
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
      `${this.apiUrl}/Sam/stockAdjustment`,
      {params: params}
    )
}
crs3(filter: creditsaleFilter): Observable<CreditSaleResponse[]> {
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
  `${this.apiUrl}/Sam/stockAdjustment`,
  {params: params}
  )
  }
  crp3(filter: PcreditFilter): Observable<CreditPurchaseResponse[]> {
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
    `${this.apiUrl}/Sam/stockAdjustment`,
    {params: params}
    )
    }
    csr5: CashSaleRequest[] = [];
pcsr4: PCashSaleRequest[] = [];
csr6:CreditSaleRequest[] = [];
cpr4:CreditPurchaseRequest[] = [];
chs4(filter: CashFilter): Observable<CashSaleResponse[]> {
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
    `${this.apiUrl}/Sam/itemStatement`,
    {params: params}
  )
}

pchs4(filter: PCashFilter): Observable<PCashSaleResponse[]> {
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
      `${this.apiUrl}/Sam/itemStatement`,
      {params: params}
    )
}
crs4(filter: creditsaleFilter): Observable<CreditSaleResponse[]> {
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
  `${this.apiUrl}/Sam/itemStatement`,
  {params: params}
  )
  }
  crp4(filter: PcreditFilter): Observable<CreditPurchaseResponse[]> {
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
    `${this.apiUrl}/Sam/itemStatement`,
    {params: params}
    )
    }





    csr1: CashSaleRequest[] = [];
pcsr1: PCashSaleRequest[] = [];

chs1(filter: CashFilter): Observable<CashSaleResponse[]> {
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
    `${this.apiUrl}/Sam/jobStatement`,
    {params: params}
  )
}

pchs1(filter: PCashFilter): Observable<PCashSaleResponse[]> {
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
      `${this.apiUrl}/Sam/jobStatement`,
      {params: params}
    )
}



    supplierPaymentHis: PaymentHistoryRequest[] = [];
    supplierPaymentHisF(filter: SupplierPaymentHistoryFilter): Observable<PaymentHistoryResponse[]> {
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
      return this.http.get<PaymentHistoryResponse[]>(
        `${this.apiUrl}/Sam/SupplierPaymentHistory`,
        {params: params}
      )
    }

    customerRcptH: CustomerReceiptHistoryRequest[] = [];
    customerRcptHF(filter: CustomerReceiptHistoryFilter): Observable<CustomerReceiptHistoryResponse[]> {
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
      return this.http.get<CustomerReceiptHistoryResponse[]>(
        `${this.apiUrl}/Sam/CustomerReceiptHistory`,
        {params: params}
      )
    }

    customerInvoiceH: CustomerInvoiceHistoryRequest[] = [];
    customeInvoicetHF(filter: CustomerInvoiceHistoryFilter): Observable<CustomerInvoiceHistoryResponse[]> {
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
      return this.http.get<CustomerInvoiceHistoryResponse[]>(
        `${this.apiUrl}/Sam/CustomerInvoiceHistory`,
        {params: params}
      )
    }

    LedgerMasterD: LedgerMasterDataRequest[] = [];
    ledgermasterdF(filter: LedgerMasterDataFilter): Observable<LedgerMasterDataResponse[]> {
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
      return this.http.get<LedgerMasterDataResponse[]>(
        `${this.apiUrl}/Sam/LedgerMasterData`,
        {params: params}
      )
    }


}

