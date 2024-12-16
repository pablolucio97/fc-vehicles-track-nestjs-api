import { Module } from '@nestjs/common';
import { RoutesDriverService } from 'prisma/routes/routes-driver/routes-driver.service';
import { MapsModule } from 'src/maps/maps.module';
import { RoutesDriverGateway } from './routes-driver/routes-driver.gateway';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  imports: [MapsModule],
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService, RoutesDriverGateway],
})
export class RoutesModule {}
