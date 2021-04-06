/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Type<T> {
    new(...args: any[]): T;
}