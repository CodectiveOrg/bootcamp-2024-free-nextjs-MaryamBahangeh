"use client";

import React, { useContext, useMemo } from "react";

import SelectComponent from "@/components/select/SelectComponent";
import { APPOINTMENT_TIMES } from "@/options/appointment-time-options";
import { SelectOptionType } from "@/types/select-option-type";
import { FiltersType } from "@/types/filters-type";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import styles from "./AppointmentFilter.module.css";

function AppointmentFilter() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const selectedOption = useMemo(() => {
    if (filters["appointmentLabel"]) {
      return APPOINTMENT_TIMES.find(
        (option) => option.label === filters["appointmentLabel"],
      )!;
    }
    return APPOINTMENT_TIMES[0];
  }, [filters]);

  const changeHandler = (option: SelectOptionType): void => {
    if (option === APPOINTMENT_TIMES[0]) {
      dispatchFilters({
        type: "deletedFilter",
        key: "appointmentLabel",
      });
      return;
    }

    dispatchFilters({
      type: "filtered",
      key: "appointmentLabel",
      value: option.label,
    });
  };

  return (
    <div className={styles["appointment-filter"]}>
      <SelectComponent
        floating
        title="First Available Appointment"
        options={APPOINTMENT_TIMES}
        selectedOption={selectedOption}
        onSelectedOptionChange={changeHandler}
      />
    </div>
  );
}

export default AppointmentFilter;
