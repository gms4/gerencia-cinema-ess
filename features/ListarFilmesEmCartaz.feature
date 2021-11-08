Feature: Listar filmes em cartaz
    AS A funcionário do cinema
    I WANT TO listar os filmes em cartaz
    SO THAT os clientes possam visualizar as informações de cada um dos filmes em cartaz

Scenario: Visualização dos filmes em cartaz
GIVEN um filme foi cadastrado no sistema com o nome "Duna" e sua "classificação etária" foi cadastrada como "14 anos"
AND "categoria" foi cadastrada como "Ficção Cientifica e Drama" e "tempo do filme" foi cadastrado como "156min (2h36min)"
AND "atores principais" foi cadastrado como "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac" e "premios renomados" foi cadastrado como "-"
AND "sinopse" foi cadastrada como "Inspirado na série de livros de Frank Herbert, Duna se passa em um futuro longínquo. O Duque Leto Atreides administra o planeta desértico Arrakis, também conhecido como Duna, lugar de única fonte da substância rara chamada de "melange", usada para estender a vida humana, chegar a velocidade da luz e garantir poderes sobrehumanos. Para isso ele manda seu filho, Paul Atreides (Timothée Chalamet), um jovem brilhante e talentoso que nasceu para ter um grande destino além de sua imaginação, e seus servos e concubina Lady Jessica (Rebecca Fergunson), que também é uma Bene Gesserit. Eles vão para Duna, afim de garantir o futuro de sua família e seu povo. Porém, uma traição amarga pela posse da melange faz com que Paul e Jessica fujam para os Fremen, nativos do planeta que vivem nos cantos mais longes do deserto."
AND "sessões" foi cadastrada como "14:00, 3D e Dublado, Sala 3 / 17:30, 3D e Legendado, Sala 3 / 18:00, Dublado, Sala 5 / 22:00, Legendado, Sala 5"
AND outro filme foi cadastrado no sistema com o nome "Venom: Tempo de Carnificina" e sua "classificação etária" foi cadastrada como "14 anos" 
AND "categoria" foi cadastrada como "Ficção Cientifica e Ação" e "tempo do filme" foi cadastrado como "95min (1h35min)"
AND "atores principais" foi cadastrado como "Tom Hardy, Woody Harrelson, Michelle Williams" e "premios renomados ganhos" foi cadastrado como "-"
AND "sinopse" foi cadastrada como "O relacionamento entre Eddie e Venom (Tom Hardy) está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados."
AND "sessões" foi cadastrada como "08:00, Legendado, Sala 1; 16:00, Legendado, Sala 1; 22:30, Legendado, Sala 1;"
AND "Duna" e "Venom: Tempo de Carnificina" são filmes em cartaz
AND a cliente "Ana Catarina" esta cadastrada e logada no sistema
AND a cliente "Ana Catarina" esta na tela "filmes"
AND "classificação etária", "categoria", "tempo do filme", "atores principais", "premios renomados" e "sinopse" de "Duna" são mostrados na tela
WHEN a cliente navega para a esquerda ou para a direita na tela por meio da interface
THEN "classificação etária", "categoria", "tempo do filme", "atores principais", "premios renomados" e "sinopse" de "Venom: Tempo de Carnificina" são mostrados na tela
AND a cliente continua na tela "filmes"

Scenario: Filme sem capacidade disponivel
GIVEN "Duna" e "Venom: Tempo de Carnificina" estão cadastrados no sistema
AND todas as sessões de "Duna" estão lotadas
AND "Venom: Tempo de Carnificina" é um filme em cartaz
AND a cliente "Ana Catarina" esta cadastrada e logada no sistema
WHEN a cliente "Ana Catarina" tenta acessar a tela "filmes"
THEN "Duna" não é mostrado como filme em cartaz
AND "Venom: Tempo de Carnificina" é mostrado como filme em cartaz
AND a cliente continua na tela "filmes"

Scenario: Nenhum filme em Cartaz
GIVEN a cliente "Ana Catarina" esta cadastrada e logada no sistema
AND o sistema não tem nenhum filme em cartaz no momento
WHEN a cliente "Ana Catarina" acessa a tela "filmes"
THEN uma mensagem de erro indicando que não há filmes disponiveis será mostrada
AND a cliente continua na tela "filmes"

