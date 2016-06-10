import { Observable } from '../Observable';
export declare function map<T, U>(projection: (val: T) => U): Observable<U>;
export interface MapSignature<T> {
    <U>(project: (value: T) => U): Observable<U>;
}
declare module '../Observable' {
    interface Observable<T> {
        map: MapSignature<T>;
    }
}
