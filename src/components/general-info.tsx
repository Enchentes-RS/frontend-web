import { Accordion } from '@/components/accordion'

const GeneralInfo = () => {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-bold">Informações</h1>
      <p className="mb-6 text-lg text-gray-500">
        Lista de informações importantes
      </p>

      <Accordion
        accordionItems={[
          {
            summary: 'Como pedir resgate',
            content: (
              <div className="space-y-6">
                <p>
                  Os principais contatos são da Brigada Militar, Corpo de
                  Bombeiros e Defesa Civil Estadual:
                </p>
                <ul className="list-inside list-disc">
                  <li>Brigada Militar: 190</li>
                  <li>Corpo de Bombeiros: 193</li>
                  <li>Defesa Civil estadual: 199</li>
                  <li>
                    Telefones de emergência da Brigada Militar e dos Bombeiros
                    nos municípios atingidos
                  </li>
                </ul>
                <p>
                  A orientação da Defesa Cívil é de que ao entrar em contato é
                  preciso informar a localização (com as coordenadas
                  geográficas, se possivel), o número de pessoas e o tipo de
                  resgate (por água ou ar).
                </p>
              </div>
            ),
          },
          {
            summary: 'Ajuda médica',
            content: (
              <div className="space-y-6">
                <p>
                  Pessoas prejudicadas pela enchente que precisam de atendimento
                  de saúde agora têm a opção de consultas on-line. Em parceria
                  com a Prefeitura de Porto Alegre, o Grupo DOC disponibiliza
                  consultas virtuais gratuitas para toda a população atingida
                  pelas cheias. Para realizar uma consulta, acesse o link{' '}
                  <a
                    href="https://linktr.ee/grupodoc.med"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linktr.ee/grupodoc.med
                  </a>{' '}
                  ou o perfil do Instagram{' '}
                  <a
                    href="https://www.instagram.com/grupodoc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @grupodoc
                  </a>
                  , clicando em “faça sua consulta gratuita”.
                </p>
              </div>
            ),
          },
          {
            summary: 'Telefones emergenciais',
            content: (
              <div className="space-y-6">
                <ul className="list-inside list-disc">
                  <li>Brigada Militar: 190</li>
                  <li>Corpo de Bombeiros: 193</li>
                  <li>Defesa Civil estadual: 199</li>
                  <li>
                    Telefones de emergência da Brigada Militar e dos Bombeiros
                    nos municípios atingidos
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

export { GeneralInfo }
