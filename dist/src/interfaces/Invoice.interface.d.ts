import { InvoiceProviderDto } from "./asignProviderToInvoice.interface";
export interface invoiceMinDto {
    id: number;
    periodId: number;
    clientId: number;
    currencyId: number;
    amount: number;
}
export interface SendDataAboutProviderToServer {
    providerId: number;
    hours: number;
}
export interface CreateInvoiceDto {
    periodId: number;
    clientId: number;
    currencyId: number;
    amount: number;
    providers: Array<InvoiceProviderDto>;
}
export interface InvoiceDto extends invoiceMinDto, CreateInvoiceDto {
}
