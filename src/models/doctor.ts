import { SelectOptionType } from "@/types/select-option-type";

export type DoctorModel = {
  id: string;
  name: string;
  serviceType: string;
  serviceTypeName: string;
  image: string;
  rate: number;
  totalVotes: number;
  address: string;
  appointment: SelectOptionType;
  speciality: SelectOptionType;
  degree: SelectOptionType;
  description: string;
};
