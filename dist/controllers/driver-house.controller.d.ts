import { Driver, House } from '../models';
import { DriverRepository } from '../repositories';
export declare class DriverHouseController {
    driverRepository: DriverRepository;
    constructor(driverRepository: DriverRepository);
    getHouse(id: typeof Driver.prototype.id): Promise<House>;
}
