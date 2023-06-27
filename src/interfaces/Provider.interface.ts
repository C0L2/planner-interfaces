export interface providerMinDto {
    hourlyRate: number,
    staffID: number,
    currencyId: number
  }

export interface ProviderDto {
  currencyId?: number;
  hourlyRate: number;
  providerId?: number;
  staffID?: number;
  staffName?: string;  
}

export interface iCreateProviderDto {
  currencyId: number;
  hourlyRate: number;
  staffID: number;  
}
