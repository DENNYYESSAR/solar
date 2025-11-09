import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('*')
  serveSPA(@Res() res: Response) {
    // Serve index.html for all routes (SPA fallback)
    res.sendFile(join(__dirname, '..', 'client', 'dist', 'index.html'));
  }
}
