"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const house_model_1 = require("./house.model");
let Driver = class Driver extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Driver.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Driver.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Driver.prototype, "firstName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Driver.prototype, "username", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Driver.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Driver.prototype, "password", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => house_model_1.House, { name: 'habitation' }),
    tslib_1.__metadata("design:type", Number)
], Driver.prototype, "houseId", void 0);
Driver = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Driver);
exports.Driver = Driver;
//# sourceMappingURL=driver.model.js.map