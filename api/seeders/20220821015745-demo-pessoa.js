'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pessoas', [
      {
       nome: 'John Doe',
       ativo: true,
       email: 'john@hoja.com.br',
       role:'estudante',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        nome: 'Mary Doe',
        ativo: false,
        email: 'marn@hoja.com.br',
        role:'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Duda',
        ativo: true,
        email: 'duda@hoja.com.br',
        role:'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('pessoas', null, {});

  }
};
