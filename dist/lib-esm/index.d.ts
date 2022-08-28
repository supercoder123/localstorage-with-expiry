export default class {
    private storage?;
    private keyPrefix;
    constructor(storage?: any);
    setItem(key: string, value: any, expiry?: number): void;
    private getExpiryTimeStamp;
    getItem(key: string): any;
    list(): void;
    removeItem(key: string): any;
    clear(): void;
}
