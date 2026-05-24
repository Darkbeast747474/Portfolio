import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, text: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, text: "" });

    // Client-side validations
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({ type: "error", text: "All fields are required." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          text:
            data.message ||
            "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          text: data.message || "Failed to send the message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        text: "Could not connect to the server. Please verify your connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-6 relative z-10">
      <div className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl w-full text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>

        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>
          <Mail className="w-8 h-8 text-primary relative z-10" />
        </div>
        <h2 className="text-4xl md:text-6xl font-display tracking-widest uppercase mb-2 text-white">
          Let's Work Together
        </h2>
        <p className="text-slate-400 font-body text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
          Need custom dashboards, statistical analytics, or automated ETL
          pipelines? Drop me a message and let's collaborate!
        </p>

        {status.text && (
          <div
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-left backdrop-blur-md ${
              status.type === "success"
                ? "bg-emerald-500/5 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                : "bg-rose-500/5 border border-rose-500/30 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
            )}
            <p className="text-xs font-tech font-bold uppercase tracking-wider">
              {status.text}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full h-12 glass-input rounded-xl px-4 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-body"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@example.com"
                className="w-full h-12 glass-input rounded-xl px-4 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-body"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Collaboration Inquiry"
              className="w-full h-12 glass-input rounded-xl px-4 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-body"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[10px] font-tech font-bold text-slate-500 uppercase tracking-widest mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Hi Deepak, I would love to build an e-commerce BI pipeline..."
              className="w-full glass-input rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-body resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 bg-gradient-to-r from-primary to-cyan-400 text-black font-tech font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:scale-[1.01] active:scale-95 disabled:opacity-40 disabled:scale-100 disabled:hover:shadow-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 text-black" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
