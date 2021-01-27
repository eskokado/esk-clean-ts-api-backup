import { AccountModel } from './../../../domain/models/account'

export interface HashComparer {
  compare: (password: string, hashPassword: string) => Promise<AccountModel>
}
