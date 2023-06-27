export interface AssignedProvidersDto {
    id: number;
    projectId: number;
    providerId: number;
    provider: {
        id: number;
        horlyRate: number;
        staffID: number;
        currencyId: number;
    };
}
