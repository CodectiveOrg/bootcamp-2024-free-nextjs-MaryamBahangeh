"use client";

import React, { useContext } from "react";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import Card from "@/components/card/Card";
import { FiltersType } from "@/types/filters-type";

import styles from "./SelectedFilters.module.css";
import SolarTrashBinMinimalisticLinear from "@/icons/SolarTrashBinMinimalisticLinear";

function SelectedFilters() {
  const { dispatchFilters, filters } = useContext(FiltersContext);

  const filterKeys = Object.keys(filters) as (keyof FiltersType)[];

  return (
    <Card>
      <div className={styles["selected-filters"]}>
        <div className={styles.header}>
          <div>Filters:</div>
          {filterKeys.length > 0 && (
            <button
              className={styles["delete-all"]}
              onClick={() => dispatchFilters({ type: "deletedAllFilters" })}
            >
              Delete
            </button>
          )}
        </div>

        <div className={styles["filters"]}>
          {filterKeys.map((key) => (
            <div className={styles.filter} key={key}>
              {filters[key]}
              <button
                onClick={() => dispatchFilters({ type: "deletedFilter", key })}
              >
                <SolarTrashBinMinimalisticLinear />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default SelectedFilters;
