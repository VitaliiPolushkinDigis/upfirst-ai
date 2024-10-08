import { useTranslation } from "react-i18next";
import { Navigation } from "../Navigation/Navigation";

export const Menu = () => {
  const { t } = useTranslation();
  const handleLogout = () => {
    console.log("Logging out...");
  };
  return (
    <aside className="h-lvh w-96 bg-gray-50 flex flex-col justify-between py-4 px-12">
      <img
        // didn't find svg logo so use plain png
        src="/logo.png"
        alt="Logo"
        className="top-2 h-8 mr-4 w-24"
      />
      <Navigation />
      <button
        className="bg-slate-200 rounded-lg font-semibold flex items-center p-2"
        onClick={handleLogout}
      >
        <span className="material-icons mr-4">logout</span>
        <span>{t("logout")}</span>
      </button>
    </aside>
  );
};
