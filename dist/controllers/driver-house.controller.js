"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverHouseController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DriverHouseController = class DriverHouseController {
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    async getHouse(id) {
        return this.driverRepository.habitation(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/drivers/{id}/house', {
        responses: {
            '200': {
                description: 'House belonging to Driver',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.House) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverHouseController.prototype, "getHouse", null);
DriverHouseController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DriverRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DriverRepository])
], DriverHouseController);
exports.DriverHouseController = DriverHouseController;
//# sourceMappingURL=driver-house.controller.js.map