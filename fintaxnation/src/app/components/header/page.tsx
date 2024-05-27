
import Image from 'next/image';
import ca from '@/app/images/teamca.jpg'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div id="ast-desktop-header" data-toggle-type="dropdown">
        <div className="py-2 bg-gray-700">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h6>ALWAYS OPEN! We work 24/7</h6>
            </div>
            <div className="flex items-center space-x-4">

              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                fintaxnation@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center">
                <Image
                  width={126}
                  height={126}
                  src={ca}
                  alt="Teamcacsprofessionals"
                  className="w-16 h-16"
                />
                <div>
                  <span className="text-xl font-bold">Fintaxnationsprofessionals</span>
                  <p>@fintaxnation</p>
                </div>
              </a>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-blue-400">Home</a>
                </li>
                <li className="relative group">
                  <a href="/services/" className="hover:text-blue-400 flex items-center">
                    Services
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                  <ul className="absolute left-0 mt-1 w-48 bg-white text-black shadow-lg hidden group-hover:block">
                    <li>
                      <a href="/gst-filing/" className="block px-4 py-2 hover:bg-gray-100">
                        GST Filing
                      </a>
                    </li>
                    <li>
                      <a href="/itr-filing/" className="block px-4 py-2 hover:bg-gray-100">
                        ITR Filing
                      </a>
                    </li>
                    <li>
                      <a href="/tds-tcs-returns/" className="block px-4 py-2 hover:bg-gray-100">
                        TDS/TCS Returns
                      </a>
                    </li>
                    <li>
                      <a href="/epf-esi-returns/" className="block px-4 py-2 hover:bg-gray-100">
                        EPF/ESI Returns
                      </a>
                    </li>
                    <li>
                      <a href="/book-keeping-accounting-services/" className="block px-4 py-2 hover:bg-gray-100">
                        Book-Keeping & Accounting Services
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact-us/" className="hover:text-blue-400">Contact us</a>
                </li>
                <li>
                  <a href="/about-us/" className="hover:text-blue-400">About us</a>
                </li>
                <li className="relative group">
                  <a href="/updates/" className="hover:text-blue-400 flex items-center">
                    Updates
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                  <ul className="absolute left-0 mt-1 w-48 bg-white text-black shadow-lg hidden group-hover:block">
                    <li>
                      <a href="/category/income-tax-updates/" className="block px-4 py-2 hover:bg-gray-100">
                        Income Tax Updates
                      </a>
                    </li>
                    <li>
                      <a href="/category/gst/" className="block px-4 py-2 hover:bg-gray-100">
                        GST-Updates & Compliances
                      </a>
                    </li>
                    <li>
                      <a href="/category/legal-advises/" className="block px-4 py-2 hover:bg-gray-100">
                        Legal Advises
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div id="ast-mobile-header" className="block lg:hidden">
        <div className="container mx-auto flex justify-between items-center py-4">
          <a href="/" className="flex items-center">
            <Image
              width={126}
              height={126}
              src={ca}
              alt="Teamcacsprofessionals"
              className="w-16 h-16"
            />
            <div>
              <span className="text-xl font-bold">Fintaxnationprofessionals</span>
              <p>@fintaxnation</p>
            </div>
          </a>
          <button className="text-white" aria-label="Menu">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
