# TypeScript DI

Simple TypeScript library showcasing dependency injection functionalities.

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