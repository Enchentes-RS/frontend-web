import { z } from 'zod'

const CEP_PATTERN = /^\d{5}-?\d{3}$/
const CNPJ_PATTERN = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/
const PHONE_PATTERN = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

export const registerFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Nome precisa ter no mínimo 2 caracteres',
  }),
  cep: z.string().regex(CEP_PATTERN, {
    message: 'CEP precisa ter o formato 99999-999',
  }),
  cnpj: z.string().regex(CNPJ_PATTERN, {
    message: 'CNPJ precisa ter o formato 99.999.999/9999-99',
  }),
  type: z.enum(['shelter', 'collection'], {
    required_error: 'Tipo de local é obrigatório',
  }),
  acceptPets: z.boolean(),
  contactPerson: z.string().regex(PHONE_PATTERN, {
    message: 'Telefone precisa ter o formato (99) 99999-9999',
  }),
  additionalNotes: z.string().optional(),
})
