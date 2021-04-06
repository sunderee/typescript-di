import { Injectable, Injector, retrieveStore } from '../src';

@Injectable()
export class DatabaseProvider {
    create(data: Record<string, unknown>): void {
        console.log(`Writing data ${data}`);
    }
}

@Injectable()
export class ApiProvider {
    request(url: string): void {
        console.log(`Request to URL ${url}`);
    }
}

@Injectable()
export class ParentProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider,
        private readonly apiProvider: ApiProvider
    ) { }

    operation(data: Record<string, unknown>, url: string): void {
        this.databaseProvider.create(data);
        this.apiProvider.request(url);
        console.log('Operation completed');
    }
}

const parent = Injector.resolve<ParentProvider>(ParentProvider);
parent.operation(
    {
        url: 'www.google.com',
        reason: 'searched for something'
    },
    'www.google.com'
);
Object.entries(retrieveStore()).forEach((entry) => console.log(entry));