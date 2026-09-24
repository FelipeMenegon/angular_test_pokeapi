<h1 align="center"> PokéAPI </h1>

Aplicação feita em **Angular 22** consumindo a [PokéAPI](https://pokeapi.co/). Projeto de estudo para praticar consumo de API, componentes, services, formulários e organização de uma aplicação Angular.

## Sobre

A aplicação permite pesquisar Pokémon e visualizar suas informações através da PokéAPI.

A lista de Pokémon é carregada da API e fica disponível no frontend para alimentar o campo de pesquisa. Conforme o usuário digita, o autocomplete filtra os resultados sem precisar fazer uma nova requisição para cada letra.

Também existe uma tela de carregamento para os momentos em que a aplicação está buscando dados da API.

A ideia principal do projeto foi entender melhor como o Angular trabalha com dados vindos de uma API e como separar a responsabilidade entre componentes e services.

## Preview

<img width="1917" height="907" alt="image" src="https://github.com/user-attachments/assets/34f85461-28ba-4450-99c9-facb95ab6c6c" />
<img width="1912" height="901" alt="image" src="https://github.com/user-attachments/assets/9be17fd2-d195-4fa8-85f6-069197264b95" />
<img width="1917" height="904" alt="image" src="https://github.com/user-attachments/assets/7582cffd-dbda-4535-b8a7-1047632cc546" />


## Funcionalidades

| Funcionalidade | Descrição |
| --- | --- |
| Busca de Pokémon | Pesquisa um Pokémon pelo nome |
| Autocomplete | Mostra sugestões enquanto o usuário digita |
| Busca local | O autocomplete filtra a lista já carregada sem fazer uma requisição a cada tecla |
| Seleção de sugestão | Clicar em um resultado preenche a busca e pesquisa o Pokémon |
| Cards | Exibe as informações dos Pokémon em cards |
| Nomes formatados | Nomes como `charizard-mega` são exibidos como `Charizard Mega` |
| Loading | Mostra um estado de carregamento enquanto os dados estão sendo buscados |
| Integração com API | Os dados são obtidos diretamente da PokéAPI |
| Tratamento de estado | O autocomplete é atualizado conforme o conteúdo do campo muda |

## Tecnologias

- **Angular 22** — componentes standalone e estrutura da aplicação
- **TypeScript** — tipagem e lógica dos componentes
- **SCSS** — estilização dos componentes
- **PokéAPI** — fonte dos dados dos Pokémon
- **HttpClient** — comunicação com a API
- **FormsModule** — controle do campo de pesquisa
- **RxJS** — observables utilizados no consumo da API
- **HTML** — estrutura dos componentes

## Estrutura

```text
src/
├── app/
│   ├── components/
│   │   ├── card/
│   │   │   ├── card.html
│   │   │   ├── card.scss
│   │   │   └── card.ts
│   │   │
│   │   ├── home/
│   │   │   ├── home.html
│   │   │   ├── home.scss
│   │   │   └── home.ts
│   │   │
│   │   ├── loading/
│   │   │
│   │   └── search/
│   │       ├── search.html
│   │       ├── search.scss
│   │       └── search.ts
│   │
│   ├── interceptors/
│   │   └── loading.interceptor.ts
│   │
│   ├── models/
│   │   └── cards.ts
│   │
│   ├── services/
│   │   ├── loading.service.ts
│   │   └── pokemon.service.ts
│   │
│   ├── app.config.ts
│   └── app.html
│
└── main.ts
```

## Aviso

Este é um projeto de estudo desenvolvido para praticar Angular,
TypeScript, consumo de APIs e desenvolvimento de interfaces.

O projeto não possui vínculo, patrocínio ou afiliação com Nintendo,
The Pokémon Company ou qualquer empresa relacionada à franquia Pokémon.

Os nomes, personagens e imagens utilizados pertencem aos respectivos
detentores de seus direitos.
