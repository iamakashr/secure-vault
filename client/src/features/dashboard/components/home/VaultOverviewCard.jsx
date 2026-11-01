import { Lock, ArrowRight } from "lucide-react";
import { vaultCategories } from "../../data/dashboardData.js";

const VaultOverviewCard = () => {
  const totalItems = vaultCategories.reduce(
    (total, category) => total + category.count,
    0,
  );

  const totalCapacity = 50;

  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-bg-tertiary p-6">
      {/* Header */}
      <div className="mb-7 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-secondary text-warning">
            <Lock size={21} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Your vault</h2>

            <p className="text-sm text-text-dim">
              {totalItems} of {totalCapacity} items
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-bg-secondary px-3 py-1 text-sm font-semibold text-warning">
          Locked
        </span>
      </div>

      {/* Categories */}
      <div className="space-y-5">
        {vaultCategories.map((category) => {
          const Icon = category.icon;

          const percentage = (category.count / category.total) * 100;

          return (
            <div key={category.id}>
              <div className="flex items-center gap-4">
                {/* Category icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-secondary text-text-dim">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                {/* Category name and progress */}
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-text-dim">
                      {category.title}
                    </span>

                    <span className="text-sm font-semibold text-text">
                      {category.count}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 overflow-hidden rounded-full bg-bg-secondary">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:brightness-125">
          Open vault
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default VaultOverviewCard;
