import StatCard from "../components/home/StatCard";
import SecurityHealth from "../components/home/SecurityHealth";
import VaultStatus from "../components/home/VaultStatus";
import DashboardList from "../components/home/DashboardList";
import { AlertTriangle, List } from "lucide-react";
import VaultOverviewCard from "../components/home/VaultOverviewCard";
import { attentionItems, recentActivities } from "../data/dashboardData.js";

const DashboardHome = () => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Good evening Akash</h1>
        <p className="text-gray-500 text-sm">
          Your vault is unlocked and protected. Here’s a quick overview.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* StatCards */}
        <StatCard
          title="Total items"
          value="28"
          Description="of 50"
          color="default"
        />
        <StatCard
          title="Weak"
          value="6"
          Description="need attention"
          color="danger"
        />
        <StatCard
          title="Reused"
          value="4"
          Description="across sites"
          color="accent"
        />
        <StatCard
          title="Old"
          value="9"
          Description="over 12 months"
          color="default"
        />
      </div>

      <div className="mt-6 grid grid-cols-12 gap-4">
        {/* Security Health Card */}
        <SecurityHealth />

        {/* Vault Status Card */}
        <VaultStatus />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {/* Vault overview */}
        <VaultOverviewCard />

        {/* Needs attention */}
        <DashboardList
          title="Needs attention"
          subtitle="Fix these first"
          headerIcon={AlertTriangle}
          action="Open Security"
          items={attentionItems}
        />

        {/* Recent activity */}
        <DashboardList
          title="Recent activity"
          subtitle="This account"
          headerIcon={List}
          items={recentActivities}
        />
      </div>
    </>
  );
};

export default DashboardHome;
