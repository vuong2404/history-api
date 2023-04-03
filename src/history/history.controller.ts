import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { data } from 'src/data/historyData';
import {HistoryModule as History} from './history.module';

@Controller('history')
export class HistoryController {
    private history = data;

    @Get()
    getAll() {
        return this.history;
    }

    @Post(':id')
    add(@Param('id') id: String, @Body() body: History) {
        for (let i = 0; i < this.history.length; i++) {
            if (this.history[i].userId === id) {
                if (body.date && body.distance) {
                    this.history[i].history.push(body);
                }
                break;
            }
        }
        return body;
    }

    @Put(':id')
    updateDistance(@Param('id') id: String, @Body() body: History) {
        const {date, distance} = body
        for (let i = 0; i < this.history.length; i++) {
            if (this.history[i].userId === id) {
                if (data && distance) {
                    this.history[i] = {
                         ...this.history[i], 
                         history: this.history[i].history.map(item => item.date === date
                                     ? { ...item, distance: item.distance + distance } 
                                     : item) }
                }
                break;
            }
        }
        return body;
    }
}
