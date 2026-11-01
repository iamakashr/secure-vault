const textColors = {
  accent: "text-accent",
  good: "text-good",
  danger: "text-danger",
  default: "text-text",
};

const StatCard = ({ title, value, Description, color = "default" }) => {
  const activeTextColor = textColors[color] || textColors.default;
  return (
    <div className="inline-block  rounded-xl border border-border bg-bg-tertiary px-6 py-4 text-left! ">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className={`mt-2 text-4xl font-bold ${activeTextColor}`}>
        {value}{" "}
        <span className="mt-1 text-xs text-gray-500 font-normal">
          {Description}
        </span>
      </p>
    </div>
  );
};

export default StatCard;
