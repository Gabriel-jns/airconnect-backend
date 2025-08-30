import { Test, TestingModule } from '@nestjs/testing';
import { AeropuertosService } from './aeropuertos.service';

describe('AeropuertosService', () => {
  let service: AeropuertosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AeropuertosService],
    }).compile();

    service = module.get<AeropuertosService>(AeropuertosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
