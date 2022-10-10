"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapModule = void 0;
const typeorm_1 = require("typeorm");
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_2 = require("@nestjs/typeorm");
let BootstrapModule = class BootstrapModule {
};
BootstrapModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                sortSchema: true,
                autoSchemaFile: true,
            }),
            typeorm_2.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'mongodb',
                    url: 'mongodb://localhost:27027/api',
                    entities: [__dirname + '/../**/*.entity.{js,ts}'],
                    synchronize: true,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }),
                dataSourceFactory: async (options) => {
                    const dataSource = await new typeorm_1.DataSource(options).initialize();
                    return dataSource;
                },
            }),
        ],
    })
], BootstrapModule);
exports.BootstrapModule = BootstrapModule;
//# sourceMappingURL=bootstrap.module.js.map