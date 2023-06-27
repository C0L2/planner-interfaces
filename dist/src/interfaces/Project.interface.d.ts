export interface ProjectDto {
    project: {
        clientId: number;
        name: string;
        client: {
            id: number;
            name: string;
        };
        id: number;
    };
}
