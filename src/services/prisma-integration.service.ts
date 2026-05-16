import { prisma } from "../lib/prisma";
import { ResponseInterface } from "../interfaces/response.interface";
import HttpClient from "../clients/http.client";

class PrismaIntegrationService {
    constructor(
        private readonly httpClient: HttpClient
    ) { }

    async checkCache(origin: string): Promise<ResponseInterface<string>> {
        return null;
    }
}

export default PrismaIntegrationService;