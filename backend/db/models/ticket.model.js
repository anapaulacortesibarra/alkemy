const { Model, DataTypes, Sequelize } = require("sequelize");

const TICKET_TABLE = "ticket";

const TicketSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    user: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    concept: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW,
    },
    type: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    category: {
        allowNull: true,
        type: DataTypes.STRING,
    },
};

class Ticket extends Model {
    static associate() {}

    static config(sequelize) {
        return {
            sequelize,
            tableName: TICKET_TABLE,
            modelName: "Ticket",
            timestamps: false,
        };
    }
}

module.exports = { TICKET_TABLE, TicketSchema, Ticket };