import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

const users: CreateUserDTO[] = [
  {
    name: 'user 1',
    score: 0,
  },
  {
    name: 'user 2',
    score: 0,
  },
];

describe('UserController', () => {
  let controller: UserController;
  const mockUserService = {
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
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a user list', async () => {
    expect(await controller.findAll()).toMatchObject({ users });
  });

  it('should create a user and return the user created', async () => {
    const newUser = {
      name: 'user 3',
      score: 0,
    };
    expect(await controller.create(newUser)).toMatchObject({
      id: expect.any(Number),
    });
  });

  it('should return an specific user', async () => {
    expect(await controller.findOne('user 1')).toMatchObject({
      name: 'user 1',
      score: 0,
    });
  });
});
