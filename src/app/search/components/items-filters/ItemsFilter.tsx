import React, { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import Card from "@/components/card/Card";
import { FiltersType } from "@/types/filters-type";
import { SelectOptionType } from "@/types/select-option-type";

import styles from "./ItemsFilter.module.css";

export enum FILTER_VARIANT {
  LIST = "list",
  RADIO = "radio",
}

type Props = {
  filterVariant: FILTER_VARIANT;
  title: string;
  options: SelectOptionType[];
  fieldName: keyof FiltersType;
};

function ItemsFilter({ filterVariant, title, options, fieldName }: Props) {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const filter = (value: string, filterType: keyof FiltersType): void => {
    dispatchFilters({
      type: "filtered",
      key: filterType,
      value: value,
    });
  };

  return (
    <div className={styles["items-filters"]}>
      <Card title={title} className={styles.items}>
        <ul>
          {options.map(
            (option) =>
              (filterVariant === FILTER_VARIANT.LIST && (
                <li
                  key={option.label}
                  value={option.label}
                  className={
                    filters[fieldName] === option.label ? styles.selected : ""
                  }
                  onClick={() => {
                    filter(option.label, fieldName);
                  }}
                >
                  {option.label}
                </li>
              )) ||
              (filterVariant === FILTER_VARIANT.RADIO && (
                <div key={option.value} className={styles["radio-list"]}>
                  <input
                    type="radio"
                    id={option.label}
                    name={option.label}
                    value={option.value}
                    checked={filters[fieldName] === option.label}
                    onChange={() => filter(option.label, fieldName)}
                  />
                  <label htmlFor={option.label}>{option.label}</label>
                </div>
              )),
          )}
        </ul>
      </Card>
    </div>
  );
}

export default ItemsFilter;
