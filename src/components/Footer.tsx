import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 px-4 sm:px-6 lg:px-2">
      <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href={"/"}
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <Link href={"/courses"} className="hover:text-white transition-colors duration-300">
                
                
              
                Courses
                </Link>
            </li>
            <li>
              <Link
                href={"/contacts"}
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Indore, India</p>
          <p>Indore 452018</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 079-0209</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
