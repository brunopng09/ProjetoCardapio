O que é?

Commits Semânticos são mensagens de commit padronizadas que descrevem de forma clara e concisa a natureza e o propósito das alterações feitas
 em um projeto de software. Eles seguem uma convenção específica, como a Conventional Commits, que torna o histórico de 
commits legível tanto para humanos quanto para máquinas.

A ideia é substituir mensagens vagas (como "atualização" ou "correção de bug") por descrições detalhadas e estruturadas, que indicam o 
tipo de mudança, o escopo (opcional) e uma descrição sucinta.


Estrutura,Exemplo,Significado



feat: adicionar autenticação por redes sociais,Uma nova funcionalidade foi introduzida (autenticação social).

feat(api): adicionar endpoint para criação de usuários,Uma nova funcionalidade foi introduzida na parte da API (criação de usuário).

fix: corrigir erro de validação do formulário de registro,Foi corrigido um bug na validação do formulário, outro exemplofix(login): resolver falha de autenticação ao usar email maiúsculo,Foi corrigido um bug específico no módulo de login.

docs: atualizar README com instruções de instalação,Mudança apenas na documentação do arquivo README.

refactor: simplificar lógica da função de cálculo,"Código reestruturado para ser mais limpo ou legível, sem mudar o comportamento."

test: adicionar testes unitários para o service de pedidos,Foram adicionados novos testes.

chore: criar um novo projeto, atualizar dependências no package.json,Tarefa de manutenção que não afeta o código do aplicativo.

style: ajustar indentação no arquivo main.css,Mudança apenas de estilo/formatação.