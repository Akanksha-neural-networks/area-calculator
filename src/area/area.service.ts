import { Injectable } from '@nestjs/common';

@Injectable()
export class AreaService {
  calculateSquareArea(side: number): number {
    return side * side;
  }
  calculateRectangleArea(length: number, breadth: number): number {
    return length * breadth;
  }
  calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
  }
}
