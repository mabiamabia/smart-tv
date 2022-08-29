# smart-tv

Desafio para Smart Tvs Nativo

Crie uma aplicação utilizando CANVAS aplicando boas práticas de desenvolvimento, mantendo o seu código limpo e de fácil compreensão.

Requisitos
Mínimos:
⦁ Você tem até uma semana para envio da solução, a partir do recebimento deste desafio.
⦁ Navegação utilizando as setas do teclado.
⦁ Não é permitido o uso de biblioteca para desenvolvimento da navegação.
⦁ É permitido o uso de biblioteca para auxiliar no desenvolvimento da interface em canvas.
⦁ NÃO utilizar nenhuma lib. de gerenciamento de estado (Redux, Mobx, etc...).
⦁ Não possuir libs. desnecessárias, ou seja, saber plenamente o que está sendo utilizado.
⦁ A solução deve ser hospedada em um repositório privado (github ou gitlab, por exemplo).
⦁ Documentação (de como executar o projeto, testes, etc...).
Dica: documente tudo o que você acha importante.
⦁ O projeto deverá funcionar na seguinte resolução: 1280x720 (largura x altura).

Bônus:
⦁ Testes Unitários.
⦁ Funcionar também na resolução 1920x1080 (largura x altura).
⦁ Configurar Webpack para desenvolvimento e build de produção.
⦁ Desenvolver o projeto utilizando TypeScript.
⦁ Não possuir comentários no código (o seu código deverá ser auto explicativo).
⦁ Explicar o porquê da escolha da arquitetura implementada.
⦁ Commits pequenos e organizados.
⦁ Além do que foi pedido, adicionar uma feature (a sua escolha) que evolua o desafio.

O desafio:

Link para o exemplo em gif Animado

⦁ O desafio consiste no desenvolvimento de uma aplicação em que sua navegação funcione através das setas do teclado, conforme GIF, e a interface deverá ser feita obrigatoriamente utilizando HTML Canvas.
⦁ As informações da aplicação podem ser consumidas a partir do endpoint: https://run.mocky.io/v3/a4afe906-e1fe-4613-861e-5657c1eece67
⦁ Comportamento da navegação entre componentes:  
⦁ Botões (Assista, Minha Lista, Capítulos):  
⦁ Entre os botões o foco navega na horizontal (direita e esquerda).
⦁ Se for o botão mais à esquerda, ao navegar para esquerda, o foco deve ir para a Seta de Voltar.
⦁ Ao navegar para baixo o foco deve ir para o Painel de Detalhes.
⦁ Painel de Detalhes:  
⦁ Ao ganhar foco, as informações da série, exceto o título, devem ser ocultadas, e a imagem de fundo da série deve ter sua opacidade reduzida.
⦁ Ao navegar para esquerda, o foco deve ir para Seta de Voltar.
⦁ Seta de Voltar:  
⦁ Ao ganhar foco, a imagem de fundo da série deve ter sua opacidade reduzida.
⦁ Ao navegar para direita, o foco deverá ir para o último componente que veio (Botões ou Painel de Detalhes).

Obs: Ao finalizar o desafio, enviar o e-mail sinalizando a conclusão do desafio.



Caso tenha dúvidas, não hesite em questionar independente do horário e/ou dia, responderemos logo que possível.
