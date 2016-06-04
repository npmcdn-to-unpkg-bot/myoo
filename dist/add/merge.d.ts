import { Observable } from '../core';
/**
 * Merges multiple streams together, emitting events from all of them
 * concurrently.
 *
 * Marble diagram:
 *
 * ```text
 * --1----2-----3--------4---
 * ----a-----b----c---d------
 *            merge
 * --1-a--2--b--3-c---d--4---
 * ```
 *
 * @param {Observable} stream1 A stream to merge together with other streams.
 * @param {Observable} stream2 A stream to merge together with other streams. One
 * or more streams may be given as arguments.
 * @return {Observable}
 */
export declare function merge<T, U>(...observables: Array<Observable<any>>): Observable<U>;
export interface MergeSignature<T> {
    <U>(...observables: Array<Observable<any>>): Observable<U>;
}
declare module '../core' {
    interface Observable<T> {
        merge: MergeSignature<T>;
    }
}
