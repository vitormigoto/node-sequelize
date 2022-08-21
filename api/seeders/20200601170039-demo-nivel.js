module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('niveis', [
			{
				descr_nivel: 'basico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descr_nivel: 'intermediario',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descr_nivel: 'avancado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Niveis', null, {})
  }
}
