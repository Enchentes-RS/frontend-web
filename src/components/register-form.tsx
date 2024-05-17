import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Checkbox } from './ui/checkbox'
import { RadioGroup } from './ui/radio-group'
import { Spinner } from './ui/spinner'
import { Textarea } from './ui/textarea'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { registerFormSchema } from '@/schemas/register-form'
import type { RegisterFormValues } from '@/types/register-form'

export const RegisterForm = () => {
  const { toast } = useToast()

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      cep: '',
      cnpj: '',
      acceptPets: false,
      contactPerson: '',
      additionalNotes: '',
    },
  })

  function onSubmit(values: RegisterFormValues) {
    // eslint-disable-next-line no-console
    console.log(values)
    toast({
      title: 'Local cadastrado com sucesso',
      description: 'Obrigado por cadastrar o local',
      hasIcon: true,
    })
    form.reset()
  }

  const hasErrors = Object.keys(form.formState.errors).length > 0
  const isSubmitting = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Form.Field
          control={form.control}
          name="name"
          render={({ field }) => (
            <Form.Item>
              <Form.Label isRequired>Nome do local</Form.Label>
              <Form.Control>
                <Input placeholder="Digite o nome do local" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="cep"
          render={({ field }) => (
            <Form.Item>
              <Form.Label isRequired>CEP</Form.Label>
              <Form.Control>
                <Input placeholder="00000-000" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="cnpj"
          render={({ field }) => (
            <Form.Item>
              <Form.Label isRequired>CNPJ</Form.Label>
              <Form.Control>
                <Input placeholder="00.000.000/0000-00" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="type"
          render={({ field }) => (
            <Form.Item className="space-y-3">
              <Form.Label isRequired>Tipo de local</Form.Label>
              <Form.Control>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <Form.Item className="flex items-center space-x-3 space-y-0">
                    <Form.Control>
                      <RadioGroup.Item value="collection" />
                    </Form.Control>
                    <Form.Label className="font-normal">
                      Coleta de doações
                    </Form.Label>
                  </Form.Item>
                  <Form.Item className="flex items-center space-x-3 space-y-0">
                    <Form.Control>
                      <RadioGroup.Item value="shelter" />
                    </Form.Control>
                    <Form.Label className="font-normal">
                      Abrigo para voluntários
                    </Form.Label>
                  </Form.Item>
                </RadioGroup>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="acceptPets"
          render={({ field }) => (
            <Form.Item className="flex items-center space-x-3 space-y-0">
              <Form.Control>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </Form.Control>
              <Form.Label isRequired>Aceita pets</Form.Label>
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="contactPerson"
          render={({ field }) => (
            <Form.Item>
              <Form.Label isRequired>Contato do responsável</Form.Label>
              <Form.Control>
                <Input placeholder="Digite o telefone ou WhatsApp" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="additionalNotes"
          render={({ field }) => (
            <Form.Item>
              <Form.Label isRequired>Observações Adicionais</Form.Label>
              <Form.Control>
                <Textarea
                  placeholder="Descreva alguma informação adicional"
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button
          disabled={hasErrors}
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-900 sm:w-60"
        >
          {hasErrors ? (
            'Corrija os erros'
          ) : isSubmitting ? (
            <Spinner className="size-4 text-white" />
          ) : (
            'Enviar'
          )}
        </Button>
      </form>
    </Form>
  )
}
