import { UsersService } from '../users.service';

// @Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // @Query(returns => User)
  // public async userById(@Args('id') id: number): Promise<User> {
  //   return this.usersService.findById(id);
  // }

  // @Query(returns => User)
  // public async userByName(@Args('name') name: string): Promise<User> {
  //   return this.usersService.findByName(name);
  // }

  // @Query(returns => [User])
  // public async Users(): Promise<User[]> {
  //   return this.usersService.findAll();
  // }

  // @Mutation(returns => User)
  // public async createUser(@Args('data') user: User): Promise<UserDto> {
  //   return this.usersService.create(user);
  // }
}
