import { ResponseInterface } from "../interfaces/response.interface";
import HttpClient from "../clients/http.client";

class ProxyService {
    private httpClient: HttpClient = new HttpClient();
    private cache: CacheService = require("./cache.service");

    constructor() { }

    async checkCache(origin: string): Promise<ResponseInterface<string> | void> {
        const cachedResponse = this.cache.getResponse<ResponseInterface<string>>(origin);
        if (cachedResponse) {
            console.log("Cache hit for:", origin);
            return cachedResponse;
        } else {
            const response = await this.httpClient.get<any>(origin)
            this.cache.setResponse<ResponseInterface<string>>(origin, {
                headers: response.headers,
                body: response.body
            });
            return response;
        }
    }
}

module.exports = new ProxyService();