import { useState } from "react";
import type { FormattedCSVData } from "../../services/getCSVData";
import { Input } from "../Input";
import { Search } from "../../icons";

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
          <Search className="absolute right-[1rem] top-[50%] translate-y-[-50%] scale-75" />
        }
      />
      {filteredData.length > 0 &&
        <ul className="absolute top-[4.5rem] w-full bg-white rounded-lg shadow-lg">
          {filteredData.map((data, index) => {
            const { LOCAL, ENDERECO } = data.properties;

            return (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => flyToCoordinate([data.coordinates[0], data.coordinates[1]])}
              >
                <p className="text-gray-800 font-poppins text-sm">{LOCAL}</p>
                <p className="text-gray-600 font-poppins text-xs">{ENDERECO}</p>
              </li>
            );
          })}
        </ul>

      }

    </div>
  );
};
