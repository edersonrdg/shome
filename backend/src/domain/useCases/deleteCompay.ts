export interface DeleteCompany {
  execute: (companyId: string) => Promise<void>
}
