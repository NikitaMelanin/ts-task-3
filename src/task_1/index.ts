/* eslint-disable @typescript-eslint/no-unsafe-call */
/** Задача 1 - Сущность любой монетки
 * Опишите класс валюты
 * Он должен определять имя(name) валюты, String
 * Содержать количество(value) валюты, Number
 * Содержать количественный тип(unit), в котором исчисляется валюта, String
 * Класс должен предоставлять информацию о типе валюты: Материальная, криптовалюта или металл-депозит
 * Example new Currency("DOGE", 12.5, "satoshi")
 */

export class Currency{
   private _name: string;
   private _value: number;
   private _currencyType: CurrencyType;
   private _unit: string
    type: any;

   get name() {
      return this._name;
    }
  
    get value() {
      return this._value;
    }
    set value(newValue: number) {
      this._value = newValue;
    }
    get unit() {
      return this._unit;
    }
  
    get currencyType() {
      return this._currencyType;
    }

   constructor(name: keyof typeof CurrencyType, value: number, unit: string) {
      if (!name || value < 0 || value === undefined || !unit) {
        throw new Error("Invalid arguments");
      }
      this._name = name;
      this._value = value;
      this._unit = unit;
      this._currencyType = CurrencyType[name];
    }
}

export enum CurrencyType {
   "Ruble" = "Material",
   "XRP" = "Crypto",
   "Etherium" = "Crypto",
   "Gold" = "Metal",
   "ru" = "Material",
   "alpha" = "Crypto",
   "Dollar" = "Material",
   
}
