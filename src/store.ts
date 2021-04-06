const store: Record<string, Store<unknown>> = {};

interface Store<T> {
    klass: T,
    name: string
}

export function addToStore<T>(klass: T, name: string): void {
    store[name] = { klass: klass, name: name } as Store<T>;
}

export const retrieveStore = (): Record<string, Store<unknown>> => store;
