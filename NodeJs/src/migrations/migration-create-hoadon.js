'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HoaDons',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ngayLap: {
          type: Sequelize.DATE,
        },
        sdt: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        hoTen: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        tongTien: {
          type: Sequelize.BIGINT
        },
        soTienTraLai: {
          type: Sequelize.BIGINT
        },
        tienTraLai: {
          type: Sequelize.BIGINT
        },
        no: {
          type: Sequelize.BIGINT
        }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HoaDons');
  }
};