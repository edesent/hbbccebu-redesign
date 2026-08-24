import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Church,
  Clock3,
  ExternalLink,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Inter, Libre_Baskerville, Oswald } from "next/font/google";

const childrenClass = "/hbbccebu-redesign/children-class.jpg";
const childrenOutreach = "/hbbccebu-redesign/children-outreach.jpg";
const churchFamily = "/hbbccebu-redesign/church-family.jpg";
const pastorAlba = "/hbbccebu-redesign/pastor-alba.jpg";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-label",
});

const SERIF = "[font-family:var(--font-serif)]";
const LABEL = "[font-family:var(--font-label)]";

export const metadata = {
  title: "Home Bible Baptist Church Cebu - Redesign Concept",
  description:
    "A modern website redesign concept for Home Bible Baptist Church of Cebu City, preserving its gospel message, history, schedule, and children's ministry.",
  robots: { index: false, follow: false },
};

const LINKS = {
  current: "https://hbbccebu.weebly.com/",
  history: "https://hbbccebu.weebly.com/history.html",
  beliefs: "https://hbbccebu.weebly.com/belief.html",
  schedule: "https://hbbccebu.weebly.com/schedule-of-church-services.html",
  feeding: "https://hbbccebu.weebly.com/childrens-feeding.html",
  contact: "https://hbbccebu.weebly.com/contact-us.html",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Castle+Peak+Hotel+F.+Cabahug+Street+Cebu+City",
  email: "mailto:hbbccebu@yahoo.com",
  phone: "tel:+63323840761",
  mobile: "tel:+639688988353",
};

const NAV = [
  { href: "#visit", label: "Visit" },
  { href: "#services", label: "Services" },
  { href: "#gospel", label: "Gospel" },
  { href: "#outreach", label: "Outreach" },
  { href: "#contact", label: "Contact" },
];

const SERVICE_TIMES = [
  { day: "Sunday", time: "9:00 AM", title: "Men's Prayer" },
  { day: "Sunday", time: "9:00 AM", title: "Children Sunday School" },
  { day: "Sunday", time: "9:30 AM", title: "Adults Sunday School" },
  { day: "Sunday", time: "10:45 AM", title: "Worship Service" },
  { day: "Sunday", time: "6:30 PM", title: "Evening Service" },
  { day: "Wednesday", time: "6:30 PM", title: "Midweek Service" },
];

const GOSPEL_STEPS = [
  {
    title: "Acknowledge",
    text: "All have sinned and come short of the glory of God. HBBC Cebu keeps that truth clear because grace only shines when the need is honest.",
    verse: "Romans 3:23",
  },
  {
    title: "Believe",
    text: "Christ died for our sins, was buried, and rose again the third day according to the Scriptures.",
    verse: "1 Corinthians 15:1-4",
  },
  {
    title: "Call",
    text: "The invitation is simple and serious: believe on the Lord Jesus Christ and receive Him as Savior.",
    verse: "Romans 10:13",
  },
];

const HISTORY = [
  {
    year: "1996",
    title: "Organized in Cebu City",
    text: "A pioneering work of Pastor Alexis Alba and Ma'am Nenita Labrador Alba was organized into an independent local church on December 15, 1996.",
  },
  {
    year: "2015",
    title: "Faith after demolition",
    text: "After years of forced moves and the loss of rented meeting places, the church kept gathering, praying, and serving.",
  },
  {
    year: "Today",
    title: "Still meeting by grace",
    text: "Sunday worship continues at Castle Peak Hotel while the church prays for a permanent property of its own.",
  },
];

const MINISTRIES = [
  {
    icon: BookOpen,
    title: "Bible classes",
    text: "Children and adults gather around the Scriptures every week before worship.",
    color: "#E7B64B",
  },
  {
    icon: Utensils,
    title: "Children's feeding",
    text: "The church reaches poor families in the community with Bible class and nutritious feeding.",
    color: "#C6533F",
  },
  {
    icon: HeartHandshake,
    title: "Mercy and missions",
    text: "A local church with a Great Commission heart for Cebu and beyond.",
    color: "#1B6B6F",
  },
];

const BELIEFS = [
  "The Holy Bible is the final authority for faith and life.",
  "There is one living and true God: Father, Son, and Holy Spirit.",
  "Salvation is wholly of grace through the finished work of Jesus Christ.",
  "A Baptist church is a congregation of baptized believers in covenant fellowship.",
  "The mission of the church is the Great Commission.",
];

