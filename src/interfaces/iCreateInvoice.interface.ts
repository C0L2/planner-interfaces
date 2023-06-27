import { iProviderInvoice } from "./iProviderInvoice.interface";

export interface iCreateInvoice {
    periodId: number,
    clientId: number,
    currencyId: number,
    providers: iProviderInvoice[]
}