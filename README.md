# NovaBot Frontend

Requisitos minimos:
+ Angular 6
+ Node 10
+ NPM 5.6
+ Angular cli 6.0

Como utilizar:
+ Clonar o repositorio
+ Por linha de comando: `npm install`
+ Abrir na IDE favorita.

## Estrutura

Usaremos o padrao de estrutura do angular: https://angular.io/guide/styleguide

Alguns itens importantes:
+ Toda funcionalidade macro tem que ter seu proprio modulo, e será a raiz daquela funcionalidade.
+ Dentro da funcionalidade macro, deve ter outras pastas para separação das camadas (components, models e services).
+ Usar o angular cli para criar novos componentes, services e classes.
+ Os nomes deve seguir padrão CamelCase.
- Para classes, modulos ou blocos, começar com maiusculo.
- Para metodos, começar com minusculo.
- Para metodos privados, começar com underline.

A definição e limites da funcionalidade macro se deve pelo conhecimento do tamanho da implementação. Discuta antes de criar.

## Para criar novos componentes

Nossos componentes macros serão os modulos. Dentro dos modulos terão os seguintes diretorios:
+ components: os controladores, html e css da funcionalidade interna.
+ models: as classes de dominio.
+ services: os services com regras e acesso externos.

Faca por linha de comando: 
+ `ng generate module <path-module-app>`. Exemplo: ng generate module seguranca
+ `ng generate component <path-module-component>`. Exemplo: ng generate component seguranca/components/usuario-form
+ `ng generate service <path-module-service>`. Exemplo: ng generate service seguranca/services/usuario
+ `ng generate class <path-module-class>`. Exemplo: ng generate model seguranca/models/usuario

O path deve ser considerado a partir de `src/app`. Essa estrutura acima de exemplo ficará:

```
+ app/
++ seguranca/
-- seguranca.module.ts
+++ components/
++++ usuario-form/
----- usuario-form.component.ts
----- usuario-form.component.html
----- usuario-form.component.css
+++ models/
---- usuario.ts
+++ services/
---- usuario.service.ts
```

## Organização e práticas

+ Dentro dos controladores (componentes), deve ter somente regras de tela  (mudancas visuais).
+ Regras de negócio, se existir, deve ester dentro dos modelos.
+ Acesso externo HTTP e outros, devem estar nos Services. Não pode haver nenhum HTTP dentro dos controladores. Um controlador injeta um service para acessar HTTP.
+ Nunca um componente injeta outro componente. Caso queira usar um método de outro componente, crie um Service com este metodo e injete nos seus componentes. Services servem justamente para compartilhar regras.
+ Ao usar um componente dentro de outro, utilize passagem de parametros @Input/@Output ao inves de injetá-lo como @ViewChild.
+ Devemos fazer validações e restrições de telas. No entanto, o que vale são as validações e retornos so servidor. Nunca confie em validações somente em tela (pois o usuario certamente poderá burlar). Faça regras no Java, e se necessário, replique no projeto frontend.
+ Cuidado para não deixar nenhum `console.log`. Use para desenvolvimento, não nao comite.

## Executar em desenvolvimento

Em linha de comando, faça `ng serve` e acesse http://localhost:4200/.

## Criar deploy para outros ambientes

Em linha de comando, faça `ng build`. Os arquivos estão em `dist/`. Use `--prod` para deploy no ambiente produção.

## Executar teste end-to-end

Em linha de comando, faça `ng e2e` para exercutar o Protractor (http://www.protractortest.org/).

