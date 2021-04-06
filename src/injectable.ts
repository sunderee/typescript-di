import { GenericClassDecorator } from './class-decorator';
import { addToStore } from './store';
import { Type } from './type';

export const Injectable = (): GenericClassDecorator<Type<unknown>> => (target: Type<unknown>): void => addToStore(target, target.name);
