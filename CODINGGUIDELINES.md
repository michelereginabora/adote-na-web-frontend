# Guia de Estilo 

## Estrutura de Pastas
<<<<<<< HEAD

=======
 
>>>>>>> 21e86f3dd08408404c38952cd91ed32daea04142
A estrutura de pastas segue a Clean Architecture, separando a aplicação em camadas distintas:

- **`domain/`**: Contém as regras de negócio centrais da aplicação.
- **`data/`**: Implementa os repositórios e fontes de dados.
- **`presentation/`**: Contém os componentes e páginas React.
- **`infrastructure/`**: Implementações concretas de APIs e armazenamento.
- **`main/`**: Configuração e factories para a aplicação.

</br>

### *Exemplos usando a entidade Animal*

## Domain

### Entidades

**`entities/Animal.ts`**

- **Objetivo:** Define a estrutura de dados para um animal disponível para adoção.
- **Boas Práticas:**
  - Defina claramente todos os atributos e métodos necessários para a lógica de negócios.
  - Evite lógica de negócios complexa dentro das entidades; mantenha-as como simples objetos de dados.

### Casos de Uso

**`usecases/GetAnimalsUseCase.ts`**

- **Objetivo:** Encapsula a lógica de negócios para obter a lista de animais.
- **Boas Práticas:**
  - Utilize interfaces (abstrações) para interagir com repositórios e outras dependências.
  - Mantenha a lógica de negócios separada das preocupações da infraestrutura e da apresentação.

### Repositórios

**`repositories/AnimalRepository.ts`**

- **Objetivo:** Define o contrato para um repositório de animais.
- **Boas Práticas:**
  - Defina métodos claros e coesos que atendam às necessidades dos casos de uso.
  - Evite implementar lógica de acesso a dados aqui; a implementação concreta estará em `data/`.

## Data

### Implementação de Repositórios

**`repositories/AnimalRepositoryImpl.ts`**

- **Objetivo:** Implementa o contrato definido em `AnimalRepository.ts` usando uma fonte de dados concreta.
- **Boas Práticas:**
  - Implemente métodos para acessar dados reais e traduzir as respostas da fonte de dados para o formato esperado pelas entidades.
  - Mantenha a lógica de transformação de dados separada da lógica de acesso.

### Fontes de Dados

**`datasources/AnimalDataSource.ts`**

- **Objetivo:** Define o contrato para a fonte de dados de animais.
- **Boas Práticas:**
  - Mantenha a interface o mais simples possível, apenas com métodos necessários para acessar os dados.
  - Permita a substituição da fonte de dados sem alterar a lógica de negócios.

## Presentation

### Páginas e Componentes

**`pages/AdoptionPage.tsx`**

- **Objetivo:** Página React que exibe a lista de animais para adoção.
- **Boas Práticas:**
  - Utilize o caso de uso (`GetAnimalsUseCase`) para obter dados e atualizar o estado do componente.
  - Mantenha a lógica de apresentação separada da lógica de negócios.

## Infrastructure

### API

**`api/AnimalApi.ts`**

- **Objetivo:** Implementação concreta do `AnimalDataSource` para interagir com uma API real.
- **Boas Práticas:**
  - Implemente métodos para fazer chamadas HTTP e processar respostas.
  - Mantenha o código o mais genérico possível para facilitar mudanças na API.

## Main

### Factories

**`factories/UseCaseFactory.ts`**

- **Objetivo:** Cria instâncias dos casos de uso, conectando todas as dependências necessárias.
- **Boas Práticas:**
  - Centralize a criação de objetos complexos e suas dependências.
  - Facilite a substituição de implementações e a configuração dos casos de uso.

</br>

## Principais Conceitos

### Inversão de Dependência

- **Objetivo:** As camadas internas (domain) não devem depender das camadas externas. 
- **Prática:** Os casos de uso dependem de interfaces (abstrações), não de implementações concretas.

### Separação de Responsabilidades

- **Objetivo:** Cada classe e camada deve ter uma responsabilidade bem definida.
- **Prática:** Repositórios coordenam o acesso a dados, enquanto APIs fazem comunicação com serviços externos.

### Abstração

- **Objetivo:** Definir contratos que permitem o uso de diferentes implementações sem afetar o restante do sistema.
- **Prática:** Use interfaces para definir contratos, como `AnimalRepository` e `AnimalDataSource`.

### Casos de Uso

- **Objetivo:** Encapsular a lógica de negócios em unidades que são independentes da UI e da infraestrutura.
- **Prática:** Mantenha a lógica de negócios separada da lógica de apresentação e infraestrutura.

## Boas Práticas de Codificação

- **Consistência:** Mantenha a consistência com o estilo e as convenções existentes no projeto.
- **Testes:** Escreva testes para garantir que suas alterações não introduzam novos problemas e para validar a lógica de negócios.
- **Documentação:** Atualize a documentação sempre que alterar a funcionalidade ou a configuração do sistema.
