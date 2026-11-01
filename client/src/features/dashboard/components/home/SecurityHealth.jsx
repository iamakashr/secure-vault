import React from 'react'

const SecurityHealth = () => {
  return (
    <>
      <div className="col-span-7 flex flex-col justify-between rounded-xl border border-border bg-bg-tertiary p-6">
        <div>
          <h2 className="text-lg font-semibold text-text">Security health</h2>

          <div className="mt-6 flex items-center gap-8">
            {/* Circular Score */}
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
              <svg
                className="absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="var(--color-border-soft)"
                  strokeWidth="9"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="var(--color-danger)"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray="55 276"
                />
              </svg>

              <span className="text-3xl font-bold text-text">20</span>
            </div>

            {/* Progress Bars */}
            <div className="min-w-0 flex-1 space-y-4">
              {[
                { label: "Strong passwords", value: 72 },
                { label: "Unique passwords", value: 88 },
                { label: "Recently updated", value: 96 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex justify-between text-sm text-text-dim">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>

                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-soft">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub Metrics */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border-soft pt-8">
            <div>
              <span className="block text-sm text-text-dim">Items scanned</span>
              <span className="mt-1 block text-base font-semibold text-text">
                34
              </span>
            </div>

            <div>
              <span className="block text-sm text-text-dim">Last scan</span>
              <span className="mt-1 block text-base font-semibold text-text">
                Today, 4:00 PM
              </span>
            </div>

            <div>
              <span className="block text-sm text-text-dim">Next scan</span>
              <span className="mt-1 block text-base font-semibold text-text">
                Tomorrow
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-border-soft bg-bg-secondary px-4 py-3">
          <p className="text-sm text-text">
            Your score is at risk. Fix 7 weak passwords to improve it.
          </p>

          <button className="shrink-0 rounded-xl bg-accent px-3 py-2 text-sm font-medium text-bg transition hover:brightness-110">
            Run scan
          </button>
        </div>
      </div>
    </>
  );
}

export default SecurityHealth