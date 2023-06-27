import { ProviderDto } from "./Provider.interface"; 

export interface  asignProviderToInvoice {
    providerId: number;
    providerName?: string;
    hourlyRate?: number
    hours: number;
}

export interface  InvoiceProviderDto extends ProviderDto {
    hours?: number;
    amount?: number;
}