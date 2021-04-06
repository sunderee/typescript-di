/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { Type } from './type';

export const Injector = new class {
    resolve<T>(target: Type<any>): T {
        const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
        const injections = tokens.map((token: any) => Injector.resolve<any>(token));
        return new target(...injections);
    }
};