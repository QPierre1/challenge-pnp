import { TestTechniqueLb4Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: TestTechniqueLb4Application;
    client: Client;
}
