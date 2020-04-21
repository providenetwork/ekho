import { ApiProperty } from '@nestjs/swagger';

export default class RawMessageDto {
  @ApiProperty({ description: 'Message Contents' })
  messageContents: string;

  @ApiProperty({ description: 'user identifier' })
  userId: string;

  @ApiProperty({ description: 'channel identifier' })
  channelId: number;
}
