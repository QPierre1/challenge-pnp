import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { House, HouseRelations, Driver } from '../models';
import { SqlDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { DriverRepository } from './driver.repository';
export declare class HouseRepository extends DefaultCrudRepository<House, typeof House.prototype.id, HouseRelations> {
    protected driverRepositoryGetter: Getter<DriverRepository>;
    readonly owners: HasManyRepositoryFactory<Driver, typeof House.prototype.id>;
    constructor(dataSource: SqlDataSource, driverRepositoryGetter: Getter<DriverRepository>);
}
