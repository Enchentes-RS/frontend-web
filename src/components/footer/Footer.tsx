export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4  shadow-lg">
      <div className="container mx-auto max-w-7xl px-4">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} SOS RS. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
