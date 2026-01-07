import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";

export default function AuthPage() {
  return (
    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* LOGIN */}
      <div className="shadow rounded-lg overflow-hidden">
        <img
          src="/assets/img/banner/login-bg.jpg" 
          className="w-full h-60 object-cover"
          alt=""
        />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Login Here</h2>
          <p className="text-sm text-gray-500 mb-4">
            Your personal data will be used...
          </p>

          <LoginForm />
        </div>
      </div>

      {/* REGISTER */}
      <div className="shadow rounded-lg overflow-hidden">
        <img
          src="/assets/img/banner/sign-bg.jpg" 
          className="w-full h-60 object-cover"
          alt=""
        />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Sign Up</h2>
          <p className="text-sm text-gray-500 mb-4">
            Your personal data will be used...
          </p>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
