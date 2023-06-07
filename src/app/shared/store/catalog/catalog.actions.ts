import { Action } from "@ngrx/store";
import { Catalog } from "@app/shared/store/catalog/catalog.models";

export enum Types {
  READ = "[Catalog] Read: Start",
  READ_SUCCESS = "[Catalog] Read: Success",
  READ_FAIL = "[Catalog] Read: Fail",
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor() {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public catalog: Catalog) {}
}

export class ReadFail implements Action {
  readonly type = Types.READ_FAIL;
  constructor(public error: string) {}
}

export type All = Read | ReadSuccess | ReadFail;
