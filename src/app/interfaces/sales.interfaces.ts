export interface CashSaleRequest {
  invoice_number: string,
  date: string,
  internal_ref_no: string,
  cash: string,
  user_id: string,
  account: string,
  ledger_name:"sales_ledger",
  customer_id: string,
  customer_name: string,
  item_id: string,
  item_id2: string,
  item_details: string,
  item_details2: string,
  price1_1: string,
  quantity1?:string,
  amount1?: string,
  price1_2?: string,
  price_: string,
  price_2?:string,
  price2_?: string,
  price2_2?: string,
  quantity:string,
  quantity2?:string,
  quantity3?:string,
  quantity4?:string,
  amount:string,
  amount2?:string,
  sales_ex:string,
  sales_ex2?:string,
  job:string,
  job2?:string,
  labour_charge:string,
  other_charge?:string,
  total?:string,
  total2?:string,
  total3?:string,
  total4?:string,
  total5?:string,
  total6?:string,
  discount?:string,
  tax?:string,
  id?:number,
}

export interface CashFrom extends CashSaleRequest {
  total1: number,
  // total2: number,
}

export interface PCashFrom extends PCashSaleRequest {
  price1_1: number,
  price1_2:number,
  quantity1:number,
  // total2: number,
}
export interface CreditFrom extends CreditSaleRequest {
  total1: number,
  // total2: number,
}
export interface CreditPurchaseFrom extends CreditPurchaseRequest {
  total1: number,
  // total2: number,
}
export interface SalesReturnFrom extends SalesreturnRequest {
  total1: number,
  // total2: number,
}
export interface ReceiptFrom extends PurchaseReceiptRequest {
  price1_1: number,
  price1_2:number,
  quantity1:number,
  quantity2:number,
  labour_charge:number,
  other_charge:number,

}
export interface BSRequest{
  date:string,
  report_date:string,
}
export interface BSResponse{
  id:number,
}
export interface BSFrom extends BSRequest {
  price1_1: number,
  price1_2:number,
  quantity1:number,
  quantity2:number,
  labour_charge:number,
  other_charge:number,

}
export interface SalesFrom extends SalesReceiptRequest {
  price1_1: number,
  price1_2:number,
  quantity1:number,
  quantity2:number,
  labour_charge:number,
  other_charge:number,

}
export interface CustomerMasterdataRequest {
  date:string,
  report_date:string,
}
export interface CustomerMasterdataResponse {
 id:number
}
export interface CashSaleResponse {
  total3: number;
  total1: number;
  id:number,
  created_at:string,
  updated_at:string,
}

export interface PCashSaleRequest {
  invoice_number: string,
  date: string,
  internal_ref_no: string,
  cash: string,
  user_id: string,
  account: string,
  supplier_id: string,
  supplier_name: string,
  item_id: string,
  item_id2: string,
  item_details: string,
  item_details2: string,
  price_: string,
  price_2?:string,
  price2_?: string,
  price2_2?: string,
  quantity:string,
  quantity2?:string,
  quantity3?:string,
  quantity4?:string,
  amount:string,
  amount2?:string,
  sales_ex:string,
  sales_ex2?:string,
  job:string,
  job2?:string,
  labour_charge:string,
  other_charge?:string,
  total?:string,
  total2?:string,
  total3?:string,
  total4?:string,
  total5?:string,
  total6?:string,
  discount?:string,
  tax?:string,
  id?:number,
}

export interface PCashSaleResponse {
  total3: number;
  total1: number;
  id:number,
}

export interface CreditPurchaseRequest {
  invoice_number: string,
  date: string,
  internal_ref_no: string,
  cash: string,
  user_id: string,
  account: string,
  supplier_id: string,
  supplier_name: string,
  item_id: string,
  item_id2: string,
  item_details: string,
  item_details2: string,
  price_: string,
  price_2?:string,
  price2_?: string,
  price2_2?: string,
  quantity:string,
  quantity2?:string,
  quantity3?:string,
  quantity4?:string,
  amount:string,
  amount2?:string,
  sales_ex:string,
  sales_ex2?:string,
  job:string,
  job2?:string,
  labour_charge:string,
  other_charge?:string,
  total?:string,
  total2?:string,
  total3?:string,
  total4?:string,
  total5?:string,
  total6?:string,
  discount?:string,
  tax?:string,
  id?:number,
}

export interface CreditPurchaseResponse {
  total3: number;
  id:number,
}

export interface PurchasereturnRequest {
  invoice_number: string,
  date: string,
  internal_ref_no: string,
  cash: string,
  user_id: string,
  account: string,
  supplier_id: string,
  supplier_name: string,
  item_id: string,
  item_id2: string,
  item_details: string,
  item_details2: string,
  price_: string,
  price_2?:string,
  price2_?: string,
  price2_2?: string,
  quantity:string,
  quantity2?:string,
  quantity3?:string,
  quantity4?:string,
  amount:string,
  amount2?:string,
  sales_ex:string,
  sales_ex2?:string,
  job:string,
  job2?:string,
  labour_charge:string,
  other_charge?:string,
  total?:string,
  total2?:string,
  total3?:string,
  total4?:string,
  total5?:string,
  total6?:string,
  discount?:string,
  tax?:string,
  id?:number,
}

