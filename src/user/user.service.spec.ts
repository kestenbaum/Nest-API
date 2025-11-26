import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  const mock = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOneId: jest.fn(),
    findOneEmail: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, { provide: UserService, useValue: mock }],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('testing get user by id', async () => {
    mock.findOneId.mockResolvedValue('1');
    const result = await service.findOneId('1');
    expect(mock.findOneId).toHaveBeenCalledWith('1');
    expect(result).toEqual('1');
  });

  it('testing get user by email', async () => {
    mock.findOneEmail.mockResolvedValue('test@gmail.com');
    const result = await service.findOneEmail('test@gmail.com');
    expect(mock.findOneEmail).toHaveBeenCalledWith();
    expect(result).toEqual('test@gmail.com');
  });

  it('testing get all users', async () => {
    const data = [{ id: '1', name: 'test', email: 'test@gmail.com' }];
    mock.findAll.mockResolvedValue(data);

    const result = await service.findAll();
    expect(mock.findAll).toHaveBeenCalledWith();
    expect(result).toEqual(data);
  });

  it('testing created user', async () => {
    mock.create.mockResolvedValue({
      name: 'test',
      email: 'test@gmail.com',
    });
    const result = await service.create({
      name: 'test',
      email: 'test@gmail.com',
    });
    expect(mock.create).toHaveBeenCalledWith({
      name: 'test',
      email: 'test@gmail.com',
    });
    expect(result).toEqual({ name: 'test', email: 'test@gmail.com' });
  });

  it('testing update user', async () => {
    mock.update.mockResolvedValue(mock);
    const result = await service.update('1', {
      name: 'test',
      email: 'test@gmail.com',
    });
    expect(mock.update).toHaveBeenCalledWith('1', {
      name: 'test',
      email: 'test@gmail.com',
    });
    expect(result).toEqual(mock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
