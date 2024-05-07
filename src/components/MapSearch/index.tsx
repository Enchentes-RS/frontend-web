import '@/styles/globals.css';

import { useState } from 'react';

import { Input } from '@/components/Input';
import { Search } from '@/icons';
import type { FormattedCSVData } from '@/services/getCSVData';
import { cn } from '@/utils/classnames';

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
        endAdornment={
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 scale-75 transform" />
        }
      />
      {filteredData.length > 0 ? (
        <div>
          <ul
            className={cn(
              'scrollbar-hidden border-gray-border relative max-h-[200px] w-full gap-4',
              'overflow-y-auto rounded-b-[28px] rounded-t-none border-t bg-white shadow-lg',
            )}
          >
            {filteredData.map((data, index) => {
              const { LOCAL = '', ENDERECO = '' } = data.properties;
              const isLastItem = index === filteredData.length - 1;
              return (
                <li
                  key={index}
                  className={`flex cursor-pointer flex-col py-8 pl-16 pr-24 hover:bg-gray-100 ${
                    isLastItem ? 'rounded-b-[28px]' : ''
                  }`}
                  onClick={() =>
                    flyToCoordinate([data.coordinates[0], data.coordinates[1]])
                  }
                >
                  <p className="font-inter text-sm font-normal leading-6 text-gray-800">
                    {LOCAL}
                  </p>
                  <p className="font-poppins text-xs text-gray-500">
                    {ENDERECO}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="border-lg border-gray-border mt-5 rounded-lg bg-white shadow-lg">
          <p className="font-inter p-8 text-sm font-normal leading-6 text-gray-800">
            Nenhum resultado encontrado
          </p>
        </div>
      )}
    </div>
  );
};
