import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import {HistoryModule as History} from './history.module';

let data = [
    {
        userId: "1",
        userName: "Nguyễn Văn A",
        history: [
            {
                date: "2023-04-01",
                distance: 4.5
            },
            {
                date: "2023-04-02",
                distance: 4.5
            },
            {
                date: "2023-04-03",
                distance: 4.1
            }
        ]
    },
    {
        userId: "2",
        userName: "Nguyễn Văn B",
        history: [
            {
                date: "2023-04-01",
                distance: 5.5
            },
            {
                date: "2023-04-02",
                distance: 7.5
            },
            {
                date: "2023-04-03",
                distance: 8.1
            }
        ]
    }
]
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
