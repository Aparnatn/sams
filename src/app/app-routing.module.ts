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
import { LoginComponent } from './login/login.component';
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
import { AuthGuard } from './auth/auth.guard';
import { ManualJournalComponent } from './manual-journal/manual-journal.component';

export const ROUTES: Routes = [
  {
    path: 'register',

    component: RegisterComponent, pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'ledger/:id/edit',
    component: LedgereditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'job/:id/edit',
    component: JobEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registration/:id/edit',
    component: CustomerEditComponent,
    canActivate: [AuthGuard]

  },

  {
    path: 'companylist',
    component: CompanylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'supplierbuttons',
    component: SupplierbuttonsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customerbuttons',
    component: CustomerbuttonsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ledgerbuttons',
    component: LedgerbuttonsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'itemjobbuttons',
    component: ItemjobbuttonsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'company/:id/edit',
    component: CompanyeditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'company/:id/delete',
    component: CompanydeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'userlist',
    component: UserlistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'charts',
    component: ChartsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ledgershow',
    component: LedgershowComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ledger/:id',
    component: LedgereditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer-outstanding',
    component: CustomerOutstandingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer-invoice',
    component: CustomerInvoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer-receipts',
    component: CustomerReceiptsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer-master',
    component: CustomerMasterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer-register',
    component: CustomerRegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manual-journal',
    component: ManualJournalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'item',
    component: ItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'job',
    component: JobComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'group',
    component: GroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ledger',
    component: LedgerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cash',
    component: CashComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'purchase-receipts',
    component: PurchaseReceiptsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credit-sales',
    component: CreditSalesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sales-return',
    component: SalesReturnComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cash-purchase',
    component: CashPurchaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credit-purchase',
    component: CreditPurchaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'purchase-return',
    component: PurchaseReturnComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: CompanyComponent,

  },
  {
    path: 'sales-receipts',
    component: SalesReceiptsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'grand-hyper',
    component: GrandHyperComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payroll',
    component: PayrollComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'journal-entry',
    component: JournalEntryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'supplier-statement',
    component: SupplierStatementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ledger-statement',
    component: LedgerStatementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ledger-journal',
    component: LedgerJournalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ledger-masterdata',
    component: LedgerMasterdataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ledger-balance',
    component: LedgerBalanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'job-statement',
    component: JobStatementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'job-master',
    component: JobMasterComponent,
    canActivate: [AuthGuard]
  },


  {
    path: 'supplier-outstand',
    component: SupplierOutstandComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'supplier-invoice',
    component: SupplierInvoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'supplier-invo-receipt',
    component: SupplierInvoReceiptComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'supplier-master-data',
    component: SupplierMasterDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-history',
    component: PaymentHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'item-statement',
    component: ItemStatementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stock-adjustment',
    component: StockAdjustmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stock-balance',
    component: StockBalanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stock-master-data',
    component: StockMasterDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'trial-balance',
    component: TrialBalanceComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'post-dated-cheques',
    component: PostDatedChequesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'all-journal-entry',
    component: AllJournalEntryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profit-loss',
    component: ProfitLossComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'balance-sheet',
    component: BalanceSheetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'customer-edit',
  //   component: CustomerEditComponent,
  // },
  {
    path: 'employee/:id/edit',
    component: EmployeeEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'item/:id/edit',
    component: ItemEditComponent,
    canActivate: [AuthGuard]
  },
  {

    path: 'supplier/:id/edit',


    component: SupplierEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cash-purchase-edit',
    component: CashPurchaseEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cash-sale-edit',
    component: CashSaleEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credit-purchase-edit',
    component: CreditPurchaseEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credit-sale-edit',
    component: CreditSaleEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'purchase-receipt-edit',
    component: PurchaseReceiptEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'purchase-return-edit',
    component: PurchaseReturnEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'receipt-edit',
    component: ReceiptEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sale-return-edit',
    component: SaleReturnEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'financial',
    component: FinancialComponent,
    canActivate: [AuthGuard]
  },
];
export class AppModule { }
