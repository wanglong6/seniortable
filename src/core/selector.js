import { CellRange } from './cell_range';

// 选中器类（类值对象）
export default class Selector {
  constructor() {
    this.range = new CellRange(0, 0, 0, 0);
    this.ri = 0;
    this.ci = 0;
  }

  multiple() {
    return this.range.multiple();
  }

  setIndexes(ri, ci) {
    this.ri = ri;
    this.ci = ci;
  }

  size() {
    return this.range.size();
  }
}
