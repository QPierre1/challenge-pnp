import { Count, Filter, Where } from '@loopback/repository';
import { House, Driver } from '../models';
import { HouseRepository } from '../repositories';
export declare class HouseDriverController {
    protected houseRepository: HouseRepository;
    constructor(houseRepository: HouseRepository);
    find(id: number, filter?: Filter<Driver>): Promise<Driver[]>;
    create(id: typeof House.prototype.id, driver: Omit<Driver, 'id'>): Promise<Driver>;
    patch(id: number, driver: Partial<Driver>, where?: Where<Driver>): Promise<Count>;
    delete(id: number, where?: Where<Driver>): Promise<Count>;
}
