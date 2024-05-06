import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

type BaseTemplateProps = {
  children: React.ReactNode;
};

export const BaseTemplate: React.FC<BaseTemplateProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-beige-light">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
