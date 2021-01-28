import {Entity, model, property, hasMany} from '@loopback/repository';
import {Driver} from './driver.model';

@model()
export class House extends Entity {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
    required: true,
  })
  postalCode: number;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'number',
    required: true,
  })
  value: number;

  @hasMany(() => Driver)
  owners: Driver[];

  constructor(data?: Partial<House>) {
    super(data);
  }
}

export interface HouseRelations {
  // describe navigational properties here
}

export type HouseWithRelations = House & HouseRelations;
