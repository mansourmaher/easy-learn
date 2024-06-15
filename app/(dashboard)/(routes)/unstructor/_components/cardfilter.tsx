"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { Card } from "@/components/ui/card";
import React from "react";
import FilterBtn from "./filterbtn";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import useCountries from "@/hooks/useCountries";
import Select from "react-select";
import filiers from "@/data/filiers";

function Cardfilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [intialecountry, setIntialecountry] = useState(
    searchParams.get("country")
  );
  const [intialefield, setIntialefield] = useState(searchParams.get("field"));
  const [intialeorderby, setIntialeorderby] = useState(
    searchParams.get("orderby")
  );

  const { getAll } = useCountries();
  const filierOptions = filiers;
  const orderbyOptions = [
    { option: "Rating" },
    { option: "Total students" },
    { option: "Experience" },
  ];

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          country: intialecountry,
          field: intialefield,
          orderby: intialeorderby,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [intialecountry, intialefield, intialeorderby]);

  return (
    <>
      <Card className="rounded-3xl border bg-muted/40 md:w-[1210px] mb-8">
        <div className="flex justify-between mr-2 p-4">
          <div className="flex justify-between items-center">
            <div className="flex text-sm text-muted-foreground justify-between items-center">
              <span>
                There are teachers available for you ordered by rating apply
                filters to get the best teacher for you
              </span>
            </div>
          </div>
          <Button
            variant={"outline"}
            className=" "
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            <SlidersHorizontal className="mr-2" />
            {isFilterOpen ? "Close" : "Filter"}
          </Button>
        </div>
      </Card>
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Card className="rounded-3xl border md:w-[1210px] mb-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0 mr-2 p-4">
              <div className="w-full flex items-center space-x-2">
                <span className="text-muted-foreground">Country</span>
                <Select
                  options={getAll()}
                  className="w-full"
                  value={getAll().find((c) => c.label === intialecountry)}
                  onChange={(value) => setIntialecountry(value?.label!)}
                  placeholder="Select your country"
                  formatOptionLabel={(option) => (
                    <div className="flex flex-row items-center gap-3">
                      <div>{option.flag}</div>
                      <div>
                        {option.label},
                        <span className="text-gray-400">{option.region}</span>
                      </div>
                    </div>
                  )}
                />
              </div>
              <div className="w-full flex items-center space-x-2">
                <span className="text-muted-foreground">Field</span>
                <Select
                  options={filierOptions}
                  className="w-full"
                  value={filierOptions.find((c) => c.value === intialefield)}
                  onChange={(value) => setIntialefield(value?.value!)}
                  placeholder="Select the field of work"
                  formatOptionLabel={(option) => (
                    <div className="flex flex-row items-center gap-3">
                      <div>{option.option}</div>
                    </div>
                  )}
                />
              </div>
              <div className="w-full flex items-center space-x-2">
                <span className="text-muted-foreground">Order by</span>
                <Select
                  options={orderbyOptions}
                  className="w-full"
                  value={orderbyOptions.find(
                    (c) => c.option === intialeorderby
                  )}
                  onChange={(value) => setIntialeorderby(value?.option!)}
                  formatOptionLabel={(option) => (
                    <div className="flex flex-row items-center gap-3">
                      <div>{option.option}</div>
                    </div>
                  )}
                />
              </div>
              <Button
                variant={"outline"}
                className=" "
                onClick={() => {
                  setIntialecountry(null);
                  setIntialefield(null);
                  setIntialeorderby(null);
                }}
              >
                Refresh
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </>
  );
}

export default Cardfilter;
