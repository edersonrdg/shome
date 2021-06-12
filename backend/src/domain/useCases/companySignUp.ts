export type CompanySignUpParams = {
  owner_company_name: string
  owner_company_cpf: number
  owner_company_role: string
  company_cnpj: number
  company_name: string
  company_area: string
  phonenumber: number
  email: string
}

export interface CompanySignUp {
  execute: (data: CompanySignUpParams) => Promise<void>
}
