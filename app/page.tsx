import Link from 'next/link'
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Psychotherapy Practice
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground mb-8 text-balance">
              Find your roots.
              <br />
              <span className="italic">Embrace reflection.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
              A safe space for healing and growth. We offer compassionate, 
              evidence-based therapy to help you navigate life&apos;s challenges 
              and discover your authentic self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-lg"
              >
                Begin Your Journey
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded-full hover:bg-secondary transition-colors text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  Our Approach to <span className="italic">Healing</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Root & Reflect, we believe that true healing begins with understanding. 
                  Our therapeutic approach combines evidence-based practices with deep 
                  compassion, creating a nurturing environment where you can explore your 
                  inner world safely.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We work collaboratively with you to uncover the roots of your challenges 
                  and develop meaningful insights that lead to lasting change.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  Learn About Our Practice
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '10+', label: 'Years Experience' },
                  { number: '500+', label: 'Clients Helped' },
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '3', label: 'Licensed Therapists' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card p-8 rounded-2xl border border-border">
                    <p className="text-3xl md:text-4xl font-light text-primary mb-2">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                How We Can <span className="italic">Help</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a range of therapeutic services tailored to meet your unique needs 
                and support your journey toward wellness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: 'Individual Therapy',
                  description: 'One-on-one sessions focused on your personal growth, healing, and self-discovery in a supportive environment.',
                },
                {
                  icon: Heart,
                  title: 'Couples Therapy',
                  description: 'Strengthen your relationship through improved communication, deeper understanding, and renewed connection.',
                },
                {
                  icon: Sparkles,
                  title: 'Trauma-Informed Care',
                  description: 'Gentle, specialized support for processing difficult experiences and reclaiming your sense of safety.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
                >
                  <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-medium text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Begin?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Taking the first step toward therapy is an act of courage. 
              We&apos;re here to walk alongside you on your journey to healing.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full hover:bg-background/90 transition-colors text-lg"
            >
              Schedule a Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
