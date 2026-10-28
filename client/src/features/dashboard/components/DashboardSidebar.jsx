import { Link } from "react-router-dom";
import {
  House,
  LockKeyhole,
  RefreshCw,
  Shield,
  UserRound,
  Settings,
  LogOut,
} from "lucide-react";

import logo from "../../../assets/logos/securevault-logo.svg";
import { PATHS } from "../../../config/paths.js";
import SidebarNavItem from "./SidebarNavItem.jsx";

const mainNavigation = [
  {
    label: "Home",
    path: PATHS.DASHBOARD.HOME,
    icon: House,
  },
  {
    label: "Vault",
    path: PATHS.DASHBOARD.VAULT,
    icon: LockKeyhole,
    badge: 0,
  },
  {
    label: "Generator",
    path: PATHS.DASHBOARD.GENERATOR,
    icon: RefreshCw,
  },
  {
    label: "Security",
    path: PATHS.DASHBOARD.SECURITY,
    icon: Shield,
  },
];

const accountNavigation = [
  {
    label: "Profile",
    path: PATHS.DASHBOARD.PROFILE,
    icon: UserRound,
  },
  {
    label: "Settings",
    path: PATHS.DASHBOARD.SETTINGS,
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="flex h-full w-full flex-col bg-bg">
      {/* Brand */}
      <div className="flex h-20 shrink-0 items-center px-6 ">
        <Link
          to={PATHS.DASHBOARD.HOME}
          className="flex items-center rounded-lg focus-visible:outline-accent"
          aria-label="SecureVault home">
          <img src={logo} alt="SecureVault" className="h-9 w-auto" />
        </Link>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Dashboard navigation"
        className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-faint">
          Menu
        </p>

        <div className="space-y-1">
          {mainNavigation.map((item) => (
            <SidebarNavItem key={item.path} {...item} />
          ))}
        </div>

        <p className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-faint">
          Account
        </p>

        <div className="space-y-1">
          {accountNavigation.map((item) => (
            <SidebarNavItem key={item.path} {...item} />
          ))}
        </div>
      </nav>

      {/* Account footer */}
      <div className="shrink-0 space-y-4  p-4">
        <div className="rounded-xl bg-bg-tertiary border border-border transition hover:border-[#2A3550] px-3 py-4">
          <p className="text-xs text-text-dim">Vault storage</p>
          <p className="mt-1 text-[15px] font-extrabold text-text">
            34 of 50 items
          </p>
          <div className="mt-2 h-1.5 w-full rounded-full  bg-bg-secondary">
            <div
              className="h-1.5  rounded-full bg-accent"
              style={{ width: "68%" }}
            />
          </div>
        </div>

        <Link
          to={PATHS.DASHBOARD.PROFILE}
          className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-bg-tertiary p-2 transition hover:border-[#2A3550]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  bg-[#1A2640] text-sm font-semibold text-accent">
            U
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-text">
              Naruto Uzumaki
            </p>
            <p className="truncate text-xs text-text-dim">
              narutouzumaki@gmail.com
            </p>
          </div>
        </Link>

        {/* Logout integration comes next */}
        <button
          type="button"
          onClick={() => {
            // Connect logout API and auth flow.
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-text-dim transition hover:bg-surface hover:text-danger">
          <LogOut size={18} strokeWidth={1.8} aria-hidden="true" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
