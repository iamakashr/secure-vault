import { NavLink } from "react-router-dom";

export default function SidebarNavItem({ label, path, icon: Icon, badge }) {
  return (
    <NavLink
      to={path}
      end={label === "Home"}
      className={({ isActive }) =>
        [
          "relative flex items-center gap-3 rounded-xl px-3 py-3",
          "text-sm font-medium transition-colors duration-200",
          isActive
            ? "bg-bg-secondary text-text"
            : "text-text-dim hover:bg-bg-tertiary hover:text-text",
        ].join(" ")
      }>
      {({ isActive }) => (
        <>
          {isActive && (
            <span
              className="absolute bottom-2 left-0 top-2 w-0.75 rounded-r-full bg-accent"
              aria-hidden="true"
            />
          )}

          <Icon
            size={19}
            strokeWidth={1.8}
            className="shrink-0"
            aria-hidden="true"
          />

          <span className="min-w-0 flex-1 truncate">{label}</span>

          {badge !== undefined && (
            <span className="rounded-full bg-surface-raised px-2 py-0.5 font-mono text-xs text-text-dim">
              {badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}
