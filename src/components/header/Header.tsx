import { MdOutlineSos } from 'react-icons/md';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto max-w-7xl px-4 ">
        <div className="flex items-center justify-between py-4 ">
          <div className="flex items-center">
            <MdOutlineSos
              size={60}
              className="flex cursor-pointer text-red-600 duration-300 hover:scale-110"
            />
            <h1 className="ml-2 text-[34px] font-semibold">RS</h1>
          </div>
          <nav className="hidden tablet:block">
            <ul className="flex space-x-4 text-lg font-bold">
              <li>
                <a
                  href="#"
                  className="flex duration-300 hover:scale-110 hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex duration-300 hover:scale-110 hover:text-gray-300"
                >
                  Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex duration-300 hover:scale-110 hover:text-gray-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
