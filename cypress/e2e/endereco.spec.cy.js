/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Savio', 'Silva', 'Yahoo', 'Brasil', 'Faria Lima', '1500', 'São Paulo', 'São Paulo', '06220220', '11977556932', 'saviosilva@yahoo.com.br')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.' )
    });
    
    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () =>{
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email

        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.' )
    });
  


    

});