import { UserDto } from './../../dto/userDto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('param')
export class ParamController {
  // url param
  // 请求参数在url里面   /param/:id
  @Get('getId/:id')
  getUrlParam(@Param('id') id: string): void {
    console.log('url param id', id);
  }

  @Get('query')
  getQueryParam(@Query('id') id: number, @Query('name') name: string) {
    console.log('Query', id, name);
  }

  // form urlencoded 和 json 都是从 body 取值，Nest 内部会根据 content type 做区分，使用不同的解析方式。
  @Post('setUserInfo')
  setUserInfo(@Body() userDto: UserDto) {
    console.log('form urlencoded', userDto);
  }
}
