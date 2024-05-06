import { MdOutlineSos } from "react-icons/md";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto max-w-7xl px-4 ">
        <div className="flex justify-between items-center py-4 ">
          <div className="flex items-center">
            <MdOutlineSos
              size={60}
              className="text-red-600 duration-300 hover:scale-110 flex cursor-pointer"
            />
            <h1 className="text-[34px] font-semibold ml-2">RS</h1>
          </div>
          <nav className="hidden tablet:block">
            <ul className="flex space-x-4 text-lg font-bold">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 duration-300 hover:scale-110 flex"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 duration-300 hover:scale-110 flex"
                >
                  Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 duration-300 hover:scale-110 flex"
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