export interface PurchaseReturnResponse {
  id:number,
}

export interface SalesreturnRequest {

  invoice_number: string,
  date: string,
  internal_ref_no: string,
  cash: string,
  user_id: string,
  account: string,
  customer_id: string,
  customer_name: string,
  item_id: string,
  item_id2: string,
  item_details: string,
  item_details2: string,
  price_: string,
  price_2?:string,
  price2_?: string,
  price2_2?: string,
 quantity:string,
 quantity2?:string,
 quantity3?:string,
 quantity4?:string,
 amount:string,
 amount2?:string,
 sales_ex:string,
 sales_ex2?:string,
 job:string,
 job2?:string,
 labour_charge:string,
 other_charge?:string,
 total?:string,
 total2?:string,
 total3?:string,
 total4?:string,
 total5?:string,
 total6?:string,
 discount?:string,
 tax?:string,
 id?:number,
}

export interface PurchaseSalesReturnResponse {
  id:number,

}
export interface CreditSaleRequest {

  invoice_number: string,
  date: string,
  internal_ref_no: string,
  cash: string,
  user_id: string,
  account: string,
  supplier_id: string,
  supplier_name: string,
  item_id: string,
  item_id2: string,
  item_details: string,
  item_details2: string,
  price_: string,
  price_2?:string,
  price2_?: string,
  price2_2?: string,
  quantity:string,
  quantity2?:string,
  quantity3?:string,
  quantity4?:string,
  amount:string,
  amount2?:string,
  sales_ex:string,
  sales_ex2?:string,
  job:string,
  job2?:string,
  labour_charge:string,
  other_charge?:string,
  total?:string,
  total2?:string,
  total3?:string,
  total4?:string,
  total5?:string,
  total6?:string,
  discount?:string,
  tax?:string,
  id?:number,
}

export interface CreditSaleResponse {
  total3: number;
  id:number,
}

export interface PurchaseReceiptRequest {
  receipt_number:string,
  date:string,
  internal_ref_no:string,
  due_on:string,
  credit_limit_amt:string,
  user_id:string,
  supp_id:string,
  supp_name:string,
  si_no1:string,
  si_no2:string,
  invoice_no1:string,
  invoice_no2:string,
  invoice_no3:string,
  invoice_date1:string,
  invoice_date2:string,
  invoice_date3:string,
  duedate1:string,
  duedate2:string,
  duedate3:string,
  invoice_amt1:string,
  invoice_amt2:string,
  invoice_amt3:string,
  received_amt1:string,
  received_amt2:string,
  received_amt3:string,
  outstanding1:string,
  outstanding2:string,
  outstanding3:string,
  discount1:string,
  discount2:string,
  discount3:string,
  balance_amt1:string,
  balance_amt2:string,
  balance_amt3:string,
  tick_space1:string,
  tick_space2:string,
  tick_space3:string,
  partial1:string,
  partial2:string,
  partial3:string,
  total1:string,
  total2:string,
  total3:string,
  total4:string,
  total5:string,
  total6:string,
  on_account:string,
  discount:string,
}

export interface PurchaseReceiptResponse {
  id:number,
}
export interface SalesReceiptRequest {

  receipt_number:string,
  date:string,
  internal_ref_no:string,
  due_on:string,
  credit_limit_amt:string,
  user_id:string,
  customer_id:string,
  customer_name:string,
  si_no1:string,
  si_no2:string,

  invoice_no1:string,
  invoice_no2:string,
  invoice_no3:string,
  invoice_date1:string,
  invoice_date2:string,
  invoice_date3:string,
  duedate1:string,
  duedate2:string,

  invoice_amt1:string,
  invoice_amt2:string,

  received_amt1:string,
  received_amt2:string,
  received_amt3:string,
  outstanding1:string,
  outstanding2:string,
  outstanding3:string,
  discount1:string,
  discount2:string,
  discount3:string,
  balance_amt1:string,
  balance_amt2:string,
  balance_amt3:string,
  tick_space1:string,
  tick_space2:string,
  tick_space3:string,
  partial1:string,
  partial2:string,
  partial3:string,
  total1:string,
  total2:string,
  total3:string,
  total4:string,
  total5:string,
  total6:string,
  on_account:string,
  discount:string,
}

export interface SalesReceiptResponse {
  id:number,

}
export interface AllJournalRequest{
  date:string,
  report_date:string,
}
export interface AllJournalResponse{
  id:number,
}
export interface ItemStatementRequest{
  date:string,
  report_date:string,
}
export interface ItemStatementResponse{
  id:number,
}
export interface JobStatementRequest{
  date:string,
  report_date:string,
}
export interface JobStatementResponse{
  id:number,
}
export interface StockAdjustmentRequest{
  date:string,
  report_date:string,
}
export interface StockAdjustmentResponse{
  id:number,
}

