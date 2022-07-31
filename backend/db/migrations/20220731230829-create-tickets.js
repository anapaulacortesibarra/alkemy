'use strict';
const { TicketSchema, TICKET_TABLE } = require('../models/ticket.model');


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TICKET_TABLE, TicketSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TICKET_TABLE);
  }
};
