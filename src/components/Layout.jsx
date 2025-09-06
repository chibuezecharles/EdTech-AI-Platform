const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            🎓 EdTech + AI Learning Platform
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-3 md:p-7">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white text-center py-4 mt-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} EdTech AI • Empowering Smarter Learning
        </p>
      </footer>
    </div>
  );
};

export default Layout;
