import { Bird } from 'src/birds/entities/bird.entity';
import { DataSource } from 'typeorm';
export declare const birdProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Bird>;
    inject: string[];
}[];
