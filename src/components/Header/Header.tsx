export const Header = () => {
  return (
    <header className="w-full p-3 flex justify-between items-center bg-slate-100 !opacity-95 border-b border-slate-300 shadow-lg">
      <img
        // didn't find svg logo so use plain png
        src="/logo.png"
        alt="Logo"
        className="h-8 mr-4 w-24 cursor-pointer"
      />
      <span className="cursor-pointer material-icons text-blue-500 p-0 rounded-full border-blue-600 border-2">
        account_circle
      </span>
    </header>
  );
};
