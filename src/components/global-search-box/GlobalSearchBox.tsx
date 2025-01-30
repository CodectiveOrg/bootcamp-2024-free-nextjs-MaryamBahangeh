"use client";

import { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { FiltersContext } from "@/app/search/providers/FiltersProvider";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import styles from "./GlobalSearchBox.module.css";

function GlobalSearchBox() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");

  const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pathname === "/search") {
      if (query) {
        dispatchFilters({
          type: "updated_filtered",
          key: "name",
          value: query,
        });
      } else {
        dispatchFilters({ type: "removed_filter", key: "name" });
      }
    } else {
      const href = query ? `/search/?name=${query}` : "/search";
      router.push(href);
    }
  };

  useEffect(() => {
    if (!filters.name) {
      setQuery("");
    }
  }, [filters]);

  return (
    <form className={styles["search-box"]} onSubmit={onsubmitHandler}>
      <div className={styles["input-container"]}>
        <MingcuteSearchLine className={styles.prefix}></MingcuteSearchLine>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Doctor name, Speciality, Desease name,...."
        />
      </div>

      <div className={styles.divider}></div>

      <button>
        <MingcuteLocationLine></MingcuteLocationLine>
        All Countries
      </button>
    </form>
  );
}

export default GlobalSearchBox;
