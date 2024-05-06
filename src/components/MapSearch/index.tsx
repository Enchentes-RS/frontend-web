import { useState } from "react";
import type { FormattedCSVData } from "../../services/getCSVData";
import { Input } from "../Input";
import { SearchSVG } from "../../SVGs/SearchSVG";

type MapSearchProps = {
  coordinatesWithData: FormattedCSVData[] | undefined;
  flyToCoordinate: (coordinates: [number, number]) => void;
};

export const MapSearch = ({
  coordinatesWithData = [],
  flyToCoordinate,
}: MapSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] =
    useState<FormattedCSVData[]>(coordinatesWithData);

  const handleSetFilteredData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);

    if (!value) {
      setFilteredData(coordinatesWithData);
      return;
    }

    const searchResults = coordinatesWithData.filter((coordinateData) => {
      const { LOCAL = "", ENDERECO = "" } = coordinateData.properties;

      return (
        LOCAL.toLowerCase().includes(value.toLowerCase()) ||
        ENDERECO.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredData(searchResults);
  };

  return (
    <div className="absolute top-[2rem] left-[50%] translate-x-[-50%] h-[4.5rem] w-[90%] z-[1]">
      <Input
        placeholder="Procurar locais"
        value={inputValue}
        onChange={handleSetFilteredData}
        endAdornment={
          <SearchSVG className="absolute right-[1rem] top-[50%] translate-y-[-50%] scale-75" />
        }
      />
    </div>
  );
};
