"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'sql',
    connector: 'mysql',
    url: '',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'toor',
    database: 'parkndrive'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let SqlDataSource = class SqlDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
SqlDataSource.dataSourceName = 'sql';
SqlDataSource.defaultConfig = config;
SqlDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.sql', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], SqlDataSource);
exports.SqlDataSource = SqlDataSource;
//# sourceMappingURL=sql.datasource.js.map