import { Controller, Get, Req, Res, Next } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { join } from 'path';
import { existsSync } from 'fs';

@Controller()
export class AppController {
  @Get('*')
  serveSPA(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    const path = req.path;
    
    // Let API routes pass through
    if (path.startsWith('/contact')) {
      return next();
    }
    
    // Let static assets pass through
    if (path.startsWith('/assets/') || path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf)$/)) {
      return next();
    }
    
    // For all other routes, serve index.html (SPA fallback)
    const indexPath = join(__dirname, '..', 'client', 'dist', 'index.html');
    if (existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('Not found');
    }
  }
}
