Feature: Listar filmes em cartaz
    AS A funcionário do cinema
    I WANT TO listar os filmes em cartaz, usando o método Carrossel
    SO THAT os clientes possam visualizar as informações de cada um dos filmes em cartaz

Scenario: Visualização dos filmes em cartaz
GIVEN "Duna" e "Venom: Tempo de Carnificina" estão cadastrados no sistema
AND "Duna" e "Venom: Tempo de Carnificina" são filmes em cartaz
AND a cliente "Ana Catarina" esta cadastrado e logado no sistema
AND a cliente "Ana Catarina" esta na tela de "filmes"
AND todas as informações do "Duna" são mostradas na tela
WHEN a cliente navega pela tela por meio da interface
THEN todas as informações do "Venom: Tempo de Carnificina" são mostradas na tela
AND a cliente continua na tela de "filmes"

Scenario: Filme sem capacidade disponivel
GIVEN "Duna" e "Venom: Tempo de Carnificina" estão cadastrados no sistema
AND todas as sessões do Duna estão lotadas
AND "Venom: Tempo de Carnificina" é um filme em cartaz
AND a cliente "Ana Catarina" esta cadastrado e logado no sistema
WHEN a cliente "Ana Catarina" tenta acessar a tela de "filmes"
THEN o Duna não é mostrado como filme em cartaz
AND o Venom: Tempo de Carnificina é mostrado como filme em cartaz
AND a cliente continua na tela "filmes"

Scenario: Nenhum filme em Cartaz
GIVEN a cliente "Ana Catarina" esta cadastrado e logado no sistema
AND o sistema não tem nenhum filme em cartaz no momento
WHEN a cliente "Ana Catarina" acessa a tela de "filmes"
THEN uma mensagem de erro indicando que nao há filmes disponiveis sera mostrada
AND a cliente continua na tela "filmes"

Scenario: Ver todas as sessões de um filme
GIVEN "Duna" está cadastrado no sistema
AND "Duna" é um filme em cartaz
AND a cliente "Ana Catarina" esta cadastrado e logado no sistema
AND a cliente "Ana Catarina" esta na tela de "filmes"
AND todas as informações do "Duna" são mostradas na tela
WHEN a cliente "Ana Catarina" seleciona para ver as sessões do Duna
THEN a cliente vai para a tela de "sessões" do Duna
AND todas as informações sobre as sessões do Duna são mostradas

Scenario: Sessões lotadas do filme ocultas
GIVEN "Duna" está cadastrado no sistema
AND "Duna" é um filme em cartaz
AND a cliente "Ana Catarina" esta cadastrado e logado no sistema
AND a cliente "Ana Catarina" esta na tela de "filmes"
AND todas as informações do "Duna" são mostradas na tela
WHEN a cliente "Ana Catarina" seleciona para ver as sessões do Duna
THEN a cliente vai para a tela de "sessões" do Duna
AND todas as informações sobre as sessões do Duna são mostradas
AND as informações sobre a sessão das 14:00  na Sala 3 (3D e Dublado) é omitida 
 
Filme lotou enquanto estava na tela de filmes
GIVEN "Duna" está cadastrado no sistema
AND a cliente "Ana Catarina" esta cadastrado e logado no sistema
AND a cliente "Ana Catarina" esta na tela de "filmes"
AND todas as informações do "Duna" são mostradas na tela
AND "Duna" tem todas as suas sessões lotadas após a cliente estar na tela de filmes
WHEN a cliente "Ana Catarina" seleciona para ver as sessões do Duna
THEN uma mensagem de erro indicando que nao há sessoes disponiveis sera mostrada
AND a cliente "Ana Catarina" volta para a tela de filmes
AND o "Duna" não é mostrado como filme em cartaz

# EXEMPLOS PARA TESTE
#
# Filme 1
# Nome: Duna
# Classificação Etária: 14
# Categorias: Ficção Cientifica e Drama
# Tempo do Filme (em min e horas/min): 156min (2h36min)
# Atores Principais: Timothée Chalamet, Rebecca Ferguson, Oscar Isaac
# Prêmios Renomados Ganhos (e indicações): "-"
# Sinopse: 
# "Inspirado na série de livros de Frank Herbert, Duna se passa em um futuro longínquo. O Duque Leto Atreides administra o planeta desértico Arrakis, também conhecido como Duna, lugar de única fonte da substância rara chamada de "melange", usada para estender a vida humana, chegar a velocidade da luz e garantir poderes sobrehumanos. Para isso ele manda seu filho, Paul Atreides (Timothée Chalamet), um jovem brilhante e talentoso que nasceu para ter um grande destino além de sua imaginação, e seus servos e concubina Lady Jessica (Rebecca Fergunson), que também é uma Bene Gesserit. Eles vão para Duna, afim de garantir o futuro de sua família e seu povo. Porém, uma traição amarga pela posse da melange faz com que Paul e Jessica fujam para os Fremen, nativos do planeta que vivem nos cantos mais longes do deserto."
# Dublado ou Legendado: Dublado e Legendado
# Sala Comum e/ou 3D: Sala Comum e 3D
# Sessões: 
#     14:00, 3D e Dublado, Sala 3;
#     17:30, 3D e Legendado, Sala 3;
#     18:00, Dublado, Sala 5; 
#     22:00, Legendado, Sala 5;
#
# Filme 2
# Nome: Venom: Tempo de Carnificina
# Classificação Etária: 14
# Categorias: Ficção Cientifica e Ação
# Tempo do Filme (em min e horas/min): 95min (1h35min)
# Atores Principais: Tom Hardy, Woody Harrelson, Michelle Williams
# Prêmios Renomados Ganhos (e indicações): "-"
# Sinopse: 
# "O relacionamento entre Eddie e Venom (Tom Hardy) está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados. "
# Dublado ou Legendado: Legendado
# Sala Comum e/ou 3D: Sala Comum
# Sessões: 
#     08:00, Legendado, Sala 1;
#     16:00, Legendado, Sala 1;
#     22:30, Legendado, Sala 1;
#
# CLIENTE 1
# Nome: Ana Catarina
# CPF: 999.999.999-99
# Telefone: (99)99999-9999
# Email: email@gmail.com
# Endereço: Rua Generica, 123
# Senha: senha123