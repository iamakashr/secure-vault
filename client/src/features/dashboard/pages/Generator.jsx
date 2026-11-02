import { useState } from "react";
import { RefreshCw, Copy } from "lucide-react";

const Generator = () => {
  const strengthPercentage = 60;
  const [length, setLength] = useState(8);

  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const characterOptions = [
    {
      key: "uppercase",
      title: "Uppercase",
      description: "A–Z",
    },
    {
      key: "lowercase",
      title: "Lowercase",
      description: "a–z",
    },
    {
      key: "numbers",
      title: "Numbers",
      description: "0–9",
    },
    {
      key: "symbols",
      title: "Symbols",
      description: "!@#$",
    },
  ];

  const handleToggle = (key) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <>
      {/* HEADER SECTION */}
      <div className="text-center mb-7">
        <h1 className="text-4xl font-extrabold text-text">
          Password generator
        </h1>

        <p className="text-text-dim text-sm">
          Create a strong, random password in one click.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="mx-auto flex w-full border border-border bg-bg-tertiary rounded-2xl max-w-110 flex-col gap-5 p-7">
        {/* DISPLAY BLOCK*/}
        <div className="mb-4 flex items-center justify-between bg-bg border px-5 py-5 rounded-xl border-border  ">
          <code
            className="max-h-[4.2em]
              min-w-0 flex-1
              overflow-y-auto
              break-all
              font-mono text-2xl
              leading-[1.4]
              tracking-wide
              text-text">
            SemS#DH8
          </code>
          <button className="border border-border bg-bg-tertiary px-3 py-3 rounded-xl">
            <RefreshCw size={19} />
          </button>
        </div>

        {/* STRENGTH METER */}
        <div className="flex flex-col gap-1">
          <div className="h-3 border border-border bg-bg-secondary rounded-xl">
            <div
              className="h-full bg-danger rounded-xl transition-all duration-300 ease-out"
              style={{ width: `${strengthPercentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <h3 className="font-extrabold text-sm text-danger">Weak</h3>
            <p className="text-text-dim text-xs font-medium">
              49 bits of entropy
            </p>
          </div>
        </div>

        {/* CONTROLS BLOCK */}
        <div className="flex items-center justify-center gap-4">
          <label
            htmlFor="password-length"
            className="text-sm font-semibold text-text-dim">
            Length
          </label>

          {/* SLIDER INPUT */}
          <input
            id="password-length"
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full flex-1 cursor-pointer"
          />

          {/* DISPLAY OUTPUT*/}
          <output className="border border-border bg-bg w-14 text-center py-2 rounded-xl">
            {length}
          </output>
        </div>

        {/* CHARACTER TYPE TOGGLES */}
        <div className="grid grid-cols-2 gap-3">
          {characterOptions.map((option) => (
            <label
              key={option.key}
              className="
                flex cursor-pointer
                items-center justify-between
                gap-2
                rounded-xl
                border border-border
                p-4
                transition-colors
                hover:border-border-intense
              ">
              <div className="flex flex-col gap-1">
                <span className="text-text font-bold">{option.title}</span>
                <span className="text-xs text-text-dim">
                  {option.description}
                </span>
              </div>

              <input
                type="checkbox"
                checked={options[option.key]}
                onChange={() => handleToggle(option.key)}
                className="sr-only"
              />

              <div
                className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors duration-200
      ${options[option.key] ? "bg-accent" : "bg-bg-secondary"}
    `}>
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out
        ${options[option.key] ? "translate-x-5" : "translate-x-0"}
      `}></div>
              </div>
            </label>
          ))}
        </div>

        {/* PASSWORD ACTION BUTTONS */}
        <div className="mt-2 flex items-center justify-center gap-3 ">
          <button className=" bg-accent text-base font-medium text-black  rounded-xl py-3 px-8 hover:brightness-110 ">
            Copy password
          </button>
          <button className="border border-border text-base font-medium bg-bg-tertiary rounded-xl py-3 px-6 hover:border-border-intense">
            Save as new login
          </button>
        </div>
      </div>
    </>
  );
};

export default Generator;
