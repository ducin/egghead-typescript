import { Nationality } from "./shared";

export type Skill = string;

export type ContractType = "contract" | "permanent";

export type Employee = {
  id: number;
  nationality: Nationality;
  departmentId: number;
  keycardId: string;
  account: string;
  salary: number;
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
