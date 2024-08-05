import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite', // Replace with your database path
    synchronize: false, // Set to true for development, but be careful in production
    entities: ["src/entities/pokemon/*.ts"],
    migrations: ["src/migrations/*.ts"],
});