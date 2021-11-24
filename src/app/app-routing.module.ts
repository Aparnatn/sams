import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LedgerComponent } from './ledger/ledger.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ItemComponent } from './item/item.component';
import { JobComponent } from './job/job.component';
import { GroupComponent } from './group/group.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { SalesComponent } from './sales/sales.component';
import { CashComponent } from './cash/cash.component';
import { PurchaseReceiptsComponent } from './purchase-receipts/purchase-receipts.component';
import { CreditSalesComponent } from './credit-sales/credit-sales.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { CashPurchaseComponent } from './cash-purchase/cash-purchase.component';
import { CreditPurchaseComponent } from './credit-purchase/credit-purchase.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { CompanyComponent } from './company/company.component';
import { SalesReceiptsComponent } from './sales-receipts/sales-receipts.component';
import { GrandHyperComponent } from './grand-hyper/grand-hyper.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PayrollComponent } from './payroll/payroll.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierStatementComponent } from './supplier-statement/supplier-statement.component';
import { ChartsComponent } from './charts/charts.component';
import { SupplierOutstandComponent } from './supplier-outstand/supplier-outstand.component';
import { SupplierInvoiceComponent } from './supplier-invoice/supplier-invoice.component';
import { SupplierInvoReceiptComponent } from './supplier-invo-receipt/supplier-invo-receipt.component';
import { SupplierMasterDataComponent } from './supplier-master-data/supplier-master-data.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ItemStatementComponent } from './item-statement/item-statement.component';
import { StockAdjustmentComponent } from './stock-adjustment/stock-adjustment.component';
import { StockBalanceComponent } from './stock-balance/stock-balance.component';
import { StockMasterDataComponent } from './stock-master-data/stock-master-data.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';
import { LedgerStatementComponent } from './ledger-statement/ledger-statement.component';
import { LedgerJournalComponent } from './ledger-journal/ledger-journal.component';
import { LedgerMasterdataComponent } from './ledger-masterdata/ledger-masterdata.component';
import { LedgerBalanceComponent } from './ledger-balance/ledger-balance.component';
import { JobStatementComponent } from './job-statement/job-statement.component';
import { JobMasterComponent } from './job-master/job-master.component';
import { PostDatedChequesComponent } from './post-dated-cheques/post-dated-cheques.component';
import { AllJournalEntryComponent } from './all-journal-entry/all-journal-entry.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { FinancialComponent } from './financial/financial.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { LedgershowComponent } from './ledgershow/ledgershow.component';
import { CustomerOutstandingComponent } from './customer-outstanding/customer-outstanding.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { CustomerReceiptsComponent } from './customer-receipts/customer-receipts.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { CashPurchaseEditComponent } from './cash-purchase-edit/cash-purchase-edit.component';
import { CashSaleEditComponent } from './cash-sale-edit/cash-sale-edit.component';
import { CreditPurchaseEditComponent } from './credit-purchase-edit/credit-purchase-edit.component';
import { CreditSaleEditComponent } from './credit-sale-edit/credit-sale-edit.component';
import { PurchaseReceiptEditComponent } from './purchase-receipt-edit/purchase-receipt-edit.component';
import { PurchaseReturnEditComponent } from './purchase-return-edit/purchase-return-edit.component';
import { ReceiptEditComponent } from './receipt-edit/receipt-edit.component';
import { SaleReturnEditComponent } from './sale-return-edit/sale-return-edit.component';
import { LedgereditComponent } from './ledgeredit/ledgeredit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { CompanyeditComponent } from './companyedit/companyedit.component';
import { CompanydeleteComponent } from './companydelete/companydelete.component';
import { UserlistComponent } from './userlist/userlist.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { SupplierbuttonsComponent } from './supplierbuttons/supplierbuttons.component';
import { CustomerbuttonsComponent } from './customerbuttons/customerbuttons.component';
import { LedgerbuttonsComponent } from './ledgerbuttons/ledgerbuttons.component';
import { ItemjobbuttonsComponent } from './itemjobbuttons/itemjobbuttons.component';
export const ROUTES: Routes = [

  {
    path: 'register',
     component: RegisterComponent,pathMatch: 'full'
 },
 {
  path: 'ledger/:id/edit',
   component: LedgereditComponent,
},
{
  path: 'job/:id/edit',
   component: JobEditComponent,
},
{
  path: 'customer/:id/edit',
   component: CustomerEditComponent,
},

 {
  path: 'companylist',
   component: CompanylistComponent,
},
{
  path: 'supplierbuttons',
   component: SupplierbuttonsComponent,
},
{
  path: 'customerbuttons',
   component: CustomerbuttonsComponent,
},
{
  path: 'ledgerbuttons',
   component: LedgerbuttonsComponent,
},
{
  path: 'itemjobbuttons',
   component: ItemjobbuttonsComponent,
},
{
  path: 'company/:id/edit',
   component: CompanyeditComponent,
},
{
  path: 'company/:id/delete',
   component: CompanydeleteComponent,
},
{
  path: 'userlist',
   component: UserlistComponent,
},
{
  path: 'dashboard',
   component: DashboardComponent,
},
 {
  path: 'charts',
   component: ChartsComponent,
},
{
  path: 'ledgershow',
   component: LedgershowComponent,
},
{
  path: 'ledger/:id',
   component: LedgereditComponent,
},
 {
  path: 'customer-outstanding',
   component: CustomerOutstandingComponent,
},
{
  path: 'customer-invoice',
   component: CustomerInvoiceComponent,
},
{
  path: 'customer-receipts',
   component: CustomerReceiptsComponent,
},
{
  path: 'customer-master',
   component: CustomerMasterComponent,
},
{
  path: 'customer-register',
   component: CustomerRegisterComponent,
},
 {
  path: 'user-register',
   component: UserRegisterComponent,
},
 {
   path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
  },
  {
    path: 'item',
    component: ItemComponent,
  },
  {
    path: 'job',
    component: JobComponent,
  },
  {
    path: 'group',
    component: GroupComponent,
  },
  {
    path: 'ledger',
    component: LedgerComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'cash',
    component: CashComponent,
  },
  {
    path: 'purchase-receipts',
    component: PurchaseReceiptsComponent,
  },
  {
    path: 'credit-sales',
    component: CreditSalesComponent,
  },
  {
    path: 'sales-return',
    component: SalesReturnComponent,
  },
  {
    path: 'cash-purchase',
    component: CashPurchaseComponent,
  },
  {
    path: 'credit-purchase',
    component: CreditPurchaseComponent,
  },
  {
    path: 'purchase-return',
    component: PurchaseReturnComponent,
  },
  {
    path: '',
    component: CompanyComponent,
  },
  {
    path: 'sales-receipts',
    component: SalesReceiptsComponent,
  },
  {
    path: 'grand-hyper',
    component: GrandHyperComponent,
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
  },
  {
    path: 'payroll',
    component: PayrollComponent,
  },
  {
    path: 'journal-entry',
    component: JournalEntryComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'supplier-statement',
    component: SupplierStatementComponent,
  },
  {
    path: 'ledger-statement',
    component: LedgerStatementComponent,
  },
  {
    path: 'ledger-journal',
    component: LedgerJournalComponent,
  },
  {
    path: 'ledger-masterdata',
    component: LedgerMasterdataComponent,
  },
  {
    path: 'ledger-balance',
    component: LedgerBalanceComponent,
  },
  {
    path: 'job-statement',
    component: JobStatementComponent,
  },
  {
    path: 'job-master',
    component: JobMasterComponent,
  },


  {
    path: 'supplier-outstand',
    component: SupplierOutstandComponent,
  },
  {
    path: 'supplier-invoice',
    component: SupplierInvoiceComponent,
  },
  {
    path: 'supplier-invo-receipt',
    component: SupplierInvoReceiptComponent,
  },
  {
    path: 'supplier-master-data',
    component: SupplierMasterDataComponent,
  },
  {
    path: 'payment-history',
    component: PaymentHistoryComponent,
  },
  {
    path: 'item-statement',
    component: ItemStatementComponent,
  },
  {
    path: 'stock-adjustment',
    component: StockAdjustmentComponent,
  },
  {
    path: 'stock-balance',
    component: StockBalanceComponent,
  },
  {
    path: 'stock-master-data',
    component: StockMasterDataComponent,
  },
  {
    path: 'trial-balance',
    component: TrialBalanceComponent,
  },

  {
    path: 'post-dated-cheques',
    component: PostDatedChequesComponent,
  },
  {
    path: 'all-journal-entry',
    component: AllJournalEntryComponent,
  },
  {
    path: 'profit-loss',
    component: ProfitLossComponent,
  },
  {
    path: 'balance-sheet',
    component: BalanceSheetComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  // {
  //   path: 'customer-edit',
  //   component: CustomerEditComponent,
  // },
  {
    path: 'employee/:id/edit',
    component: EmployeeEditComponent,
  },
  {
    path: 'item-edit',
    component: ItemEditComponent,
  },
  {

      path: 'supplier/:id/edit',


    component: SupplierEditComponent,
  },
  {
    path: 'cash-purchase-edit',
    component: CashPurchaseEditComponent,
  },
  {
    path: 'cash-sale-edit',
    component: CashSaleEditComponent,
  },
  {
    path: 'credit-purchase-edit',
    component: CreditPurchaseEditComponent,
  },
  {
    path: 'credit-sale-edit',
    component: CreditSaleEditComponent,
  },
  {
    path: 'purchase-receipt-edit',
    component: PurchaseReceiptEditComponent,
  },
  {
    path: 'purchase-return-edit',
    component: PurchaseReturnEditComponent,
  },
  {
    path: 'receipt-edit',
    component: ReceiptEditComponent,
  },
  {
    path: 'sale-return-edit',
    component: SaleReturnEditComponent,
  },
  {
    path: 'financial',
    component: FinancialComponent,
  },
];
export class AppModule { }
