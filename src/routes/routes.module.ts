import { Module } from '@nestjs/common';
import { RoutesDriverService } from 'prisma/routes/routes-driver/routes-driver.service';
import { MapsModule } from 'src/maps/maps.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  imports: [PrismaModule, MapsModule],
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService],
})
export class RoutesModule {}
