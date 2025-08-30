import { Test, TestingModule } from '@nestjs/testing';
import { AeropuertosController } from './aeropuertos.controller';
import { AeropuertosService } from './aeropuertos.service';

describe('AeropuertosController', () => {
  let controller: AeropuertosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AeropuertosController],
      providers: [AeropuertosService],
    }).compile();

    controller = module.get<AeropuertosController>(AeropuertosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
