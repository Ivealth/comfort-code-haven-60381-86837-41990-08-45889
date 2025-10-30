import { useState, FormEvent } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [painPoint, setPainPoint] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [spotsLeft, setSpotsLeft] = useState(118);

  const validateEmail = (v: string) => {
    return v.includes('@') && v.includes('.');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    if (!university.trim()) {
      setError('Please provide your university.');
      return;
    }

    if (!painPoint.trim()) {
      setError('Please tell us your biggest campus headache.');
      return;
    }

    setSuccess("Thanks — you're on the list! We'll email you soon.");
    setEmail("");
    setUniversity("");
    setPainPoint("");
    setSpotsLeft((s) => Math.max(0, s - 1));
  };

  return (
    <section id="waitlist" className="mt-12">
      <div className="bg-card rounded-2xl p-8 md:p-10 shadow-blue-glow border border-border/30">
        <div className="mb-6 md:mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight">Join the Waitlist</h3>
          <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
            Be among the first to experience the future of campus collaboration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          <div>
            <label htmlFor="email" className="text-sm md:text-base text-foreground mb-2 block font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.edu"
              className="w-full text-base font-body px-5 py-3.5 rounded-xl border-2 border-input bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="university" className="text-sm md:text-base text-foreground mb-2 block font-semibold">
              University
            </label>
            <input
              id="university"
              type="text"
              required
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="Your University"
              className="w-full text-base font-body px-5 py-3.5 rounded-xl border-2 border-input bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="pain" className="text-sm md:text-base text-foreground mb-2 block font-semibold">
              What's your biggest campus headache?
            </label>
            <textarea
              id="pain"
              rows={4}
              required
              value={painPoint}
              onChange={(e) => setPainPoint(e.target.value)}
              placeholder="Tell us what challenges you're facing..."
              className="w-full text-base font-body px-5 py-3.5 rounded-xl border-2 border-input bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none transition-all"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-primary-foreground bg-primary font-bold text-base hover:bg-primary/90 transition-all duration-200 hover:shadow-lg"
            >
              Sign Me Up
            </button>
          </div>

          <div className="text-base text-center text-muted-foreground">
            Spots filling fast – only{' '}
            <span className="font-bold text-foreground">{spotsLeft}</span> left!
          </div>

          {error && <div className="text-base text-destructive text-center font-medium">{error}</div>}
          {success && <div className="text-base text-green-600 text-center font-semibold">{success}</div>}
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
