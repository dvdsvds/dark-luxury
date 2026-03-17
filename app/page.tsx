"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

const menu = {
  signature: [
    { name: "Black Gold Espresso", price: "9,000", desc: "더블 리스트레토, 24k 골드 플레이크" },
    { name: "Noir Cold Brew", price: "12,000", desc: "24시간 콜드 브루, 스모크드 바닐라" },
    { name: "Royal Matcha", price: "13,000", desc: "말차 프리미엄, 샴페인 폼" },
  ],
  dessert: [
    { name: "Dark Truffle Cake", price: "15,000", desc: "72% 다크 초콜릿, 에디블 골드" },
    { name: "Noir Crème Brûlée", price: "12,000", desc: "바닐라 빈, 카라멜리제 슈거" },
  ],
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [tab, setTab] = useState<"signature" | "dessert">("signature");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "1.5rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: scrolled ? "rgba(12,12,12,0.95)" : "transparent", borderBottom: scrolled ? "1px solid var(--border)" : "none", transition: "all 0.4s" }}>
        <div style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "1.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>NOIR</div>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["Menu", "#menu"], ["About", "#about"], ["Reserve", "#reservation"], ["Visit", "#location"]].map(([l, h]) => (
            <li key={l}><a href={h} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", color: "var(--muted)", transition: "color 0.3s" }}>{l}</a></li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", overflow: "hidden", padding: "6rem 2rem" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, #1a1200 0%, #0c0c0c 70%)" }} />
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.12)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "2.5rem" }}>
            ✦ Premium Coffee Experience ✦
          </motion.div>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}
            style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "clamp(4rem,9vw,8rem)", fontWeight: 400, lineHeight: 0.95, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
            <span style={{ display: "block" }}>The Art</span>
            <span style={{ display: "block", fontStyle: "italic", color: "var(--gold)" }}>of Coffee</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8 }}
            style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.9, maxWidth: 420, margin: "0 auto 3rem", letterSpacing: "0.05em" }}>
            A sanctuary for those who appreciate the finer details. Every cup, a masterpiece.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }} style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="#reservation" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s" }}>Reserve a Table</a>
            <a href="#menu" style={{ display: "inline-block", color: "var(--muted)", padding: "0.9rem 2.5rem", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>View Menu</a>
          </motion.div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ background: "var(--surface)", padding: "8rem 4rem" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.5rem" }}>— Curated Selections —</div>
            <h2 style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "clamp(2.5rem,4vw,3.5rem)" }}>The Menu</h2>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginBottom: "4rem", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
            {(["signature", "dessert"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ background: "none", border: "none", color: tab === t ? "var(--gold)" : "var(--muted)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer", paddingBottom: "0.5rem", borderBottom: tab === t ? "1px solid var(--gold)" : "1px solid transparent" }}>
                {t === "signature" ? "Signature" : "Dessert"}
              </button>
            ))}
          </div>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {menu[tab].map((item, i) => (
              <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "start", padding: "2rem 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <div style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "1.2rem", marginBottom: "0.4rem" }}>{item.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--muted)", letterSpacing: "0.05em" }}>{item.desc}</div>
                </div>
                <div style={{ color: "var(--gold)", fontSize: "0.9rem", whiteSpace: "nowrap", marginLeft: "2rem" }}>₩{item.price}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "8rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
        <FadeUp>
          <div style={{ position: "relative" }}>
            <div style={{ background: "linear-gradient(135deg,#1a1200,#2a1f00)", border: "1px solid var(--gold)", height: 480, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "5rem", color: "rgba(201,168,76,0.15)", fontStyle: "italic" }}>NOIR</div>
            </div>
            <div style={{ position: "absolute", bottom: "-2rem", right: "-2rem", background: "var(--gold)", width: 120, height: 120, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
              <div style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "2rem", color: "#0c0c0c" }}>VII</div>
              <div style={{ fontSize: "0.6rem", color: "#0c0c0c", letterSpacing: "0.1em" }}>YEARS</div>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "2rem" }}>Our Philosophy</div>
          <h2 style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "clamp(2rem,3vw,2.8rem)", lineHeight: 1.2, marginBottom: "1.5rem" }}>Excellence in<br /><em>every detail.</em></h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "var(--muted)", marginBottom: "1.5rem" }}>We believe coffee is not merely a beverage — it is an art form. Every bean is selected, every extraction is measured, every cup is crafted with intention.</p>
          <div style={{ border: "1px dashed rgba(201,168,76,0.3)", padding: "1.5rem", textAlign: "center", fontSize: "0.75rem", color: "var(--muted)" }}>[ 소개 내용 입력 공간 ]</div>
        </FadeUp>
      </section>

      {/* RESERVATION */}
      <section id="reservation" style={{ background: "var(--surface)", padding: "8rem 4rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 650, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.5rem" }}>— Private Dining —</div>
              <h2 style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "clamp(2.5rem,4vw,3.5rem)" }}>Reserve Your<br /><em>Table</em></h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[["Name", "text", "Your name"], ["Phone", "tel", "010-0000-0000"], ["Date", "date", ""], ["Guests", "text", "2 guests"]].map(([l, t, p]) => (
                <div key={l} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>{l}</label>
                  <input type={t} placeholder={p} style={{ background: "transparent", border: "none", borderBottom: "1px solid var(--border)", color: "var(--white)", padding: "0.75rem 0", fontFamily: "'Didact Gothic',sans-serif", fontSize: "0.9rem", outline: "none", colorScheme: "dark" }} />
                </div>
              ))}
              <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>Special Requests</label>
                <textarea rows={3} style={{ background: "transparent", border: "none", borderBottom: "1px solid var(--border)", color: "var(--white)", padding: "0.75rem 0", fontFamily: "'Didact Gothic',sans-serif", fontSize: "0.9rem", outline: "none", resize: "none" }} />
              </div>
              <button type="submit" style={{ gridColumn: "1/-1", marginTop: "1.5rem", padding: "1.1rem", background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "'Didact Gothic',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s" }}>
                {submitted ? "✦ Confirmed ✦" : "Request Reservation"}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" style={{ padding: "8rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <FadeUp>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "2rem" }}>Find Us</div>
          <h2 style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "clamp(2rem,3vw,2.8rem)", marginBottom: "3rem" }}>Visit NOIR</h2>
          {[{ l: "Address", v: "서울 어딘가\n조용한 골목 안" }, { l: "Hours", v: "Tue – Sun\n14:00 – 23:00" }, { l: "Reservations", v: "02-000-0000" }].map(({ l, v }) => (
            <div key={l} style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>{l}</div>
              <div style={{ fontSize: "1rem", color: "var(--white)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{v}</div>
            </div>
          ))}
        </FadeUp>
        <FadeUp delay={0.2}>
          <div style={{ background: "linear-gradient(135deg,#1a1200,#0c0c0c)", border: "1px solid var(--border)", height: 380, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.15)" }} />
            <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
              <div style={{ width: 12, height: 12, background: "var(--gold)", borderRadius: "50%", margin: "0 auto 1rem" }} />
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--gold)" }}>NOIR · Seoul</div>
            </div>
          </div>
        </FadeUp>
      </section>

      <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "2.5rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--muted)", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
        <div style={{ fontFamily: "'Bodoni Moda',serif", fontSize: "1.2rem", color: "var(--gold)", letterSpacing: "0.3em" }}>NOIR</div>
        <div>© 2024 NOIR Coffee House</div>
      </footer>
    </>
  );
}
