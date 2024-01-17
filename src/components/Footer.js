import React from "react";

function Footer() {
  return (
    <footer class="bg-primary">
      <div className="container mx-auto">
        <div className="border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-primary dark:text-gray-100 font-bold mb-2">
              © 2024 by Adrià Gual
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
