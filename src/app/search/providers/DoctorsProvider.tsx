"use client";

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import { DoctorModel } from "@/models/doctor";
import { doctors } from "@/assests/doctors";
import { FiltersType } from "@/types/filters-type";
import { SORT_OPTIONS } from "@/options/sort-options";
import { SelectOptionType } from "@/types/select-option-type";

type ContextType = {
  sortedDoctors: DoctorModel[];
  sortBy: SelectOptionType;
  setSortBy: Dispatch<SetStateAction<SelectOptionType>>;
};

export const DoctorsContext = createContext<ContextType>({
  sortedDoctors: [],
  sortBy: SORT_OPTIONS[0],
  setSortBy: () => {},
});

type Props = PropsWithChildren;

function DoctorsProvider({ children }: Props) {
  const { filters } = useContext(FiltersContext);
  const [sortBy, setSortBy] = useState<SelectOptionType>(SORT_OPTIONS[0]);

  const doesInclude = useCallback(
    (filterName: keyof FiltersType, doctor: DoctorModel): boolean => {
      return doctor[filterName] === filters[filterName];
    },
    [filters],
  );

  const doesSomeInclude = useCallback(
    (filterName: keyof FiltersType, doctor: DoctorModel): boolean => {
      if (filters[filterName] === "") {
        return true;
      }

      return (
        doctor.name
          .toLowerCase()
          .includes((filters[filterName] as string).toLowerCase()) ||
        doctor.address
          .toLowerCase()
          .includes((filters[filterName] as string).toLowerCase()) ||
        doctor.specialityName
          .toLowerCase()
          .includes((filters[filterName] as string).toLowerCase())
      );
    },
    [filters],
  );

  const isActiveDoctor = useCallback(
    (doctor: DoctorModel): boolean => {
      const keyValues: (keyof FiltersType)[] = Object.keys(
        filters,
      ) as (keyof FiltersType)[];

      const result: boolean[] = [];

      keyValues.map((key) => {
        if (key === "name") {
          result.push(doesSomeInclude(key, doctor));
        } else {
          result.push(doesInclude(key, doctor));
        }
      });

      return result.find((x) => !x) == undefined;
    },
    [filters, doesInclude, doesSomeInclude],
  );

  const sortedDoctors = useMemo((): DoctorModel[] => {
    const filteredDoctors = (): DoctorModel[] =>
      doctors.filter((doctor: DoctorModel) => isActiveDoctor(doctor));

    if (sortBy.value === "rating") {
      return filteredDoctors().sort((a, b) => b.rate - a.rate);
    }

    if (sortBy.value === "appointment") {
      return filteredDoctors().sort((a, b) =>
        a.appointmentValue.localeCompare(b.appointmentValue),
      );
    }

    if (sortBy.value === "popularity") {
      return filteredDoctors().sort((a, b) => b.totalVotes - a.totalVotes);
    }

    return filteredDoctors();
  }, [sortBy, isActiveDoctor]);

  return (
    <DoctorsContext.Provider value={{ sortedDoctors, sortBy, setSortBy }}>
      {children}
    </DoctorsContext.Provider>
  );
}

export default DoctorsProvider;
