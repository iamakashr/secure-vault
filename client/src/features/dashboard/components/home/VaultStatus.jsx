import React from 'react'

const VaultStatus = () => {
  return (
    <>
      <div className=" col-span-5 flex flex-col justify-between rounded-xl border border-border bg-bg-tertiary p-6">
        <div>
          <h2 className="text-lg font-semibold text-text">Vault status</h2>

          <div className="mt-4 divide-y divide-border-soft">
            {/* Status */}
            <div className="flex justify-between py-4 text-base">
              <span className="text-text-dim">Status</span>
              <span className="flex items-center gap-2 font-semibold text-text">
                <span className="h-2.5 w-2.5 rounded-full bg-danger" />
                Locked
              </span>
            </div>

            <div className="flex justify-between py-4 text-base">
              <span className="text-text-dim">Auto-lock</span>
              <span className="font-medium text-text">
                After 5 minutes idle
              </span>
            </div>

            <div className="flex justify-between py-4 text-base">
              <span className="text-text-dim">Last unlocked</span>
              <span className="text-text">—</span>
            </div>

            <div className="flex justify-between py-4 text-base">
              <span className="text-text-dim">Two-factor</span>
              <span className="font-medium text-good">Enabled</span>
            </div>

            <div className="flex justify-between py-4 text-base">
              <span className="text-text-dim">Encryption</span>
              <span className="font-mono text-sm text-text">AES-256</span>
            </div>
          </div>
        </div>

        {/* Unlock Button */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-border py-4 text-sm font-semibold text-text transition hover:border-border-intense hover:bg-bg-secondary ">
          <span>🔒</span>
          Unlock vault
        </button>
      </div>
    </>
  );
}

export default VaultStatus