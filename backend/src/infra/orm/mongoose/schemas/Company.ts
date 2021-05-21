import mongoose from '../index';

const CompanySchema = new mongoose.Schema({
  owner_company_name: {
    type: String,
    required: [true, 'owner_company_name is required'],
  },
  owner_company_cpf: {
    type: Number,
    required: [true, 'owner_company_cpf is required'],
  },
  owner_company_role: {
    type: String,
    required: [true, 'owner_company_role is required'],
  },
  company_cnpj: {
    type: Number,
    required: [true, 'company_cnpj is required'],
  },
  company_name: {
    type: String,
    required: [true, 'company_name is required'],
  },
  company_area: {
    type: String,
    required: [true, 'company_area is required'],
  },
  phonenumber: {
    type: Number,
    required: [true, 'phonenumber is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
});

export default mongoose.model('Company', CompanySchema);
