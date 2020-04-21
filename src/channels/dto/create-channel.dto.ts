import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType } from 'type-graphql';

@InputType()
export default class CreateChannelDto {
  @Field()
  @ApiProperty({ description: 'Channel name' })
  name: string;
  @ApiProperty({ description: 'Channel creator' })
  userId: string;
  @ApiProperty({ description: 'Contact name' })
  contactId: number;
}
