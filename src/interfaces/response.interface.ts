export interface ResponseInterface<T> {
    headers: Record<string, string>;
    body: T;
}