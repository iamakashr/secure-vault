import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

const CenteredAuthLayout = ({ children, topRight }) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-bg text-text">
      {/* Header */}
      <AuthHeader rightContent={topRight} />

      {/* Content */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <AuthFooter />
    </div>
  );
};

export default CenteredAuthLayout;
