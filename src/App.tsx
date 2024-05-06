import { ApplicationProviders } from '@/components/ApplicationProviders';
import { MapContent } from '@/pages/Home';
import { BaseTemplate } from '@/templates/BaseTemplate';

export function App() {
  return (
    <ApplicationProviders>
      <BaseTemplate>
        <main className="flex-grow">
          <MapContent />
        </main>
      </BaseTemplate>
    </ApplicationProviders>
  );
}
