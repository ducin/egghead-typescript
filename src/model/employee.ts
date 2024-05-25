import { Money } from "../value-object";
import { Nationality } from "./shared";

export type ContractType = "contract" | "permanent";

let m: Money = Money.from(99.99, "USD");
declare let n: number;

m = n;
n = m;

let yetAnotherMoney = m.add(m);
let sub = m - m;
let yetOneMoreMoney = m.multiply(10);
let sqrt = Math.sqrt(m);
let n2 = 5;

export type Email = Brand<string, "EMAIL">;
export type DateString = Brand<string, "DATE_STRING">;
declare let email: Email;
declare let dateString: DateString;

email = dateString;
dateString = email;

function isEmail(arg: string): arg is Email {
  return /super complex email regex/.test(arg);
}

let emailCandidate = "tomasz@ducin.dev";
if (isEmail(emailCandidate)) {
  emailCandidate;
}

/**
 * Represents an `Employee`'s skill.
 *
 * Use `Skill` instead of `string`.
 */
export type Skill = string;

export type Employee = {
  guid: string;
  nationality: Nationality;
  departmentId: number;
  keycardId: string;
  account: string;
  salary: Money;
  office: [string, string];
  firstName: string;
  lastName: string;
  title: string;
  contractType: ContractType;
  email: string;
  hiredAt: string;
  expiresAt: string;
  personalInfo: {
    age: number;
    phone: string;
    email: string;
    dateOfBirth: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  };
  skills: Skill[];
  bio: string;
  imgURL: string;
};
