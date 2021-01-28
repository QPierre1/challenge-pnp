import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  House,
  Driver,
} from '../models';
import {HouseRepository} from '../repositories';

export class HouseDriverController {
  constructor(
    @repository(HouseRepository) protected houseRepository: HouseRepository,
  ) { }

  @get('/houses/{id}/drivers', {
    responses: {
      '200': {
        description: 'Array of House has many Driver',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Driver)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Driver>,
  ): Promise<Driver[]> {
    return this.houseRepository.owners(id).find(filter);
  }

  @post('/houses/{id}/drivers', {
    responses: {
      '200': {
        description: 'House model instance',
        content: {'application/json': {schema: getModelSchemaRef(Driver)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof House.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Driver, {
            title: 'NewDriverInHouse',
            exclude: ['id'],
            optional: ['houseId']
          }),
        },
      },
    }) driver: Omit<Driver, 'id'>,
  ): Promise<Driver> {
    return this.houseRepository.owners(id).create(driver);
  }

  @patch('/houses/{id}/drivers', {
    responses: {
      '200': {
        description: 'House.Driver PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Driver, {partial: true}),
        },
      },
    })
    driver: Partial<Driver>,
    @param.query.object('where', getWhereSchemaFor(Driver)) where?: Where<Driver>,
  ): Promise<Count> {
    return this.houseRepository.owners(id).patch(driver, where);
  }

  @del('/houses/{id}/drivers', {
    responses: {
      '200': {
        description: 'House.Driver DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Driver)) where?: Where<Driver>,
  ): Promise<Count> {
    return this.houseRepository.owners(id).delete(where);
  }
}
