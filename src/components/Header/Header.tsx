export const Header = () => {
  return (
    <div className="p-3 flex justify-between items-center bg-blue-500">
      <img
        // didn't find svg logo so use plain png
        src="/logo.png"
        alt="Logo"
        className="h-8 mr-4 w-24"
      />
      <span className="cursor-pointer material-icons text-white p-0 rounded-full border-white border-2">
        account_circle
      </span>
    </div>
  );
};
