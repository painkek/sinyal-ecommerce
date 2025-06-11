import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6">
              <Image
                src="/logo/logo.png"
                alt="Sinyal Clothing"
                width={160}
                height={80}
              />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* social links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-3">Social</h3>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-2xl hover:text-gray-300 transition" />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-2xl hover:text-gray-300 transition" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-gray-400" />
                  <span>0948 247 9282</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-400" />
                  <span>jeronebndr@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaFacebookMessenger className="text-gray-400" />
                  <span>Sinyal Clothing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start w-full md:max-w-xs">
            <h3 className="text-lg font-semibold mb-3">Message Us</h3>
            <textarea
              className="w-full bg-neutral-800 border border-neutral-700 rounded p-3 mb-3 text-white placeholder-gray-400"
              rows={4}
              placeholder="Enter your message"
            />
            <button className="bg-white text-neutral-900 px-6 py-2 rounded hover:bg-gray-200 transition">
              Send
            </button>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} Sinyal Clothing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
