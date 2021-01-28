import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Driver, DriverRelations, House} from '../models';
import {SqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {HouseRepository} from './house.repository';

export class DriverRepository extends DefaultCrudRepository<
  Driver,
  typeof Driver.prototype.id,
  DriverRelations
> {

  public readonly habitation: BelongsToAccessor<House, typeof Driver.prototype.id>;

  constructor(
    @inject('datasources.sql') dataSource: SqlDataSource, @repository.getter('HouseRepository') protected houseRepositoryGetter: Getter<HouseRepository>,
  ) {
    super(Driver, dataSource);
    this.habitation = this.createBelongsToAccessorFor('habitation', houseRepositoryGetter,);
    this.registerInclusionResolver('habitation', this.habitation.inclusionResolver);
  }
}
