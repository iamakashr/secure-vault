import { useState } from "react";
import { Search, Plus, Bell, Moon } from "lucide-react";

export default function DashboardNavbar({
  onSearchChange,
  onNewItem,
  onNotificationsClick,
  onThemeToggle,
}) {
  const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearch(value);
    onSearchChange?.(value);
  }

  return (
    <header className="sticky top-0 z-20 flex h-18 items-center gap-4 border-b border-border bg-bg px-3 pl-8 ">
      {/* Search bar */}
      <div className="relative min-w-0 w-full max-w-130 flex-1">
        <Search
          size={16}
          strokeWidth={1.6}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-faint"
          aria-hidden="true"
        />

        <input
          type="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search your vault"
          aria-label="Search your vault"
          className="h-10.5 w-full rounded-xl border border-border bg-bg-tertiary pl-11 pr-14 text-base text-text outline-none transition
          placeholder:text-sm placeholder:text-text-dim focus:border-accent focus:ring-2 focus:ring-accent/10"
        />

        {/* Keyboard shortcut */}
        <kbd className="pointer-events-none absolute right-3 top-1/2 flex h-5 w-6 -translate-y-1/2 items-center justify-center rounded-md border border-[#2A3550] px-2 font-mono text-xs text-text-dim">
          /
        </kbd>
      </div>

      {/* Right-side actions */}
      <div className="ml-auto flex shrink-0 items-center gap-3 pr-5">
        {/* New item */}
        <button
          type="button"
          onClick={onNewItem}
          className="flex h-10.5 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-bg transition hover:brightness-110 focus-visible:outline-offset-2">
          <Plus size={20} strokeWidth={1.8} aria-hidden="true" />
          <span className="hidden sm:inline">New item</span>
        </button>

        {/* Notifications */}
        <button
          type="button"
          onClick={onNotificationsClick}
          aria-label="Notifications"
          className="relative flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-tertiary text-text-dim transition hover:border-accent/40 hover:bg-surface hover:text-text">
          <Bell size={17} strokeWidth={1.7} aria-hidden="true" />

          {/* Unread notification indicator */}
          <span
            className="absolute right-3.5 top-2.75 h-1 w-1 rounded-full bg-[#ef4444] ring-2 ring-panel"
            aria-hidden="true"
          />
        </button>

        {/* Dark mode */}
        <button
          type="button"
          onClick={onThemeToggle}
          aria-label="Toggle theme"
          title="Toggle theme"
          className="flex h-10 w-10.5 shrink-0.5 items-center justify-center rounded-xl border border-border bg-bg-tertiary text-text-dim transition hover:border-accent/40 hover:bg-surface hover:text-text">
          <Moon size={17} strokeWidth={1.7} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
