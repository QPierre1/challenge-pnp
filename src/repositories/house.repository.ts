import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {House, HouseRelations, Driver} from '../models';
import {SqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {DriverRepository} from './driver.repository';

export class HouseRepository extends DefaultCrudRepository<
  House,
  typeof House.prototype.id,
  HouseRelations
> {

  public readonly owners: HasManyRepositoryFactory<Driver, typeof House.prototype.id>;

  constructor(
    @inject('datasources.sql') dataSource: SqlDataSource, @repository.getter('DriverRepository') protected driverRepositoryGetter: Getter<DriverRepository>,
  ) {
    super(House, dataSource);
    this.owners = this.createHasManyRepositoryFactoryFor('owners', driverRepositoryGetter,);
    this.registerInclusionResolver('owners', this.owners.inclusionResolver);
  }
}
