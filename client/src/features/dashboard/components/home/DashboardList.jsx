const iconStyles = {
  warning: "bg-warning/10 text-warning",
  accent: "bg-accent/15 text-accent",
  danger: "bg-danger/10 text-danger",
  success: "bg-success/10 text-success",
};

const DashboardList = ({
  title,
  subtitle,
  headerIcon: HeaderIcon,
  action,
  items = [],
}) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-bg-tertiary p-5">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {HeaderIcon && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-bg-secondary text-accent">
              <HeaderIcon size={21} strokeWidth={1.7} />
            </div>
          )}

          <div className="min-w-0">
            <h2 className="text-base font-semibold text-text">{title}</h2>

            {subtitle && <p className="text-xs text-text-dim">{subtitle}</p>}
          </div>
        </div>

        {action && (
          <button
            type="button"
            className="shrink-0 text-sm font-semibold text-accent transition hover:brightness-125">
            {action}
          </button>
        )}
      </div>

      {/* Items */}
      <div className="mt-4 flex-1 divide-y divide-border-soft">
        {items.map((item) => {
          const Icon = item.icon;

          const iconStyle = iconStyles[item.iconColor] || iconStyles.accent;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
              {/* Item details */}
              <div className="flex min-w-0 items-center gap-3">
                {/* Item icon */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconStyle}`}>
                  <Icon size={16} strokeWidth={1.7} />
                </div>

                {/* Title and description */}
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-text">
                    {item.title}
                  </p>

                  <p className="mt-0.5 truncate text-xs text-text-dim">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Badge or metadata */}
              {item.badge ? (
                <button
                  type="button"
                  className="shrink-0 text-xs font-semibold text-accent transition hover:brightness-125">
                  {item.badge}
                </button>
              ) : (
                <span className="shrink-0 text-xs text-text-dim">
                  {item.meta}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardList;