Scenario: Ver todas as sessões de um filme
GIVEN um filme foi cadastrado no sistema com o nome "Duna" e sua "classificação etária" foi cadastrada como "14 anos" 
AND "categoria" foi cadastrada como "Ficção Cientifica e Drama" e "tempo do filme" foi cadastrado como "156min (2h36min)"
AND "atores principais" foi cadastrado como "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac" e "premios renomados" foi cadastrado como "-"
AND "sinopse" foi cadastrada como "Inspirado na série de livros de Frank Herbert, Duna se passa em um futuro longínquo. O Duque Leto Atreides administra o planeta desértico Arrakis, também conhecido como Duna, lugar de única fonte da substância rara chamada de "melange", usada para estender a vida humana, chegar a velocidade da luz e garantir poderes sobrehumanos. Para isso ele manda seu filho, Paul Atreides (Timothée Chalamet), um jovem brilhante e talentoso que nasceu para ter um grande destino além de sua imaginação, e seus servos e concubina Lady Jessica (Rebecca Fergunson), que também é uma Bene Gesserit. Eles vão para Duna, afim de garantir o futuro de sua família e seu povo. Porém, uma traição amarga pela posse da melange faz com que Paul e Jessica fujam para os Fremen, nativos do planeta que vivem nos cantos mais longes do deserto."
AND "sessões" foi cadastrada como "14:00, 3D e Dublado, Sala 3 / 17:30, 3D e Legendado, Sala 3 / 18:00, Dublado, Sala 5 / 22:00, Legendado, Sala 5"
AND "Duna" é um filme em cartaz
AND a cliente "Ana Catarina" esta cadastrada e logada no sistema
AND a cliente "Ana Catarina" esta na tela "filmes"
AND "classificação etária", "categoria", "tempo do filme", "atores principais", "premios renomados" e "sinopse" de "Duna" são mostrados na tela
WHEN a cliente "Ana Catarina" seleciona para ver as sessões de "Duna"
THEN a cliente vai para a tela "sessões" de "Duna"
AND todas as sessões de "Duna" são mostradas na tela

Scenario: Sessões lotadas do filme ocultas
GIVEN um filme foi cadastrado no sistema com o nome "Duna" e sua "classificação etária" foi cadastrada como "14 anos" 
AND "categoria" foi cadastrada como "Ficção Cientifica e Drama" e "tempo do filme" foi cadastrado como "156min (2h36min)"
AND "atores principais" foi cadastrado como "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac" e "premios renomados" foi cadastrado como "-"
AND "sinopse" foi cadastrada como "Inspirado na série de livros de Frank Herbert, Duna se passa em um futuro longínquo. O Duque Leto Atreides administra o planeta desértico Arrakis, também conhecido como Duna, lugar de única fonte da substância rara chamada de "melange", usada para estender a vida humana, chegar a velocidade da luz e garantir poderes sobrehumanos. Para isso ele manda seu filho, Paul Atreides (Timothée Chalamet), um jovem brilhante e talentoso que nasceu para ter um grande destino além de sua imaginação, e seus servos e concubina Lady Jessica (Rebecca Fergunson), que também é uma Bene Gesserit. Eles vão para Duna, afim de garantir o futuro de sua família e seu povo. Porém, uma traição amarga pela posse da melange faz com que Paul e Jessica fujam para os Fremen, nativos do planeta que vivem nos cantos mais longes do deserto."
AND "sessões" foi cadastrada como "14:00, 3D e Dublado, Sala 3 / 17:30, 3D e Legendado, Sala 3"
AND "Duna" é um filme em cartaz
AND a sessão "14:00, 3D e Legendado, Sala 3" de "Duna" está disponivel
AND a sessão "17:30, 3D e Legendado, Sala 3" de "Duna" está lotada
AND a cliente "Ana Catarina" esta cadastrada e logada no sistema
AND a cliente "Ana Catarina" esta na tela "filmes" 
AND "classificação etária", "categoria", "tempo do filme", "atores principais", "premios renomados" e "sinopse" de "Duna" são mostrados na tela
WHEN a cliente "Ana Catarina" seleciona para ver as sessões de "Duna"
THEN a cliente vai para a tela "sessões" de "Duna"
AND as informações sobre a sessão das 14:00 na Sala 3 (3D e Dublado) é mostrada
AND as informações sobre a sessão das 17:30 na Sala 3 (3D e Legendado) é omitida 

Scenario: Filme lotou enquanto estava na tela de filmes
GIVEN "Duna" e "Venom: Tempo de Carnificina" estão cadastrados no sistema
AND a cliente "Ana Catarina" esta cadastrada e logada no sistema
AND a cliente "Ana Catarina" esta na tela "filmes"
AND o filme "Duna" é mostrado na tela
AND "Duna" tem todas as suas sessões lotadas após a cliente estar na tela filmes
WHEN a cliente "Ana Catarina" seleciona para ver as sessões de "Duna"
THEN uma mensagem de erro indicando que nao há sessões disponiveis será mostrada
AND a cliente volta para a tela "filmes"
AND "Duna" não é mostrado como filme em cartaz
AND "Venom: Tempo de Carnificina" é mostrado como filme em cartaz