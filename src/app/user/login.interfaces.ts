export interface LoginRequest {
  username: string,
  password: string,
}

export interface LoginResponse {
  id: number,
  userToken?: string,
}

export interface CompanyRequest {
  company_name: string,
  company_regno: string,

  app_regdate: string,
  reg_mobno: string,
  email: string,
  admin_usernm: string,
  admin_password: string,
  username: string,
  password: string,
  mobile: string,
  user_access: string,
  imag1: File,
  imag2: File,
}

export interface CompanyResponse {
  id: number,
}

export interface RegisterRequest {
  company_id: number,
  username: string,
  password: string,
  mobile_no: string,
  updated_at?: string,
}

export interface RegisterResponse {
  id: number,
}
export interface LedgerstatementFrom extends LedgerStatementRequest {
  price1_1: number,
  price1_2:number,
  quantity1:number,
  // total2: number,
}
export interface LedgerRequest {
  ledger_name: string,
  group_name: string,
  category: string,
  opening_bal: string,
}

export interface LedgerStatementRequest {
  ledger_name: string,
  group_name: string,
  category: string,
  opening_bal: string,
}

export interface LedgerStatementResponse {
  id: number,
}

export interface LedgerResponse {
  debitledg2: any;
  id: number,
  opening_bal: number,
}

export interface JobRequest {
  job_name: string,
  job_desc: string,

}

export interface JobResponse {
 job1: any;
 job_name: any;
 job_desc: any;
 id:number,
}

export interface GroupRequest {
  group_name: string,
  category: string,
}
export interface GroupResponse {
  id: number,
}

export interface ItemRequest {
  item_name: string,
  item_desc: string,
  item_barcode: string,
  item_category: string,
  item_unit_prim: string,
  item_unit_sec: string,
  open_balance: string,
  buying_price: string,
  sell_price: string,
  // image1: string,
  // image2: string,
  // image3: string,
  // image4: string,
}
export interface ItemeditRequest {
  item_name: string,
  item_desc: string,
  item_barcode: string,
  item_category: string,
  item_unit_prim: string,
  item_unit_sec: string,
  open_balance: string,
  buying_price: string,
  sell_price: string,
  // image1: string,
  // image2: string,
  // image3: string,
  // image4: string,
}

export interface ItemResponse {
 item_desc: any;
 item_details1: any;
 item_details: any;
 id:number,
}
export interface ItemeditResponse {
  item_desc: any;
  item_details1: any;
  item_details: any;
  id:number,
 }

export interface User {
  username: string,
  mobile_no: string,
  password?: string,
}

export interface CompanylistResponse {
  id:number,
 }
 export interface UserlistResponse {
  id:number,
 }
export interface LedgereditResponse {
  id: number,
}
export interface casheditResponse {
  id: number,
}
export interface EmployeeeditResponse {
  id: number,
}
export interface CustomereditResponse {
  id: number,
}
export interface SuppliereditResponse {
  id: number,
}

