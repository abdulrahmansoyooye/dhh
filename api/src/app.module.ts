import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import {ConfigModule, ConfigService} from "@nestjs/config"
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './health.module.js';
import {validate} from './Env.validation.js'
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true,validate}),
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService)=>({
        type:'postgres',
        host:config.getOrThrow<string>("DB_HOST"),
        port:config.getOrThrow<number>("DB_PORT"),
        username:config.getOrThrow<string>("DB_USER"),
        password:config.getOrThrow<string>("DB_PASSWORD"),
        database:config.getOrThrow<string>("DB_NAME"),
        autoLoadEntities:true,
        synchronize:false
      })
    }),
    HealthModule
  ],
  
})
export class AppModule {}
