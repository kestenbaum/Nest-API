import { Test, TestingModule } from '@nestjs/testing';
import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;

  const userTestDto = { id: '1', name: 'test', email: 'test@gmail.com' };
  const mockData = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteService, { provide: QuoteService, useValue: mockData }],
    }).compile();

    service = module.get<QuoteService>(QuoteService);
  });

  //GIVEN
  it('testing get user', async () => {
    mockData.findOne.mockResolvedValue('1');
    const result = await service.findOne('1');

    expect(mockData.findOne).toHaveBeenCalledWith('1');
    expect(result).toEqual(mockData);
  });

  it('testing get all users', async () => {
    const data = [userTestDto];
    mockData.findAll.mockResolvedValue(data);

    const result = await service.findAll();

    expect(mockData.findAll).toHaveBeenCalledWith();
    expect(result).toEqual(data);
  });

  //WHEN
  it('testing created user', async () => {
    mockData.create.mockResolvedValue(userTestDto);
    const result = await service.create(userTestDto);
    expect(mockData.create).toHaveBeenCalledWith(userTestDto);
    expect(result).toEqual(userTestDto);
  });

  //THEN
  it('testing update user', async () => {
    mockData.update.mockResolvedValue(mockData);
    const result = await service.update('1', userTestDto);
    expect(mockData.update).toHaveBeenCalledWith('1', userTestDto);
    expect(result).toEqual(mockData);
  });

  it('testing delete user', async () => {
    mockData.remove.mockResolvedValue(true);
    const result = await service.remove('1');
    expect(mockData.remove).toHaveBeenCalledWith('1');
    expect(result).toEqual(true);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
