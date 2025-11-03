import { useState, FormEvent, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { FloatingInput } from "@/components/FloatingInput";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: signup, 2: verify email, 3: success
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(3);

  const validateEmail = (v: string) => {
    return v.includes('@') && v.includes('.');
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/food-ordering');
      }
    };
    checkUser();
  }, [navigate]);

  const handleSignupNext = async (e: FormEvent) => {
    e.preventDefault();
    setSignupError("");

    if (!signupName.trim()) {
      setSignupError('Please enter your name');
      return;
    }
    if (!validateEmail(signupEmail)) {
      setSignupError('Please enter a valid email');
      return;
    }
    if (signupPassword.length < 6) {
      setSignupError('Password must be at least 6 characters');
      return;
    }
    if (!agreeTerms) {
      setSignupError('Please agree to the terms');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupEmail,
        password: signupPassword,
        options: {
          data: {
            full_name: signupName
          },
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        if (error.message.includes('already registered')) {
          setSignupError('This email is already registered. Please sign in instead.');
        } else {
          setSignupError(error.message);
        }
        return;
      }

      if (data.user) {
        setStep(2); // Move to email verification step
      }
    } catch (error: any) {
      setSignupError('An error occurred during signup. Please try again.');
    }
  };

  const handleVerifyEmail = (e: FormEvent) => {
    e.preventDefault();
    // For demo purposes, accept any code
    if (verificationCode.length >= 4) {
      setStep(3); // Move to success screen
    }
  };

  useEffect(() => {
    if (step === 3) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            toast.success('Account created successfully!', { duration: 500 });
            navigate('/food-ordering');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step, navigate]);

  return (
    <div className="min-h-screen bg-white text-foreground font-body flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 h-16 bg-primary">
        <div className="w-full px-5 h-full flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </button>

          <div className="w-6"></div>

          <div className="text-lg font-heading text-white flex items-center">
            <span className="font-bold">Trovii</span>
            <span className="ml-1 font-body font-light text-white/90 text-xs tracking-tight">
              studsuit
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-24 px-5 flex items-start justify-center min-h-screen">
        <div className="w-full max-w-md bg-card rounded-2xl p-6 md:p-8" style={{ boxShadow: '0 8px 30px -10px hsl(348 83% 47% / 0.15), 0 2px 15px -4px hsl(348 83% 47% / 0.1)' }}>
          
          {/* Step 1: Signup Form */}
          {step === 1 && (
            <>
              <div className="mb-5 md:mb-6 text-center">
                <h1 className="text-xl md:text-2xl font-heading font-bold text-primary">
                  Create your account
                </h1>
              </div>

              <form onSubmit={handleSignupNext} className="space-y-5 md:space-y-6">
                <FloatingInput
                  label="Full Name"
                  reversePlaceholder="John Doe"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  error={signupError.includes('name')}
                />

                <FloatingInput
                  label="Email"
                  reversePlaceholder="you@school.edu"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  error={signupError.includes('email')}
                  type="email"
                />

                <div className="relative">
                  <FloatingInput
                    label="Create password"
                    reversePlaceholder="At least 6 characters"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    error={signupError.includes('Password')}
                    type={passwordVisible ? 'text' : 'password'}
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground z-10"
                  >
                    {passwordVisible ? 'Hide' : 'Show'}
                  </button>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="tos"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 accent-green-500"
                  />
                  <label htmlFor="tos" className="text-sm text-foreground">
                    I agree to the{' '}
                    <a href="#" className="text-secondary font-medium hover:underline">
                      Terms
                    </a>{' '}
                    &{' '}
                    <a href="#" className="text-secondary font-medium hover:underline">
                      Privacy
                    </a>
                  </label>
                </div>

                {signupError && <div className="text-sm text-destructive">{signupError}</div>}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-primary-foreground bg-primary font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Continue
                </button>

                <div className="text-center text-sm">
                  <span className="text-muted-foreground">
                    Already have an account?{' '}
                    <a href="/signin" className="text-secondary font-bold hover:underline">
                      Sign In
                    </a>
                  </span>
                </div>
              </form>
            </>
          )}

          {/* Step 2: Email Verification */}
          {step === 2 && (
            <>
              <div className="mb-5 md:mb-6 text-center">
                <h1 className="text-xl md:text-2xl font-heading font-bold text-primary">
                  Verify your email
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enter the verification code sent to {signupEmail}
                </p>
              </div>

              <form onSubmit={handleVerifyEmail} className="space-y-5 md:space-y-6">
                <FloatingInput
                  label="Verification Code"
                  reversePlaceholder="Enter code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  type="text"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-primary-foreground bg-primary font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </form>
            </>
          )}

          {/* Step 3: Success Screen */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-[#FF9F43] flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl font-heading font-bold text-foreground mb-6">
                {signupName}, Your account has been created!
              </h1>

              <p className="text-muted-foreground mb-8">
                You'll be redirected in <span className="text-[#FF9F43] font-semibold">{countdown} seconds</span>
              </p>

              <button
                onClick={() => {
                  toast.success('Account created successfully!', { duration: 500 });
                  navigate('/food-ordering');
                }}
                className="w-full py-3 rounded-xl text-white bg-[#FF9F43] font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Get started
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Signup;
