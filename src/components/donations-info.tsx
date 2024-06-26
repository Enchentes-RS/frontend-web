import { Accordion } from '@/components/accordion'
import { DonationInstruction } from '@/components/donation-instruction'

const DonationsInfo = () => {
  return (
    <section>
      <h2 className="mb-2 text-3xl font-bold">Doações por PIX</h2>
      <p className="mb-6 text-lg text-gray-500">
        Lista de instituições confiáveis
      </p>

      <Accordion
        accordionItems={[
          {
            summary: 'Iniciativa do Governo do Rio Grande do Sul',
            content: (
              <div className="space-y-6">
                <DonationInstruction
                  pixKeyValue="92.958.800/0001-38"
                  pixKeyType="CNPJ"
                />

                <p>Eis as informações da chave Pix oficial do governo do RS:</p>
                <ul className="list-inside list-disc">
                  <li>destinatário: SOS Rio Grande do Sul</li>
                  <li>
                    instituição: Banrisul (Banco do Estado do Rio Grande do Sul)
                    “Se não aparecer isso na hora da doação é porque é golpe”,
                    declarou Eduardo Leite. Segundo ele, essa é uma conta segura
                    para doações, administrada pelo Estado com o acompanhamento
                    de entidades.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            summary: 'A Maior Campanha Solidária do RS',
            content: (
              <div className="space-y-6">
                <DonationInstruction
                  pixKeyValue="enchentes@vakinha.com.br"
                  pixKeyType="Email"
                />

                <p>
                  O Instituto Vakinha, o Pretinho Básico e o Badin Colono se
                  juntaram para criar a maior campanha solidária do Rio Grande
                  do Sul.
                </p>
                <ul className="list-inside list-disc">
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
              </div>
            ),
          },
        ]}
      />
    </section>
  )
}

export { DonationsInfo }
