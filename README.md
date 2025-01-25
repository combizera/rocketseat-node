# Rocketseat Node

## Diferença de Aplicação Stateful x Stateless

### Aplicação Stateful

Uma aplicação stateful é aquela que mantém o estado entre as requisições. Isso significa que o servidor lembra das interações anteriores com o cliente. Exemplos comuns de aplicações stateful incluem sessões de usuário, onde o servidor armazena informações sobre o usuário entre diferentes requisições.

**Vantagens:**

- Pode fornecer uma experiência de usuário mais rica e personalizada.
- Facilita a implementação de funcionalidades complexas que dependem do histórico de interações.

**Desvantagens:**

- Escalabilidade pode ser mais difícil, pois o estado precisa ser gerenciado e sincronizado entre diferentes instâncias do servidor.
- Pode ser mais complexo de implementar e manter.

### Aplicação Stateless

Uma aplicação stateless, por outro lado, não mantém estado entre as requisições. Cada requisição é tratada de forma independente, sem qualquer conhecimento das requisições anteriores. A maioria das APIs RESTful são projetadas para serem stateless.

**Vantagens:**

- Escalabilidade mais fácil, pois qualquer instância do servidor pode tratar qualquer requisição sem a necessidade de sincronização de estado.
- Simplicidade na implementação e manutenção.

**Desvantagens:**

- Pode exigir que o cliente envie mais informações em cada requisição, já que o servidor não mantém estado.
- Pode ser menos eficiente em termos de desempenho para certas funcionalidades que dependem do estado.

Em resumo, a escolha entre stateful e stateless depende das necessidades específicas da aplicação e dos trade-offs que você está disposto a fazer em termos de escalabilidade, complexidade e experiência do usuário.

## Conceito de Streams no Node.js

**Streams** no Node.js permitem o processamento de dados de forma incremental e assíncrona, sem carregar tudo na memória. Isso é ideal para grandes arquivos ou fluxos contínuos de dados, como APIs e arquivos. Existem quatro tipos principais:

1. **Readable**: Fluxo de leitura (ex.: arquivos).
2. **Writable**: Fluxo de escrita (ex.: salvar dados).
3. **Duplex**: Combina leitura e escrita (ex.: sockets).
4. **Transform**: Modifica os dados enquanto passam pelo fluxo (ex.: compressão).

Essa eficiência foi uma das razões que fizeram o Node.js ganhar destaque.

---
