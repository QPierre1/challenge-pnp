"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseDriverController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HouseDriverController = class HouseDriverController {
    constructor(houseRepository) {
        this.houseRepository = houseRepository;
    }
    async find(id, filter) {
        return this.houseRepository.owners(id).find(filter);
    }
    async create(id, driver) {
        return this.houseRepository.owners(id).create(driver);
    }
    async patch(id, driver, where) {
        return this.houseRepository.owners(id).patch(driver, where);
    }
    async delete(id, where) {
        return this.houseRepository.owners(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/houses/{id}/drivers', {
        responses: {
            '200': {
                description: 'Array of House has many Driver',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Driver) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HouseDriverController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/houses/{id}/drivers', {
        responses: {
            '200': {
                description: 'House model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Driver) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Driver, {
                    title: 'NewDriverInHouse',
                    exclude: ['id'],
                    optional: ['houseId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HouseDriverController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/houses/{id}/drivers', {
        responses: {
            '200': {
                description: 'House.Driver PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Driver, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Driver))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HouseDriverController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/houses/{id}/drivers', {
        responses: {
            '200': {
                description: 'House.Driver DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Driver))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HouseDriverController.prototype, "delete", null);
HouseDriverController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.HouseRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HouseRepository])
], HouseDriverController);
exports.HouseDriverController = HouseDriverController;
//# sourceMappingURL=house-driver.controller.js.map