const GALLERY: {
  image: string;
  alt: string;
  title: string;
  text: string;
  className: string;
}[] = [
  {
    image: childrenOutreach,
    alt: "Children from the Cebu outreach ministry smiling together outside",
    title: "Children's outreach",
    text: "Saturday Bible class and care for families in the neighborhood.",
    className: "sm:col-span-2",
  },
  {
    image: pastorAlba,
    alt: "Pastor Alexis Alba standing with another church leader",
    title: "Faithful leadership",
    text: "Pastor Alexis S. Alba, Senior Pastor.",
    className: "",
  },
  {
    image: churchFamily,
    alt: "Home Bible Baptist Church Cebu family gathered in a home",
    title: "Church family",
    text: "A congregation shaped by fellowship, perseverance, and prayer.",
    className: "lg:col-span-2",
  },
  {
    image: childrenClass,
    alt: "A Bible lesson with children seated outside in Cebu City",
    title: "Bible teaching",
    text: "The gospel carried into ordinary streets and homes.",
    className: "",
  },
];

export default function HbbcCebuRedesignPage() {
  return (
    <main
      className={`${inter.variable} ${libre.variable} ${oswald.variable} min-h-screen bg-[#FAF7EF] font-sans text-[#17212B] selection:bg-[#E7B64B] selection:text-[#17212B]`}
    >
      <Header />
      <Hero />
      <SignalBand />
      <VisitSection />
      <ServicesSection />
      <GospelSection />
      <HistorySection />
      <OutreachSection />
      <BeliefsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-[#0F2B34]/90 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
        <Link href="/hbbccebu-redesign" className="flex min-w-0 items-center gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded bg-[#E7B64B] text-[#0F2B34]">
            <Church className="size-6" />
          </span>
          <span className="min-w-0">
            <span className={`${SERIF} block truncate text-lg font-bold text-white`}>
              Home Bible Baptist Church
            </span>
            <span className={`${LABEL} block text-xs font-semibold uppercase text-[#E7B64B]`}>
              Cebu City
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${LABEL} text-sm font-semibold uppercase text-white/72 transition hover:text-white`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.current}
            target="_blank"
            rel="noreferrer"
            className={`${LABEL} hidden h-11 items-center gap-2 rounded border border-white/22 px-4 text-sm font-semibold uppercase text-white transition hover:bg-white hover:text-[#0F2B34] sm:inline-flex`}
          >
            Current Site
            <ExternalLink className="size-4" />
          </a>
          <a
            href="#visit"
            className={`${LABEL} inline-flex h-11 items-center gap-2 rounded bg-[#E7B64B] px-4 text-sm font-semibold uppercase text-[#0F2B34] transition hover:bg-white`}
          >
            Visit
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-[#0F2B34] pt-20 text-white">
      <Image
        src={churchFamily}
        alt="Home Bible Baptist Church Cebu church family gathered together"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0F2B34_0%,rgba(15,43,52,0.9)_39%,rgba(15,43,52,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,43,52,0.12)_0%,rgba(15,43,52,0.2)_52%,#0F2B34_100%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl self-center">
          <p className={`${LABEL} text-sm font-semibold uppercase text-[#E7B64B]`}>
            Independent Baptist Church in Cebu City
          </p>
          <h1 className={`${SERIF} mt-5 text-5xl font-bold leading-[1.02] text-white sm:text-7xl lg:text-8xl`}>
            Home Bible Baptist Church Cebu
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            A gospel-preaching church family serving Cebu through worship, Bible teaching,
            children&apos;s outreach, and steady faith through every season.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#visit"
              className={`${LABEL} inline-flex h-14 items-center justify-center gap-3 rounded bg-[#E7B64B] px-6 text-base font-semibold uppercase text-[#0F2B34] transition hover:bg-white`}
            >
              Plan a Visit
              <Navigation className="size-5" />
            </a>
            <a
              href="#gospel"
              className={`${LABEL} inline-flex h-14 items-center justify-center gap-3 rounded border border-white/32 bg-white/6 px-6 text-base font-semibold uppercase text-white backdrop-blur transition hover:bg-white hover:text-[#0F2B34]`}
            >
              How to Be Saved
              <BookOpen className="size-5" />
            </a>
          </div>
        </div>

        <div className="hidden self-end lg:block">
          <div className="ml-auto max-w-md border border-white/16 bg-white/10 p-4 backdrop-blur-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src={childrenOutreach}
                alt="Children from Home Bible Baptist Church Cebu outreach ministry"
                fill
                sizes="420px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <MiniStat label="Organized" value="1996" />
              <MiniStat label="Sunday worship" value="10:45 AM" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalBand() {
  return (
    <section className="bg-[#0F2B34] text-white">
      <div className="mx-auto grid max-w-7xl border-y border-white/10 px-5 sm:grid-cols-3 lg:px-8">
        <Signal icon={Clock3} label="Sunday Worship" value="10:45 AM" />
        <Signal icon={MapPin} label="Meeting Place" value="Castle Peak Hotel" />
        <Signal icon={Users} label="Ministry" value="Cebu City families" />
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="bg-[#FAF7EF] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <SectionIntro
            kicker="You are welcome"
            title="Worship with us in spirit and in truth."
            text="HBBC Cebu currently meets each Sunday at Castle Peak Hotel, Princeling Hall, 2nd floor, F. Cabahug Street, Cebu City."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKS.maps}
              target="_blank"
              rel="noreferrer"
              className={`${LABEL} inline-flex h-12 items-center gap-2 rounded bg-[#0F2B34] px-5 text-sm font-semibold uppercase text-white transition hover:bg-[#1B6B6F]`}
            >
              Get Directions
              <MapPin className="size-4" />
            </a>
            <a
              href={LINKS.schedule}
              target="_blank"
              rel="noreferrer"
              className={`${LABEL} inline-flex h-12 items-center gap-2 rounded border border-[#17212B]/18 px-5 text-sm font-semibold uppercase text-[#17212B] transition hover:bg-[#E7B64B]`}
            >
              Full Schedule
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoPanel
            icon={CalendarDays}
            title="Sunday Morning"
            text="Prayer, Sunday School, coffee break, and worship service."
            accent="#E7B64B"
          />
          <InfoPanel
            icon={MessageCircle}
            title="Online Streaming"
            text="Services are also streamed through the church Facebook page."
            accent="#1B6B6F"
          />
          <div className="relative min-h-80 overflow-hidden rounded border border-[#17212B]/12 sm:col-span-2">
            <Image
              src={childrenClass}
              alt="Children listening during a Bible class in Cebu City"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
        <div className="bg-[#C6533F] px-5 py-24 text-white lg:px-12">
          <div className="mx-auto max-w-xl">
            <p className={`${LABEL} text-sm font-semibold uppercase text-white/72`}>
              Weekly rhythm
            </p>
            <h2 className={`${SERIF} mt-4 text-5xl font-bold leading-tight sm:text-6xl`}>
              A simple week built around Scripture and prayer.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/82">
              Know where to be and when to arrive, whether you are coming for
              Sunday School, worship, prayer, or the midweek service.
            </p>
          </div>
        </div>
        <div className="grid bg-[#E7B64B] p-5 sm:grid-cols-2 lg:p-8">
          {SERVICE_TIMES.map((service, index) => (
            <article
              key={`${service.day}-${service.time}-${service.title}`}
              className="min-h-48 border border-[#17212B]/15 bg-[#FAF7EF] p-7"
              style={{ backgroundColor: index % 3 === 1 ? "#FFFFFF" : "#FAF7EF" }}
            >
              <p className={`${LABEL} text-sm font-semibold uppercase text-[#1B6B6F]`}>
                {service.day}
              </p>
              <p className={`${SERIF} mt-4 text-4xl font-bold leading-tight text-[#17212B]`}>
                {service.time}
              </p>
              <p className="mt-3 text-base font-semibold text-[#17212B]/72">
                {service.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GospelSection() {
  return (
    <section id="gospel" className="bg-[#0F2B34] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionIntro
            kicker="How you can be saved"
            title="The gospel stays at the center."
            text="HBBC Cebu leads with salvation because every ministry begins with the good news of Jesus Christ."
            dark
          />
          <p className={`${SERIF} max-w-2xl text-2xl font-bold italic leading-snug text-[#E7B64B] lg:ml-auto`}>
            &quot;For by grace are ye saved through faith; and that not of yourselves:
            it is the gift of God.&quot;
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {GOSPEL_STEPS.map((step, index) => (
            <article key={step.title} className="rounded border border-white/12 bg-white/8 p-7">
              <p className={`${LABEL} text-sm font-semibold uppercase text-[#E7B64B]`}>
                0{index + 1}
              </p>
              <h3 className={`${SERIF} mt-5 text-3xl font-bold text-white`}>
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/72">{step.text}</p>
              <p className={`${LABEL} mt-6 text-sm font-semibold uppercase text-white/52`}>
                {step.verse}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="bg-[#FAF7EF] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr]">
        <div>
          <SectionIntro
            kicker="Church history"
            title="A church shaped by grace and perseverance."
            text="From Barangay T. Padilla to temporary meeting places, HBBC Cebu's story is not polished real estate. It is people continuing by God's grace."
          />
          <a
            href={LINKS.history}
            target="_blank"
            rel="noreferrer"
            className={`${LABEL} mt-8 inline-flex h-12 items-center gap-2 rounded bg-[#587A41] px-5 text-sm font-semibold uppercase text-white transition hover:bg-[#0F2B34]`}
          >
            Read Original History
            <ExternalLink className="size-4" />
          </a>
        </div>

        <ol className="grid content-start gap-4">
          {HISTORY.map((item) => (
            <li key={item.year} className="grid gap-5 rounded border border-[#17212B]/12 bg-white p-6 sm:grid-cols-[110px_1fr]">
              <p className={`${LABEL} text-3xl font-bold uppercase text-[#C6533F]`}>
                {item.year}
              </p>
              <div>
                <h3 className={`${SERIF} text-2xl font-bold text-[#17212B]`}>
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#17212B]/68">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function OutreachSection() {
  return (
    <section id="outreach" className="bg-[#E9F0EA] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionIntro
            kicker="Children's ministry"
            title="Reaching families with the gospel and a meal."
            text="The feeding ministry serves children through Bible class and nutritious feeding, depending on the generosity of the church and friends who want to help."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {MINISTRIES.map((ministry) => (
              <article key={ministry.title} className="rounded border border-[#17212B]/12 bg-white p-5">
                <span
                  className="grid size-11 place-items-center rounded text-[#17212B]"
                  style={{ backgroundColor: ministry.color }}
                >
                  <ministry.icon className="size-5 text-white" />
                </span>
                <h3 className={`${SERIF} mt-5 text-2xl font-bold`}>{ministry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#17212B]/68">{ministry.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(280px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item) => (
            <figure
              key={item.title}
              className={`${item.className} group relative min-h-80 overflow-hidden rounded bg-[#0F2B34]`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,43,52,0.02)_0%,rgba(15,43,52,0.84)_100%)]" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className={`${SERIF} text-2xl font-bold`}>{item.title}</p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeliefsSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionIntro
            kicker="Articles of faith"
            title="Historic Baptist convictions, easier to explore."
            text="The church's full statement of faith is long and important. These essentials give visitors a clear starting place for careful reading."
          />
          <a
            href={LINKS.beliefs}
            target="_blank"
            rel="noreferrer"
            className={`${LABEL} mt-8 inline-flex h-12 items-center gap-2 rounded border border-[#17212B]/18 px-5 text-sm font-semibold uppercase text-[#17212B] transition hover:bg-[#E7B64B]`}
          >
            Full Beliefs
            <ExternalLink className="size-4" />
          </a>
        </div>
        <ul className="grid gap-3">
          {BELIEFS.map((belief) => (
            <li key={belief} className="flex gap-4 rounded border border-[#17212B]/10 bg-[#FAF7EF] p-5">
              <span className="mt-1 grid size-8 shrink-0 place-items-center rounded bg-[#1B6B6F] text-white">
                <Sparkles className="size-4" />
              </span>
              <p className="text-lg leading-8 text-[#17212B]/74">{belief}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#0F2B34] text-white">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="px-5 py-24 lg:px-12">
          <div className="mx-auto max-w-xl">
            <p className={`${LABEL} text-sm font-semibold uppercase text-[#E7B64B]`}>
              Cebu City
            </p>
            <h2 className={`${SERIF} mt-4 text-5xl font-bold leading-tight sm:text-6xl`}>
              Come worship with HBBC Cebu this Sunday.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Questions about directions, service times, online streaming, or the
              children&apos;s feeding ministry? Reach out before you come.
            </p>
            <div className="mt-9 grid gap-3">
              <ContactLink
                href={LINKS.maps}
                icon={MapPin}
                label="Castle Peak Hotel, Princeling Hall, 2nd Floor, F. Cabahug Street"
              />
              <ContactLink href={LINKS.phone} icon={Phone} label="+63 32 384 0761" />
              <ContactLink href={LINKS.mobile} icon={Phone} label="+63 968 898 8353" />
              <ContactLink href={LINKS.email} icon={Mail} label="hbbccebu@yahoo.com" />
            </div>
          </div>
        </div>

        <div className="bg-[#1B6B6F] p-5 lg:p-8">
          <div className="relative min-h-[560px] overflow-hidden rounded bg-[#FAF7EF] text-[#17212B]">
            <Image
              src={pastorAlba}
              alt="Pastor Alexis Alba of Home Bible Baptist Church Cebu"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-contain object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,247,239,0.0)_35%,rgba(15,43,52,0.92)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className={`${LABEL} text-sm font-semibold uppercase text-[#E7B64B]`}>
                Senior Pastor
              </p>
              <h3 className={`${SERIF} mt-2 text-4xl font-bold`}>Alexis S. Alba</h3>
              <p className="mt-3 max-w-md leading-7 text-white/76">
                Serving Home Bible Baptist Church of Cebu City with a continuing
                prayer for a permanent church property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#091C22] px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded bg-[#E7B64B] text-[#091C22]">
            <Church className="size-6" />
          </span>
          <div>
            <p className={`${SERIF} text-xl font-bold`}>Home Bible Baptist Church Cebu</p>
            <p className="text-sm text-white/58">Serving Cebu City by the grace of God.</p>
          </div>
        </div>
        <div className={`${LABEL} flex flex-wrap gap-4 text-sm font-semibold uppercase text-white/65`}>
          <a href={LINKS.current} target="_blank" rel="noreferrer" className="hover:text-white">
            Current Site
          </a>
          <a href={LINKS.feeding} target="_blank" rel="noreferrer" className="hover:text-white">
            Feeding Ministry
          </a>
          <a href={LINKS.contact} target="_blank" rel="noreferrer" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionIntro({
  kicker,
  title,
  text,
  dark = false,
}: {
  kicker: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`${LABEL} text-sm font-semibold uppercase ${dark ? "text-[#E7B64B]" : "text-[#C6533F]"}`}>
        {kicker}
      </p>
      <h2 className={`${SERIF} mt-4 text-5xl font-bold leading-tight ${dark ? "text-white" : "text-[#17212B]"} sm:text-6xl`}>
        {title}
      </h2>
      <p className={`mt-6 text-lg leading-8 ${dark ? "text-white/72" : "text-[#17212B]/68"}`}>
        {text}
      </p>
    </div>
  );
}

function Signal({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex min-h-32 items-center gap-4 border-white/10 py-7 sm:border-r sm:last:border-r-0">
      <span className="grid size-12 shrink-0 place-items-center rounded bg-[#E7B64B] text-[#0F2B34]">
        <Icon className="size-5" />
      </span>
      <span>
        <span className={`${LABEL} block text-sm font-semibold uppercase text-white/55`}>
          {label}
        </span>
        <span className={`${SERIF} block text-2xl font-bold text-white`}>{value}</span>
      </span>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded bg-white/12 p-4">
      <p className={`${LABEL} text-xs font-semibold uppercase text-white/56`}>{label}</p>
      <p className={`${SERIF} mt-1 text-2xl font-bold text-white`}>{value}</p>
    </div>
  );
}

function InfoPanel({
  icon: Icon,
  title,
  text,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <article className="rounded border border-[#17212B]/12 bg-white p-7">
      <span className="grid size-12 place-items-center rounded text-white" style={{ backgroundColor: accent }}>
        <Icon className="size-5" />
      </span>
      <h3 className={`${SERIF} mt-7 text-3xl font-bold text-[#17212B]`}>{title}</h3>
      <p className="mt-4 leading-7 text-[#17212B]/68">{text}</p>
    </article>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded border border-white/12 bg-white/8 p-4 transition hover:border-[#E7B64B]/60 hover:bg-white/12"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded bg-[#E7B64B] text-[#0F2B34] transition group-hover:bg-white">
        <Icon className="size-5" />
      </span>
      <span className="text-base font-semibold leading-6 text-white">{label}</span>
    </a>
  );
}
