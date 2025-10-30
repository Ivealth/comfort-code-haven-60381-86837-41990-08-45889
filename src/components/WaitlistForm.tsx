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
    <section id="waitlist" className="mt-6">
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-blue-glow">
        <div className="mb-4 md:mb-5 text-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Join the Waitlist</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Be among the first to experience the future of campus collaboration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          <div>
            <label htmlFor="email" className="text-sm text-foreground mb-2 block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.edu"
              className="w-full text-sm font-body px-4 py-3 rounded-xl border border-input bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="university" className="text-sm text-foreground mb-2 block font-medium">
              University
            </label>
            <input
              id="university"
              type="text"
              required
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="Your University"
              className="w-full text-sm font-body px-4 py-3 rounded-xl border border-input bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="pain" className="text-sm text-foreground mb-2 block font-medium">
              What's your biggest campus headache?
            </label>
            <textarea
              id="pain"
              rows={3}
              required
              value={painPoint}
              onChange={(e) => setPainPoint(e.target.value)}
              placeholder="Tell us what challenges you're facing..."
              className="w-full text-sm font-body px-4 py-3 rounded-xl border border-input bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-primary-foreground bg-primary font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Sign Me Up
            </button>
          </div>

          <div className="text-sm text-center text-muted-foreground">
            Spots filling fast – only{' '}
            <span className="font-semibold text-foreground">{spotsLeft}</span> left!
          </div>

          {error && <div className="text-sm text-destructive text-center">{error}</div>}
          {success && <div className="text-sm text-green-600 text-center">{success}</div>}
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
