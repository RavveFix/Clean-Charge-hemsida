
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white animate-in fade-in duration-500 font-monta">

      {/* ── Page Hero ─────────────────────────────────── */}
      <section className="relative py-28 md:py-36 bg-slate-950 overflow-hidden">
        {/* Green glow */}
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-cc-green/20 rounded-full blur-[200px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cc-green/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contact-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 bg-cc-green/10 text-cc-green px-5 py-2.5 rounded-full border border-cc-green/20 mb-10">
              <MessageSquare className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Vi finns här för dig</span>
            </div>
            <h1 className="text-6xl md:text-[7rem] font-black text-white tracking-tighter leading-[0.88] uppercase mb-8">
              Kom i<br />
              <span className="text-cc-green">Kontakt.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
              Oavsett om du representerar en BRF, ett företag eller vill ladda hemma – våra experter hjälper dig hitta rätt lösning.
            </p>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-white/10">
              {[
                { label: 'Svarstid', value: '< 2h' },
                { label: 'Monta Operatörsbetyg', value: '4.6 ★' },
                { label: 'Genomf. laddningar', value: '50 000+' },
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-black text-white tracking-tighter">{s.value}</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 xl:gap-16 items-start">

            {/* Form – 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/60 border border-slate-100">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                    <div className="w-20 h-20 bg-cc-green/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-cc-green" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-3xl font-black text-slate-800 tracking-tight">Tack för ditt meddelande!</h2>
                      <p className="text-slate-500 font-medium max-w-sm">Vi återkommer inom 2 timmar under kontorstid. Du kan även nå oss direkt på telefon.</p>
                    </div>
                    <a href="tel:0197604290" className="inline-flex items-center gap-3 bg-cc-green text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all">
                      <Phone className="w-4 h-4" />
                      Ring oss nu
                    </a>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-1">Skicka ett meddelande</h2>
                      <p className="text-slate-400 text-sm font-medium">Fyll i formuläret så hör vi av oss inom kort.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      {[
                        { id: 'name', label: 'Namn', type: 'text', placeholder: 'Förnamn Efternamn' },
                        { id: 'phone', label: 'Telefon', type: 'tel', placeholder: '070 - 123 45 67' },
                      ].map(({ id, label, type, placeholder }) => (
                        <div key={id} className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{label}</label>
                          <input
                            id={id}
                            type={type}
                            placeholder={placeholder}
                            onFocus={() => setFocused(id)}
                            onBlur={() => setFocused(null)}
                            className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 font-medium text-slate-800 focus:outline-none transition-all duration-200 ${focused === id ? 'border-cc-green bg-white shadow-md shadow-cc-green/10' : 'border-slate-100'}`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">E-post</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="namn@exempel.se"
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 font-medium text-slate-800 focus:outline-none transition-all duration-200 ${focused === 'email' ? 'border-cc-green bg-white shadow-md shadow-cc-green/10' : 'border-slate-100'}`}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Ärende</label>
                      <select
                        id="subject"
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 font-medium text-slate-800 focus:outline-none transition-all duration-200 appearance-none cursor-pointer ${focused === 'subject' ? 'border-cc-green bg-white' : 'border-slate-100'}`}
                      >
                        <option>Offertförfrågan Laddboxar</option>
                        <option>Service & Support</option>
                        <option>Samarbete / Återförsäljare</option>
                        <option>Övrigt</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Meddelande</label>
                      <textarea
                        id="message"
                        placeholder="Berätta mer om ditt behov..."
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 font-medium text-slate-800 h-36 resize-none focus:outline-none transition-all duration-200 ${focused === 'message' ? 'border-cc-green bg-white shadow-md shadow-cc-green/10' : 'border-slate-100'}`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-cc-green transition-all duration-300 shadow-lg hover:shadow-cc-green/25 flex items-center justify-center space-x-3 group active:scale-95"
                    >
                      <span>Skicka Meddelande</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Cards – 2 cols */}
            <div className="lg:col-span-2 space-y-5">

              {/* Quick contact cards */}
              {[
                {
                  icon: Phone,
                  title: 'Ring oss direkt',
                  content: '019-760 42 90',
                  sub: 'Vardagar 09:00–17:00',
                  action: 'tel:0197604290',
                },
                {
                  icon: Mail,
                  title: 'Mejla oss',
                  content: 'info@cleancharge.se',
                  sub: 'Svar inom 2 timmar',
                  action: 'mailto:info@cleancharge.se',
                },
                {
                  icon: MapPin,
                  title: 'Huvudkontor',
                  content: 'Dialoggatan 12B',
                  sub: '703 74 Örebro',
                  action: 'https://maps.google.com/?q=Dialoggatan+12B+Örebro',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.action}
                  target={item.action.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-cc-green/30 hover:shadow-xl hover:shadow-cc-green/5 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cc-green/8 flex items-center justify-center shrink-0 text-cc-green group-hover:bg-cc-green group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-800 group-hover:text-cc-green transition-colors">{item.title}</h3>
                    <p className="text-base font-bold text-slate-700">{item.content}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-cc-green ml-auto shrink-0 group-hover:translate-x-1 transition-all" />
                </a>
              ))}

              {/* Personal contact */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-cc-green/30 hover:shadow-xl hover:shadow-cc-green/5 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-cc-green" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-cc-green mb-1">Delägare</p>
                    <h3 className="text-base font-black text-slate-900 mb-3">Ravon Eric Albin Strawder</h3>
                    <div className="space-y-2">
                      <a href="tel:0722110026" className="flex items-center gap-3 text-slate-500 hover:text-cc-green transition-colors text-sm font-bold">
                        <Phone className="w-3.5 h-3.5" />
                        072-211 00 26
                      </a>
                      <a href="mailto:ravon.strawder@cleancharge.se" className="flex items-center gap-3 text-slate-500 hover:text-cc-green transition-colors text-sm font-bold">
                        <Mail className="w-3.5 h-3.5" />
                        ravon.strawder@cleancharge.se
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time promise */}
              <div className="bg-cc-green text-white p-6 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex items-center gap-4">
                  <Clock className="w-8 h-8 text-white/80 shrink-0" />
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-1">Vårt löfte</p>
                    <p className="font-black text-lg leading-tight">Svar inom 2 timmar<br /><span className="font-medium text-sm opacity-80">under kontorstid</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
