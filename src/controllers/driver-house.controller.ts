import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Driver,
  House,
} from '../models';
import {DriverRepository} from '../repositories';

export class DriverHouseController {
  constructor(
    @repository(DriverRepository)
    public driverRepository: DriverRepository,
  ) { }

  @get('/drivers/{id}/house', {
    responses: {
      '200': {
        description: 'House belonging to Driver',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(House)},
          },
        },
      },
    },
  })
  async getHouse(
    @param.path.number('id') id: typeof Driver.prototype.id,
  ): Promise<House> {
    return this.driverRepository.habitation(id);
  }
}
