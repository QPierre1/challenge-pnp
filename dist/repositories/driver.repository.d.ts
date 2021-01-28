import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Driver, DriverRelations, House } from '../models';
import { SqlDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { HouseRepository } from './house.repository';
export declare class DriverRepository extends DefaultCrudRepository<Driver, typeof Driver.prototype.id, DriverRelations> {
    protected houseRepositoryGetter: Getter<HouseRepository>;
    readonly habitation: BelongsToAccessor<House, typeof Driver.prototype.id>;
    constructor(dataSource: SqlDataSource, houseRepositoryGetter: Getter<HouseRepository>);
}
