
const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen">
        <div className="flex-1">
        {children}
        </div>

      <div className="auth-side-image flex-[1.1] rounded-3xl">
       
      </div>
    </div>
  );
};

export default AuthLayout;
