import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../services/reactQueryClient";

type ApplicationProvidersProps = {
  children: React.ReactNode;
};

export const ApplicationProviders = ({
  children,
}: ApplicationProvidersProps): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
