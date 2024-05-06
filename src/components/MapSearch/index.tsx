import { useState } from 'react';

import { Search } from '../../icons';
import type { FormattedCSVData } from '../../services/getCSVData';
import { Input } from '../Input';

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

  const handleSetFilteredData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);

    if (!value) {
      setFilteredData(coordinatesWithData);
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
        onChange={handleSetFilteredData}
        endAdornment={
          <Search className="absolute right-[1rem] top-[50%] translate-y-[-50%] scale-75" />
        }
      />
    </div>
  );
};
