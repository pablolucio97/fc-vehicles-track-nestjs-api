import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { MapsModule } from 'src/maps/maps.module';

@Module({
  imports: [PrismaModule, MapsModule],
  controllers: [RoutesController],
  providers: [RoutesService],
})
export class RoutesModule {}
