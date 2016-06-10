import { Observable } from '../Observable';
/**
 * Flattens an "observable of observables", handling only one nested stream at a time.
 *
 * Marble diagram:
 *
 * ```text
 * --+--------+---------------
 *   \        \
 *    \       ----1----2---3--
 *    --a--b----c----d--------
 *           switchMap
 * -----a--b------1----2---3--
 * ```
 *
 * @param projection Function that creates an observable for each value it gets as an input.
 * @return {Observable}
 */
export declare function switchMap<T, U>(projection: (val: T) => Observable<U>): Observable<U>;