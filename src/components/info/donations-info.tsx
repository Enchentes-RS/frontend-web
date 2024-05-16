import { DonationInstruction } from './donation-instruction'

import { AccordionItemWrapper } from '@/components/accordion-item-wrapper'
import { Accordion } from '@/components/ui/accordion'

export const DonationsInfo = () => {
  return (
    <section>
      <h2 className="mb-2 text-3xl font-bold">Doações por PIX</h2>
      <p className="mb-6 text-lg text-grey-500">
        Lista de instituições confiáveis
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItemWrapper summary="Iniciativa do Governo do Rio Grande do Sul">
          <DonationInstruction keyValue="92.958.800/0001-38" keyType="CNPJ" />

          <p className="mb-6 ">
            Eis as informações da chave Pix oficial do governo do RS:
          </p>
          <ul className="mb-6 list-inside list-disc">
            <li>destinatário: SOS Rio Grande do Sul</li>
            <li>
              instituição: Banrisul (Banco do Estado do Rio Grande do Sul) “Se
              não aparecer isso na hora da doação é porque é golpe”, declarou
              Eduardo Leite. Segundo ele, essa é uma conta segura para doações,
              administrada pelo Estado com o acompanhamento de entidades.
            </li>
          </ul>
        </AccordionItemWrapper>

        <AccordionItemWrapper summary="A Maior Campanha Solidária do RS">
          <DonationInstruction
            keyValue="enchentes@vakinha.com.br"
            keyType="Email"
          />

          <p className="mb-6 ">
            O Instituto Vakinha, o Pretinho Básico e o Badin Colono se juntaram
            para criar a maior campanha solidária do Rio Grande do Sul.
          </p>
          <ul className="mb-6 list-inside list-disc">
            <li>destinatário: Vakinha</li>
            <li>
              Portal de Transparência das doações{' '}
              <a
                href="https://vakinha.org.br/sos-enchentes-2024"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                https://vakinha.org.br/sos-enchentes-2024
              </a>
            </li>
          </ul>
        </AccordionItemWrapper>
      </Accordion>
    </section>
  )
}