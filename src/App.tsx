import MapContent from "./pages/Home";
import ApplicationProviders from "./components/ApplicationProviders";
import BaseTemplate from "./templates/BaseTemplate";

function App() {
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

export default App;
