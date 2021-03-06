'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'produtos',
      [
        {
          id: '1',
          name: 'ORIGINAL',
          price: 12.00,
          description: 'Demos nosso toque extra a uma receita tradicional.',
          image: '/img/bancha.png',
          classes: 'rosa',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: '2',
          name: 'MORANGO COM GENGIBRE',
          price: 12.00,
          description:
            'O aroma doce e levemente ácido do morango combinado ao gengibre.',
          image: '/img/morango.png',
          classes: 'azul2',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: '3',
          name: 'JASMIM',
          price: 12.00,
          description:
            'O aroma do Jasmim em fusão com o ácido láctico carrega um sabor único.',
          image: '/img/jasmim.png',
          classes: 'verde',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: '4',
          name: 'GENGIBRE COM AÇAFRÃO',
          price: 12.00,
          description:
            'O gengibre oferece notas picantes que harmonizam muito bem com o açafrão.',
          image: '/img/gengibre-acafrao.png',
          classes: 'azul1',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: '5',
          name: 'FLORAL',
          price: 12.00,
          description:
            'Com um mix de flores bem trabalhado, buscamos um aroma floral-amadeirado.',
          image: '/img/floral.png',
          classes: 'laranja',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('produtos', null, {})
  }
}
