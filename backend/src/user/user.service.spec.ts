import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';

const users: CreateUserDTO[] = [
  {
    name: 'user 1',
    score: 0,
  },
  {
    name: 'project 2',
    score: 0,
  },
];

describe('UserService', () => {
  let service: UserService;
  const mockUserRepositoryService = {
    findAll: jest.fn().mockImplementation(() => Promise.resolve({ users })),
    create: jest.fn().mockImplementation((user) => {
      const newUsers = {
        id: 2,
        ...user,
      };
      users.push(newUsers);
      return Promise.resolve(newUsers);
    }),
    findOne: jest.fn().mockImplementation((name) => {
      const foundUser = users.find((user) => user.name === name);
      return Promise.resolve(foundUser);
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserRepositoryService)
      .compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user list', async () => {
    expect(await service.findAll()).toMatchObject({ users });
  });

  it('should create a user and return the user created', async () => {
    const newUser = {
      name: 'user2',
      score: 0,
    };
    expect(await service.create(newUser)).toMatchObject({
      id: expect.any(Number),
    });
  });

  it('should return an specific user', async () => {
    expect(await service.findOne('user 1')).toMatchObject({
      name: 'user 1',
      score: 0,
    });
  });
});
