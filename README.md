# Mapa Solidário

## Projeto frontend para o site

---

### Pré-requisitos

Para rodar este projeto, você precisa ter o `pnpm` instalado em sua máquina. O `pnpm` é um gerenciador de pacotes rápido, eficiente e determinístico para JavaScript.

Se você ainda não tem o `pnpm`, pode instalá-lo globalmente em sua máquina usando o seguinte comando no terminal:

```bash
npm install -g pnpm
```

Depois de instalar o `pnpm`, você pode instalar as dependências do projeto e iniciar o servidor de desenvolvimento com os seguintes comandos:

```bash
pnpm install
pnpm dev
```

> Por favor, certifique-se de ter o `pnpm` instalado antes de tentar rodar o projeto.

### Variáveis de ambiante

- `Variáveis de Ambiente`: Este projeto usa variáveis de ambiente para gerenciar configurações sensíveis. Para usar essas variáveis de ambiente, você deve criar uma cópia do arquivo `.env.example` e renomeá-lo para `.env.local`. No terminal, você pode fazer isso com o seguinte comando:

```bash
cp .env.example .env.local
```

### Scripts

- `dev`: Este script inicia o servidor de desenvolvimento Vite. O Vite oferece recarga rápida de módulos e outras características que facilitam o desenvolvimento.

- `build`: Este script primeiro executa o TypeScript Compiler (`tsc`) para verificar se há erros de tipo no código e, em seguida, constrói a aplicação para produção usando o Vite.

- `lint`: Este script executa o ESLint, uma ferramenta para identificar e relatar padrões encontrados no código ECMAScript/JavaScript, com o objetivo de tornar o código mais consistente e evitar bugs. Você pode executar o ESLint com a opção `--fix`, que tenta corrigir automaticamente qualquer problema de formatação que possa ser corrigido.

- `preview`: Este script inicia o servidor de visualização Vite, que permite visualizar a versão de produção do aplicativo.

- `prepare`: Este script é usado para configurar o Husky, uma ferramenta que facilita a execução de scripts antes de commits ou pushes (por exemplo, para garantir que o código seja formatado corretamente ou que todos os testes passem antes de fazer um commit).

- `generate`: Este script executa o comando `shadcn-ui@latest add`, que adiciona novos componentes ao projeto. Ele faz isso através da CLI do Shadcn UI.

Lembre-se de que todos esses scripts podem ser executados no terminal com o comando `pnpm <nome-do-script>` (por exemplo, `pnpm dev` para iniciar o servidor de desenvolvimento).
