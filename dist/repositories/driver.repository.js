"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let DriverRepository = class DriverRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, houseRepositoryGetter) {
        super(models_1.Driver, dataSource);
        this.houseRepositoryGetter = houseRepositoryGetter;
        this.habitation = this.createBelongsToAccessorFor('habitation', houseRepositoryGetter);
        this.registerInclusionResolver('habitation', this.habitation.inclusionResolver);
    }
};
DriverRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.sql')), tslib_1.__param(1, repository_1.repository.getter('HouseRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.SqlDataSource, Function])
], DriverRepository);
exports.DriverRepository = DriverRepository;
//# sourceMappingURL=driver.repository.js.map