import { useState } from 'react';

import { Search } from '../../icons';
import type { FormattedCSVData } from '../../services/getCSVData';
import { Input } from '../Input';
import "../../styles/globals.css";

type MapSearchProps = {
  coordinatesWithData: FormattedCSVData[] | undefined;
  flyToCoordinate: (coordinates: [number, number]) => void;
};

export const MapSearch = ({
  coordinatesWithData = [],
  flyToCoordinate,
}: MapSearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] =
    useState<FormattedCSVData[]>(coordinatesWithData);
  const [searchActive, setSearchActive] = useState(false);

  const handleSetFilteredData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
    const isSearchActive = !!value && filteredData.length > 0;
    setSearchActive(isSearchActive);

    if (!value) {
      setFilteredData(coordinatesWithData);
      setSearchActive(false);
      setFilteredData([]);
      return;
    }

    const searchResults = coordinatesWithData.filter((coordinateData) => {
      const { LOCAL = '', ENDERECO = '' } = coordinateData.properties;

      return (
        LOCAL.toLowerCase().includes(value.toLowerCase()) ||
        ENDERECO.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredData(searchResults);
  };

  return (
    <div className="absolute left-[50%] top-[2rem] z-[1] h-[4.5rem] w-[90%] translate-x-[-50%]">
      <Input
        placeholder="Procurar locais"
        value={inputValue}
        search={searchActive}
        onChange={handleSetFilteredData}
        endAdornment={<Search className="absolute right-3 top-1/2 transform -translate-y-1/2 scale-75" />}
      />
      {filteredData.length > 0 ? (
        <div >
          <ul className="relative scrollbar-hidden overflow-y-auto max-h-[200px] w-full bg-white rounded-t-none rounded-b-[28px] border-t-[1px] border-gray-border shadow-lg gap-4">
            {filteredData.map((data, index) => {
              const { LOCAL = "", ENDERECO = "" } = data.properties;
              const isLastItem = index === filteredData.length - 1;
              return (
                <li
                  key={index}
                  className={`pt-8 pr-24 pb-8 pl-16 cursor-pointer hover:bg-gray-100 flex flex-col ${isLastItem ? "rounded-b-[28px]" : ""
                    }`}
                  onClick={() =>
                    flyToCoordinate([data.coordinates[0], data.coordinates[1]])
                  }
                >
                  <p className="text-gray-800 font-inter font-normal text-sm leading-6">{LOCAL}</p>
                  <p className="text-gray-500 font-poppins text-xs">{ENDERECO}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        null
      )}

    </div>
  );
};
