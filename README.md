# Plataforma-ProcessApp

#### Introdução
A Plataforma-ProcessApp representa a camada de negócio de um sistema sendo executado na plataforma.
Foi criado esse projeto para simular uma camada de negócio de um sistema qualquer, que envia o evento de comando de solicitações 
de execução de negócio e envia eventos de saída da execução.

Neste caso, estamos simulando a funcionalidades de cadastro de cliente, criação de conta e transferência de saldo entre contas.

#### Estrutura do Projeto

O projeto é dividido em 3 partes:
* [cliente-process-app]: contém a estrutra para executar as regras de negócio de cadastro de cliente.
* [conta-process-app]: contém a estrutra para executar as regras de negócio de cadastro de conta.
* [transferencia-process-app]: contém a estrutra para executar as regras de negócio da operação de transferência de valores entre contas. 

A estrutura do projeto deve conter:
    - mapa: informações de mapa para obter e enviar dados para o domínio.
    - metadados: informações de configuração de eventos em relação as operações.
    - process: arquivo com a lógica para execução.

OBS: Por enquanto não estão sendo usados os mapas da pasta ´mapa´, pois estão já do domínio, e os ´metadados´ está sendo feita carga direta
na base.

#### Requisitos

Para executar as aplicações com sucesso você precisa instalar as seguintes ferramentas:
* [NodeJS](https://nodejs.org)
* NPM (vem junto com o NodeJS)


### Para instalar ou atualizar as dependências é necessário executar o comando:
npm install

