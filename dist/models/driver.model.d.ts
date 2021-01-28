import { Entity } from '@loopback/repository';
export declare class Driver extends Entity {
    id?: number;
    name: string;
    firstName: string;
    username: string;
    email: string;
    password: string;
    houseId: number;
    constructor(data?: Partial<Driver>);
}
export interface DriverRelations {
}
export declare type DriverWithRelations = Driver & DriverRelations;
