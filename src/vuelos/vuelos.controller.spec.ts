import { Test, TestingModule } from '@nestjs/testing';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';

describe('VuelosController', () => {
  let controller: VuelosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VuelosController],
      providers: [VuelosService],
    }).compile();

    controller = module.get<VuelosController>(VuelosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
