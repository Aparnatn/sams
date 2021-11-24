export interface LoginRequest {
  username: string,
  password: string,
}

export interface LoginResponse {
  id: number,
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
  username: string,
  password: string,
  mobile_no: string,
  updated_at?: string,
}

export interface RegisterResponse {
  id: number,
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
  id: number,
}

export interface JobRequest {
  job_name: string,
  job_desc: string,
  imag1: string,
  imag2: string,
  imag3: string,
  imag4: string,
}

export interface JobResponse {
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
  image1: string,
  image2: string,
  image3: string,
  image4: string,
}

export interface ItemResponse {
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
export interface EmployeeeditResponse {
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
