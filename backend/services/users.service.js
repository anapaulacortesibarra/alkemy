const boom = require("@hapi/boom");

const { models } = require("../libs/sequelize");

class UsersService {
    constructor() {
    }

    async create(data) {
        const user = await models.User.create(data);
        return user;        
    }

    async find() {
        const result = await models.User.findAll();
        return result;
    }

    async findOne(id) {
        const user = await models.User.findByPk(id);
        if (!user) {
            throw boom.notFound("User not found");
        }
        return user;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const updatedUser = await user.update(changes);
        return updatedUser;
    }

    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy();
    }
}

module.exports = UsersService;
