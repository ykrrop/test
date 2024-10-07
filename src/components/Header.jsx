import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section className="px-10 items-center flex justify-between w-full h-20 bg-violet-950">
      <div>
        <h1 className="text-white text-3xl font-extrabold">
          Кро<span className="text-zinc-900">код</span>ин
        </h1>
      </div>
      <nav className="flex gap-4 text-white text-lg">
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-zinc-900 text-violet-959 font-bold p-2 rounded-xl"
                  : "hover:text-zinc-900"
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/citizens"
              className={({ isActive }) =>
                isActive
                  ? "bg-zinc-900 text-violet-959 font-bold p-2 rounded-xl"
                  : "hover:text-zinc-900"
              }
            >
              Картотека граждан
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
