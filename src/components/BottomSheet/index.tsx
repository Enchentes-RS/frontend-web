import Drawer from '@mui/material/Drawer';

type BottomSheetProps = {
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeBottomSheetCallback?: () => void;
  children: React.ReactNode;
};

export const BottomSheet = ({
  isBottomSheetOpen,
  setIsBottomSheetOpen,
  closeBottomSheetCallback,
  children,
}: BottomSheetProps) => {
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    closeBottomSheetCallback && closeBottomSheetCallback();
  };

  return (
    <Drawer
      anchor="bottom"
      open={isBottomSheetOpen}
      onClose={handleCloseBottomSheet}
    >
      {children}
    </Drawer>
  );
};
