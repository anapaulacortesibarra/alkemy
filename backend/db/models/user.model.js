const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "user";

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
};

class User extends Model {
    static associate() {}

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: "User",
            timestamps: false,
        };
    }
}

module.exports = { USER_TABLE, UserSchema, User };
