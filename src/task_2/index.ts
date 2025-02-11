/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** Задача 2 - Много стран, много валют
 * Определите классы следующих валют
 * Dollar
 * Ruble
 * XRP
 * Etherium
 * Gold
*/
import { Currency } from "../task_1";

export class Dollar extends Currency {
  constructor(value: number) {
    super("Dollar", value, "usd");
  }
}

export class Etherium extends Currency {
  constructor(value: number) {
    super("Etherium", value, "eth");
  }
}

export class Gold extends Currency {
  constructor(value: number) {
    super("Gold", value, "gld");
  }
}

export class Ruble extends Currency {
  constructor(value: number) {
    super("Ruble", value, "rub");
  }
}

export class XRP extends Currency {
  constructor(value: number) {
    super("XRP", value, "xrp");
  }
}
