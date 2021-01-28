"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let HouseRepository = class HouseRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, driverRepositoryGetter) {
        super(models_1.House, dataSource);
        this.driverRepositoryGetter = driverRepositoryGetter;
        this.owners = this.createHasManyRepositoryFactoryFor('owners', driverRepositoryGetter);
        this.registerInclusionResolver('owners', this.owners.inclusionResolver);
    }
};
HouseRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.sql')), tslib_1.__param(1, repository_1.repository.getter('DriverRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.SqlDataSource, Function])
], HouseRepository);
exports.HouseRepository = HouseRepository;
//# sourceMappingURL=house.repository.js.map