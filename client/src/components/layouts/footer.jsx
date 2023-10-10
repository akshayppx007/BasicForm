const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <p className="text-lg font-semibold">© 2023 Basic Forms</p>
        <div className="mt-2">
          <a href="#" className="mr-4 hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
