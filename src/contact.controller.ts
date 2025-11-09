import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { ContactDto } from './contact.dto';

@Controller('contact')
export class ContactController {
  @Get()
  getContactInfo() {
    return {
      message: 'Contact API Endpoint',
      methods: {
        POST: 'Submit a contact form',
      },
      usage: 'Send POST request with { name, email, phone, propertyType, message }',
      status: 'active'
    };
  }

  @Post()
  @HttpCode(200)
  async create(@Body() body: ContactDto){
    // In a real app you'd enqueue an email or persist the lead.
    console.log('Contact request received:', body);
    return { ok: true };
  }
}
