export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white  shadow-lg">
      <div className="container mx-auto max-w-7xl px-4">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} SOS RS. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
