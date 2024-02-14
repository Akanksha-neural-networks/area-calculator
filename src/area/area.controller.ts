import { Controller , Get, Param} from '@nestjs/common';
import { AreaService } from './area.service';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}
  //GET Square Area 
  @Get('square-area/:side')
  getSquareArea(@Param('side') side: number): string {
    const area = this.areaService.calculateSquareArea(side);
    return `The area of square is ${area}`;
  }
  //GET Rectangle Area 
  @Get('rectangle-area/:length/:breadth')
  getRectangleArea(
    @Param('length') length: number,
    @Param('breadth') breadth: number,
  ): string {
    const area = this.areaService.calculateRectangleArea(length, breadth);
    return `The area of rectangle is ${area}`;
  }
  //GET Triangle Area 
  @Get('triangle-area/:base/:height') 
  getTriangleArea(
    @Param('base') base: number,
    @Param('height') height: number,
  ): string {
    const area = this.areaService.calculateTriangleArea(base, height);
    return `The area of triangle is ${area}`;
  }
}
