"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const driver_model_1 = require("./driver.model");
let House = class House extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], House.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "address", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], House.prototype, "postalCode", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "city", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "country", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], House.prototype, "value", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => driver_model_1.Driver),
    tslib_1.__metadata("design:type", Array)
], House.prototype, "owners", void 0);
House = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], House);
exports.House = House;
//# sourceMappingURL=house.model.js.map