import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';

type BaseTemplateProps = {
  children: React.ReactNode;
};

export const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <div className="bg-beige-light flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
