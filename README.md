## 🕹️ Jogo de Emojis: Detona Ralph
Este é meu primeiro jogo criado utilizando HTML, CSS e JavaScript! O jogo é baseado no conceito de "whack-a-mole", mas ao invés de topos de moinhos, os jogadores interagem com emojis.

## 🎮 Descrição do Jogo
O objetivo do jogo é acertar os emojis que aparecem em diferentes posições na tela antes que o tempo acabe. A cada acerto, o jogador ganha pontos, e o jogo vai ficando mais rápido à medida que o tempo passa.

## Funcionalidades:
Contagem Regressiva: O jogo começa com uma contagem regressiva de tempo, que vai diminuindo até que o tempo se esgote.
Pontos: O jogador acumula pontos toda vez que acerta um emoji.
Som: O jogo conta com efeitos sonoros para tornar a experiência mais imersiva.
Tela de Game Over: Quando o tempo acaba, uma tela de Game Over é exibida com a pontuação final do jogador.

## ⚙️ Como Funciona
1. Layout e Interatividade:
O jogo é composto por uma tela inicial com dois botões principais:

Iniciar Jogo: Inicia o jogo.
Sair: Leva o jogador de volta para a tela inicial.
Após iniciar o jogo, uma área é exibida com quadrados (representando as caixas de onde os emojis "surgem") e um cronômetro com o tempo restante.

A cada intervalo, um emoji é exibido em um dos quadrados de forma aleatória. O jogador deve clicar no emoji que aparecer para pontuar.

2. Tecnologias Usadas:
HTML: Estrutura básica do jogo.
CSS: Estilização da interface com animações de efeitos de shake e de fade-in para a mensagem do jogo.
JavaScript: Lógica do jogo, incluindo:
Contagem regressiva do tempo.
Exibição e ocultação de emojis em posições aleatórias.
Controle de pontos e efeitos sonoros.
3. Animações e Efeitos Visuais:
O jogo utiliza animações CSS para tornar a experiência mais divertida. Há uma animação de "shake" que faz o emoji se mover de um lado para o outro e uma animação de "fade-in" para mostrar a mensagem de "Game Over".

4. Sons:
O jogo conta com diferentes sons:

5. Som de fundo: Música suave que toca enquanto o jogo está rolando.
Som de hit: Efeito sonoro que é tocado toda vez que o jogador acerta um emoji.
Som de Game Over: Toca quando o tempo acaba, anunciando o fim do jogo.

6. Game Over e Pontuação Final:
Quando o tempo se esgota, o jogo mostra a tela de Game Over, exibindo a pontuação total do jogador. O jogador tem a opção de voltar ao início para jogar novamente.

## 🎧 Sons Utilizados
- Som de Fundo: fundo.mp3 - Música suave para a fase de jogo.
- Som de Acerto: hit.m4a - Efeito sonoro tocado sempre que o jogador clica no emoji correto.
- Som de Game Over: gameover.mp3 - Som tocado quando o tempo acaba.

## 🛠️ Funcionalidades Futuras
Ajuste de Dificuldade: Futuras versões podem incluir mais níveis com dificuldade crescente (ex: mais emojis, menos tempo).
Armazenamento de Pontuação: Implementação de sistema de pontuação para salvar o melhor resultado do jogador.
Animações Melhoradas: Mais animações e efeitos para tornar o jogo mais dinâmico.
## 🚀 Como Jogar
Iniciar o Jogo: Clique no botão "Start Game" para começar a jogar.
Acertar os Emojis: Clique no emoji que aparecer na tela. Cada acerto aumenta sua pontuação!
Game Over: Quando o tempo acabar, você verá sua pontuação final. Clique em "Voltar ao Início" para jogar novamente.
## 📦 Como Rodar o Jogo Localmente
Para rodar o jogo localmente no seu computador, siga os passos abaixo:

Clone o repositório:

git clone https://github.com/OtavioAdsBr/Games/tree/main/Detona%20ralph

- Navegue até o diretório do projeto:

cd detona-ralph

- Abra o arquivo index.html no seu navegador.

## Jogue e divirta-se! 🎉

## 🤝 Contribuições
Este é um projeto pessoal, mas você é bem-vindo para contribuir. Se você tiver sugestões ou melhorias para o código, sinta-se à vontade para enviar um Pull Request!
