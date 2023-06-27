// Back-end interfaces
export { iSubscribtion } from "./src/interfaces/iSubscribtion.interface";
export { iCreateUser } from "./src/interfaces/iCreateUser.interface";
export { iReturnUser } from "./src/interfaces/iReturnUser.interface";
export { iClient } from "./src/interfaces/iClient.interface";
export { iExpense } from "./src/interfaces/iExpense.interface";
export { iProviderInvoice } from "./src/interfaces/iProviderInvoice.interface";
export { iCreateInvoice } from "./src/interfaces/iCreateInvoice.interface";
export { iUpdateInvoice } from "./src/interfaces/iUpdateInvoice.interface";
export { iUpdateInvoiceprovider } from "./src/interfaces/iUpdateInvoiceprovider.interface";
export { iProjectProvider } from "./src/interfaces/iProjectProvider.interface";
export { iProject } from "./src/interfaces/iProject.interface";
export { iReturnProject } from "./src/interfaces/iReturnProject.interface";
export { iStaff } from "./src/interfaces/iStaff.interface";
export { iProvider } from "./src/interfaces/iProvider.interface";

// Front-end interfaces
export { AssignedProvidersDto } from "./src/interfaces/asignedProviders.interface";
export {
  asignProviderToInvoice,
  InvoiceProviderDto,
} from "./src/interfaces/asignProviderToInvoice.interface";
export { AuthentificationDto } from "./src/interfaces/Authentification.interface";
export { ClientDto } from "./src/interfaces/Client.interface";
export { CurrencyInterface } from "./src/interfaces/Currency.interface";
export { ExpensesGetLitInterface } from "./src/interfaces/Expenses.interface";
export {
  invoiceMinDto,
  SendDataAboutProviderToServer,
  CreateInvoiceDto,
  InvoiceDto,
} from "./src/interfaces/Invoice.interface";
export { PeriodDto } from "./src/interfaces/Period.interface";
export { ProjectDto } from "./src/interfaces/Project.interface";
export {
  providerMinDto,
  ProviderDto,
  iCreateProviderDto,
} from "./src/interfaces/Provider.interface";
export { StaffDto } from "./src/interfaces/StaffInterface.interface";
export { SubscribtionDto } from "./src/interfaces/Subscribtion.interface";
