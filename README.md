# react-library-example-code-splitting
Lib de exemplo para testar code splitting e React utilizando [RollUp](https://rollupjs.org/guide/en/) uma ferramenta simples e objetiva voltada para criação de bundles.

Neste projeto foi configurado o mínimo do RollUp focando em apenas organizar o code splitting e configurar o [Babel](https://babeljs.io/).

## Para utilizar...
- Baixe o repositório.
- Acesse o mesmo via terminal e execute `npm run build` para gerar o build dos componentes na pasta `/public`.
- Em outro projeto client com React instale localmente a esta biblioteca. `npm install <path do projeto react-library-example-code-splitting>`.

## O que deve acontecer ?

O seu projeto de _client_ deve importar esta lib no _node_modules_ e agora experimente usar um dos componentes disponíveis.

Exemplo:

```jsx
import React from 'react';

import ExampleButton from 'react-library-example-code-splitting/public/module/ExampleButton';
import ExampleLink from 'react-library-example-code-splitting/public/module/ExampleLink';

function Example() {
  return (
    <div>
      <ExampleButton />
      <ExampleLink />
    </div>
  );
}

export default Example;
```
