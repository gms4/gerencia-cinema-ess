Feature: Comprar Ingressos

    AS A cliente
    I WANT TO visualizar sessões e cadeiras disponíveis
    SO THAT I possa comprar ingressos para a sessão que quero

Scenario: Cliente não cadastrado tenta comprar ingresso
GIVEN a cliente "Ana Catarina" está na tela "filmes"
AND ela seleciona o filme "Duna"
AND o filme tem "10" lugares disponíveis  
AND a cliente "Ana Catarina" tenta comprar "2" ingressos para o filme "Duna"
WHEN ela confirma a compra
THEN a compra não é efetuada com sucesso
AND a mensagem "Compra negada, login não efetuado." aparecerá na tela
AND a cliente "Ana Catarina" irá para a tela "login"

Scenario: Cliente cadastrado compra ingresso
GIVEN a cliente "Ana Catarina" está na tela "filmes"
AND ela seleciona o filme "Duna"
AND o filme tem "10" lugares disponíveis  
AND a cliente "Ana Catarina" tenta comprar "2" ingressos para o filme "Duna"
WHEN ela confirma a compra
THEN a compra é efetuada com sucesso
AND a mensagem "Compra aprovada, bom filme!" aparecerá na tela
AND a cliente "Ana Catarina" voltará para a tela "filmes"

Scenario: Cliente cadastrado confirma compra sem ingressos
GIVEN a cliente "Ana Catarina" está na tela "filmes"
AND ela seleciona o filme "Duna"
AND o filme tem "10" lugares disponíveis  
AND a cliente "Ana Catarina" tenta comprar "0" ingressos para o filme "Duna"
WHEN ela confirma a compra
THEN a compra não é efetuada com sucesso
AND a mensagem "Compra negada, ingressos inválidos" aparecerá na tela
AND a cliente "Ana Catarina" voltará para a tela "filmes"

Scenario: Cliente cadastrado não seleciona os lugares
GIVEN a cliente "Livia" está na tela "filmes"
AND ela seleciona o filme "Duna"
AND o filme tem "10" lugares disponíveis  
AND a cliente "Livia" tenta comprar "2" ingressos para o filme "Duna"
WHEN ela confirma a compra
THEN a compra não é efetuada com sucesso
AND a mensagem "Selecione os lugares" aparecerá na tela
AND a cliente "Livia" voltará para a tela "escolha de assentos"