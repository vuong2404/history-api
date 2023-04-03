import { Module } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Module({})
export class HistoryModule {
    @ApiProperty({ example: '2023-4-4', description: 'The date user running' })
    date: string;

    @ApiProperty({ example: 4.5, description: 'Number of km user ran'})
    distance: number;
}
