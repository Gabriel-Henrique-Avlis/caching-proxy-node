class CacheService {
    private cache: Map<string, any> = new Map<string, any>();

    constructor() { }

    getResponse<T>(key: string): T | null {
        return this.cache.get(key) || null;
    }

    setResponse<T>(key: string, value: T): void {
        this.cache.set(key, value);
    }

    clearCache(): void {
        this.cache.clear();
    }

}

module.exports = new CacheService();