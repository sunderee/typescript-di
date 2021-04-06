# TypeScript DI

Simple TypeScript library showcasing dependency injection functionalities. Heavily inspired by [this project](https://github.com/nehalist/di-ts).

Idea is to archive something like this

```ts
@Injectable()
export class DatabaseProvider {}

@Injectable()
export class ApiProvider {}

@Injectable()
export class ParentProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider,
        private readonly apiProvider: ApiProvider
    ) {}
}

const parent = Injector.resolve<ParentProvider>(ParentProvider);
```