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

  const isVisible = useCallback(
    (doctor: DoctorModel): boolean => {
      const filterKeys = Object.keys(filters) as (keyof FiltersType)[];

      const result: boolean[] = [];

      filterKeys.map((key) => {
        if (key === "name") {
          result.push(doesSomeInclude(filters[key] as string, doctor));
        } else {
          result.push(doesInclude(filters[key] as string, key, doctor));
        }
      });

      return result.find((x) => !x) == undefined;
    },
    [filters],
  );

  const sortedDoctors = useMemo((): DoctorModel[] => {
    const filteredDoctors = doctors.filter(isVisible);

    switch (sortBy.value) {
      case "rating": {
        return filteredDoctors.sort((a, b) => b.rate - a.rate);
      }

      case "appointment": {
        return filteredDoctors.sort((a, b) =>
          a.appointment.value.localeCompare(b.appointment.value),
        );
      }

      case "popularity": {
        return filteredDoctors.sort((a, b) => b.totalVotes - a.totalVotes);
      }

      default: {
        return filteredDoctors;
      }
    }
  }, [sortBy, isVisible]);

  return (
    <DoctorsContext.Provider value={{ sortedDoctors, sortBy, setSortBy }}>
      {children}
    </DoctorsContext.Provider>
  );
}

const doesSomeInclude = (filterValue: string, doctor: DoctorModel): boolean => {
  if (filterValue === "") {
    return true;
  }

  return (
    doctor.name.toLowerCase().includes(filterValue.toLowerCase()) ||
    doctor.address.toLowerCase().includes(filterValue.toLowerCase()) ||
    doctor.speciality.label.toLowerCase().includes(filterValue.toLowerCase())
  );
};

const doesInclude = (
  filterValue: string,
  filterKey: keyof FiltersType,
  doctor: DoctorModel,
): boolean => {
  console.log("filterKey= " + filterKey);
  console.log("filterValue= " + filterValue);
  return (doctor[filterKey] as SelectOptionType).value === filterValue;
};

export default DoctorsProvider;