export interface LedgereditRequest {
  id?: number,
  ledger_name:string,
  group_name :string,
  category:string,
  opening_bal:string,
  date:string,
}
export interface casheditRequest {
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
  item_details?: string,
  item_details1?: string,
  item_details2?: string,
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
  job_name:string,
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
export interface CustomereditRequest {
  id?: number,
  customer_name: string,
  vat_reg_no: string,
  cr_no: string,
  expired_on: string,
  land_phone: string,
  mobile: string,
  contact_person: string,
  contact_mobile: string,
  email: string,
  address: string,
  open_balance: string,
  credit_lim_am: string,
  credit_lim_dur: string,
}
export interface SuppliereditRequest {
  id?: number,
  customer_name: string,
  vat_reg_no: string,
  cr_no: string,
  expired_on: string,
  land_phone: string,
  mobile: string,
  contact_person: string,
  contact_mobile: string,
  email: string,
  address: string,
  open_balance: string,
  credit_lim_am: string,
  credit_lim_dur: string,
  bank_acc_name: string,
  bank_acc_no: string,
}
export interface EmployeeeditRequest {
  emp_name: string,
  nationality: string,
  birth_date: string,
  joining_date: string,
  designation: string,
  department: string,
  salary_categ: string,
  passport_no: string,
  expir: string,
  id_no: string,
  id_expir: string,
  img1?: string,
  basic: string,
  housing: string,
  transportation: string,
  food: string,
  mobile: string,
  other: string,
  netpay: string,
}
export interface EmployeeRequest {
  emp_name: string,
  nationality: string,
  birth_date: string,
  joining_date: string,
  designation: string,
  department: string,
  salary_categ: string,
  passport_no: string,
  expir: string,
  id_no: string,
  id_expir: string,
  img1: string,
  basic: string,
  housing: string,
  transportation: string,
  food: string,
  mobile: string,
  other: string,
  netpay: string,
}

export interface EmployeeResponse {
  id: number,
}

export interface CustomerRequest {
  customer_name: string,
  vat_reg_no: string,
  cr_no: string,
  expired_on: string,
  land_phone: string,
  mobile: string,
  contact_person: string,
  contact_mobile: string,
  email: string,
  address: string,
  open_balance: string,
  credit_lim_am: string,
  credit_lim_dur: string,
}

export interface CustomerResponse {
  id: number,
  customer_name: string,
}

export interface SupplierRequest {
  customer_name: string,
  vat_reg_no: string,
  cr_no: string,
  expired_on: string,
  land_phone: string,
  mobile: string,
  contact_person: string,
  contact_mobile: string,
  email: string,
  address: string,
  open_balance: string,
  credit_lim_am: string,
  credit_lim_dur: string,
  bank_acc_name: string,
  bank_acc_no: string,
}

export interface SupplierResponse {
  id: number,
  supplier_name: string,
}

export interface Employee {
  id: number,
  emp_name: string,
  nationality: string,
  birth_date: string,
  joining_date: string,
  designation: string,
  department: string,
  salary_categ: string,
  passport_no: string,
  expir: string,
  id_no: string,
  id_expir: string,
  // img1: string,
  basic: string,
  housing: string,
  transportation: string,
  food: string,
  mobile: string,
  other: string,
  netpay: string,
}
export interface Ledger {
  id: number,
  ledger_name: string,
  group_name: string,
  group: string | number,
  category: string,
  opening_bal: string,
  date:string,
}
export interface cash {
  total1: any;
  job: any;
  price: any;
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
  item_details?: string,
  item_details1?: string,
  item_details2?: string,
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
  job_name:string,
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
export interface Job {
  job1: any;
  id: any;
  job_name: string,
  job_desc: string,
}
export interface Customer {
  id?: number,
  customer_name: string,
  vat_reg_no: string,
  cr_no: string,
  expired_on: string,
  land_phone: string,
  mobile: string,
  contact_person: string,
  contact_mobile: string,
  email: string,
  address: string,
  open_balance: string,
  credit_lim_am: string,
  credit_lim_dur: string,
}
export interface SuppliereditRequest {
  id?: number,
  customer_name: string,
  vat_reg_no: string,
  cr_no: string,
  expired_on: string,
  land_phone: string,
  mobile: string,
  contact_person: string,
  contact_mobile: string,
  email: string,
  address: string,
  open_balance: string,
  credit_lim_am: string,
  credit_lim_dur: string,
  bank_acc_name: string,
  bank_acc_no: string,
}
export interface Supplier {
  supplier_name: any;
  id?: number,
  customer_name: string,
  vat_reg_no: string,
  cr_no: string,
  expired_on: string,
  land_phone: string,
  mobile: string,
  contact_person: string,
  contact_mobile: string,
  email: string,
  address: string,
  open_balance: string,
  credit_lim_am: string,
  credit_lim_dur: string,
  bank_acc_name: string,
  bank_acc_no: string,
}
export interface Item {
  created_at: any;
  id: any;
  item_details1: any;
  item_name: string,
  item_desc: string,
  item_barcode: string,
  item_category: string,
  item_unit_prim: string,
  item_unit_sec: string,
  open_balance: string,
  buying_price: string,
  sell_price: string,
  // image1: string,
  // image2: string,
  // image3: string,
  // image4: string,
}
export interface Trial {
  id: number,
  ledger_name: string,
  group_name: string,
  group: string | number,
  category: string,
  opening_bal: string,
}

export interface PandL {
  id: number,
}
