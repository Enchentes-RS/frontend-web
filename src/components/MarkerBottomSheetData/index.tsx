import type { FormattedCSVDataProperties } from '../../services/getCSVData';

type MarkerBottomSheetDataProps = {
  markerToDisplay: FormattedCSVDataProperties;
};

export const MarkerBottomSheetData = ({
  markerToDisplay,
}: MarkerBottomSheetDataProps) => {
  return (
    <div className="rounded bg-white px-4 py-16 shadow">
      <h2 className="text-[1rem] font-bold">Local: {markerToDisplay.LOCAL}</h2>

      <p className="text-[0.8rem]">{markerToDisplay.ENDERECO}</p>

      <p className="text-[0.8rem]">
        Voluntários: {markerToDisplay.VOLUNTARIOS}
      </p>

      <p className="text-[0.8rem]">
        Doações aceitas: {markerToDisplay.DOACOES}
      </p>

      <p className="text-[0.8rem]">Observações: {markerToDisplay.OBS}</p>

      {markerToDisplay['GRUPO WHATS'] ? (
        <p className="text-[0.8rem]">
          Whatsapp:{' '}
          <a
            href={markerToDisplay['GRUPO WHATS']}
            target="_blank"
            rel="noreferrer"
          >
            {markerToDisplay['GRUPO WHATS']}
          </a>
        </p>
      ) : null}
    </div>
  );
};
