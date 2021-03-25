import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-6">
        <div className="mt-8 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-black dark:text-gray-100 font-bold mb-2">
              © 2021 by Adrià Gual
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
