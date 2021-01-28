import { Entity } from '@loopback/repository';
import { Driver } from './driver.model';
export declare class House extends Entity {
    name?: string;
    id?: number;
    address: string;
    postalCode: number;
    city: string;
    country: string;
    value: number;
    owners: Driver[];
    constructor(data?: Partial<House>);
}
export interface HouseRelations {
}
export declare type HouseWithRelations = House & HouseRelations;
