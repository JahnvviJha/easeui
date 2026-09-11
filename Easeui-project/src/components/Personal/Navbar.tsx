import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  console.log("this is theme->", mode);

  return (
    <nav className="h-16 w-full flex items-center justify-between px-8">
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className="font-bold text-2xl cursor-pointer"
          style={{ color: "var(--text-color)" }}
        >
          EaseUi
        </h1>

        <div className="hidden sm:flex items-center bg-transparent rounded-md px-3 py-1.5 shadow-xs shadow-gray-300 border border-gray-200 dark:border-gray-700 dark:shadow-none">
          <Search size={18} className="opacity-50" style={{ color: "var(--text-color)" }} />
          <input
            type="text"
            placeholder="Search components"
            className="ml-2 bg-transparent outline-none text-sm placeholder-gray-400"
            style={{ color: "var(--text-color)" }}
          />
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-6" style={{ color: "var(--text-color)" }}>
        <li
          onClick={() => navigate("components")}
          className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        >
          Components
        </li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">About</li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">Templates</li>
        {mode === "dark" && (
          <li
            className="cursor-pointer p-2 rounded-full hover:bg-white/10"
            onClick={() => dispatch(toggleTheme())}
          >
            <Sun size={20} className="text-yellow-400" />
          </li>
        )}
        {mode === "light" && (
          <li
            className="cursor-pointer p-2 rounded-full hover:bg-black/5"
            onClick={() => dispatch(toggleTheme())}
          >
            <Moon size={20} className="opacity-70" style={{ color: "var(--text-color)" }} />
          </li>
        )}
      </ul>

      {/* Mobile Hamburger */}
      <button className="md:hidden" style={{ color: "var(--text-color)" }}>☰</button>
    </nav>
  );
};

export default Navbar;
