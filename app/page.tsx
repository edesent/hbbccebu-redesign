import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Church,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";

const childrenClass = "/hbbccebu-redesign/children-class.jpg";
const childrenOutreach = "/hbbccebu-redesign/children-outreach.jpg";
const churchFamily = "/hbbccebu-redesign/church-family.jpg";
const pastorAlba = "/hbbccebu-redesign/pastor-alba.jpg";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const SERIF = "[font-family:var(--font-serif)]";

export const metadata = {
  title: "Home Bible Baptist Church Cebu",
  description:
    "Home Bible Baptist Church of Cebu City. Sunday worship, Bible teaching, children's outreach, and gospel ministry.",
};

const LINKS = {
  current: "https://hbbccebu.weebly.com/",
  history: "https://hbbccebu.weebly.com/history.html",
  beliefs: "https://hbbccebu.weebly.com/belief.html",
  feeding: "https://hbbccebu.weebly.com/childrens-feeding.html",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Castle+Peak+Hotel+F.+Cabahug+Street+Cebu+City",
  email: "mailto:hbbccebu@yahoo.com",
  phone: "tel:+63323840761",
  mobile: "tel:+639688988353",
};

const NAV = [
  { href: "#welcome", label: "Welcome" },
  { href: "#services", label: "Services" },
  { href: "#gospel", label: "Gospel" },
  { href: "#ministries", label: "Ministries" },
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

const BELIEFS = [
  "The Holy Bible is the final authority for faith and life.",
  "There is one living and true God: Father, Son, and Holy Spirit.",
  "Salvation is wholly of grace through the finished work of Jesus Christ.",
  "A Baptist church is a congregation of baptized believers in covenant fellowship.",
  "The mission of the church is the Great Commission.",
];

export default function HomeBibleBaptistChurchPage() {
  return (
    <main
      className={`${serif.variable} ${sans.variable} min-h-screen bg-[#f7f1e6] font-sans text-[#27221d]`}
    >
      <TopBar />
      <Header />
      <Hero />
      <Welcome />
      <ServiceTimes />
      <Gospel />
      <PastorAndHistory />
      <Ministries />
      <Beliefs />
      <Contact />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <div className="border-b border-[#d8c8ac] bg-[#3b241b] px-5 py-2 text-sm text-[#f7f1e6]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>Castle Peak Hotel, Princeling Hall, 2nd Floor, F. Cabahug Street, Cebu City</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={LINKS.phone} className="hover:underline">
            +63 32 384 0761
          </a>
          <a href={LINKS.email} className="hover:underline">
            hbbccebu@yahoo.com
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-[#fbf7ef] px-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 border-b border-[#d8c8ac] py-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-4">
          <span className="grid size-14 shrink-0 place-items-center border-2 border-[#7c2f22] bg-[#fffdf8] text-[#7c2f22]">
            <Church className="size-7" />
          </span>
          <span>
            <span className={`${SERIF} block text-2xl font-bold leading-tight text-[#3b241b]`}>
              Home Bible Baptist Church
            </span>
            <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-[#7c2f22]">
              Cebu City, Philippines
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-semibold uppercase tracking-[0.08em] text-[#3b241b]">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[#7c2f22] hover:underline">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-[#fbf7ef] px-5 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#7c2f22]">
            Independent Baptist Church
          </p>
          <h1 className={`${SERIF} text-5xl font-bold leading-[1.08] text-[#3b241b] sm:text-6xl`}>
            A church home in Cebu City.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#55483d]">
            We are a Bible-believing Baptist church seeking to glorify God,
            preach the gospel of Jesus Christ, and serve families in Cebu by
            the grace of God.
          </p>

          <div className="mt-8 grid max-w-xl gap-3 border border-[#d8c8ac] bg-[#fffdf8] p-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#7c2f22]">
                Sunday Worship
              </p>
              <p className={`${SERIF} mt-1 text-3xl font-bold text-[#3b241b]`}>10:45 AM</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#7c2f22]">
                Meeting Place
              </p>
              <p className="mt-2 font-semibold leading-6 text-[#3b241b]">
                Castle Peak Hotel, Princeling Hall
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center bg-[#7c2f22] px-5 font-semibold text-white hover:bg-[#5f241b]"
            >
              Plan Your Visit
            </a>
            <a
              href={LINKS.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center border border-[#7c2f22] bg-transparent px-5 font-semibold text-[#7c2f22] hover:bg-[#efe3d1]"
            >
              Get Directions
            </a>
          </div>
        </div>

        <figure className="border border-[#d8c8ac] bg-white p-3 shadow-sm">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={churchFamily}
              alt="Home Bible Baptist Church Cebu church family gathered together"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-2 pt-3 text-sm italic text-[#6f6256]">
            A church family continuing in worship, prayer, and fellowship.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section id="welcome" className="border-y border-[#d8c8ac] bg-[#efe3d1] px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <SectionHeading eyebrow="Welcome" title="You are invited to worship with us." />
        <div className="space-y-5 text-lg leading-8 text-[#493d33]">
          <p>
            Whether you are new to church, looking for a church family, or
            visiting Cebu City, we would be glad to have you join us. Our
            services are simple: congregational singing, prayer, fellowship,
            and Bible preaching.
          </p>
          <p>
            Children are welcome, and our church also reaches children and
            families through Bible classes and feeding ministry.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceTimes() {
  return (
    <section id="services" className="bg-[#fbf7ef] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Service Times" title="Weekly services and Bible classes." />
          <a
            href={LINKS.current}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[#7c2f22] hover:underline"
          >
            View current site <ExternalLink className="size-4" />
          </a>
        </div>

        <div className="overflow-hidden border border-[#d8c8ac] bg-white">
          {SERVICE_TIMES.map((service, index) => (
            <div
              key={`${service.day}-${service.time}-${service.title}`}
              className={`grid gap-3 px-5 py-4 sm:grid-cols-[150px_150px_1fr] ${
                index === 0 ? "" : "border-t border-[#e5d8c3]"
              }`}
            >
              <p className="font-bold uppercase tracking-[0.08em] text-[#7c2f22]">{service.day}</p>
              <p className={`${SERIF} text-xl font-bold text-[#3b241b]`}>{service.time}</p>
              <p className="text-lg text-[#493d33]">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gospel() {
  return (
    <section id="gospel" className="bg-[#3b241b] px-5 py-16 text-[#fbf7ef]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#dfc089]">
            The Gospel
          </p>
          <h2 className={`${SERIF} text-4xl font-bold leading-tight sm:text-5xl`}>
            How you can know Christ.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#eadbc6]">
            The most important message of this church is not about a building
            or program. It is the good news that Jesus Christ died for sinners,
            was buried, and rose again.
          </p>
        </div>

        <div className="space-y-5 text-lg leading-8 text-[#f5ead9]">
          <p>
            The Bible says, &quot;For all have sinned, and come short of the glory
            of God.&quot; Sin separates man from God, and no amount of religion or
            good works can save the soul.
          </p>
          <p>
            But God, in mercy, sent His Son. Jesus Christ paid the penalty for
            sin on the cross and rose from the dead. Salvation is by grace
            through faith in Him.
          </p>
          <p className={`${SERIF} border-l-4 border-[#dfc089] pl-5 text-2xl font-bold italic leading-snug text-white`}>
            &quot;Believe on the Lord Jesus Christ, and thou shalt be saved.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

function PastorAndHistory() {
  return (
    <section className="bg-[#fbf7ef] px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <figure className="border border-[#d8c8ac] bg-white p-3 shadow-sm">
          <div className="relative mx-auto aspect-[3/4] max-h-[620px] overflow-hidden bg-[#f7f1e6]">
            <Image
              src={pastorAlba}
              alt="Pastor Alexis Alba of Home Bible Baptist Church Cebu"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="px-2 pt-3 text-sm italic text-[#6f6256]">
            Pastor Alexis S. Alba, Senior Pastor.
          </figcaption>
        </figure>

        <div>
          <SectionHeading eyebrow="Our Story" title="Organized by God's grace in Cebu City." />
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#493d33]">
            <p>
              Home Bible Baptist Church was organized as an independent local
              church on December 15, 1996, through the pioneering work of
              Pastor Alexis Alba and Ma&apos;am Nenita Labrador Alba.
            </p>
            <p>
              The church has passed through seasons of forced moves and the
              loss of rented meeting places, yet the congregation has continued
              gathering, praying, and serving.
            </p>
            <p>
              Today, Sunday worship continues at Castle Peak Hotel while the
              church prays for a permanent property of its own.
            </p>
          </div>
          <a
            href={LINKS.history}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-[#7c2f22] hover:underline"
          >
            Read the church history <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Ministries() {
  return (
    <section id="ministries" className="border-y border-[#d8c8ac] bg-[#efe3d1] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <SectionHeading eyebrow="Ministries" title="Bible teaching, fellowship, and care for children." />
          <p className="mt-5 text-lg leading-8 text-[#493d33]">
            HBBC Cebu serves through ordinary church life: preaching, prayer,
            Sunday School, children&apos;s Bible classes, and feeding ministry for
            families in the community.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <MinistryPhoto
            image={childrenClass}
            title="Children's Bible Class"
            text="Teaching children the Word of God in the community."
          />
          <MinistryPhoto
            image={childrenOutreach}
            title="Children's Feeding"
            text="Serving children and families through Bible class and a meal."
          />
          <MinistryPhoto
            image={churchFamily}
            title="Church Fellowship"
            text="A local congregation continuing together in prayer and love."
          />
        </div>
      </div>
    </section>
  );
}

function MinistryPhoto({ image, title, text }: { image: string; title: string; text: string }) {
  return (
    <article className="border border-[#d8c8ac] bg-white p-3 shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="px-2 py-4">
        <h3 className={`${SERIF} text-2xl font-bold text-[#3b241b]`}>{title}</h3>
        <p className="mt-2 leading-7 text-[#5b4e43]">{text}</p>
      </div>
    </article>
  );
}

function Beliefs() {
  return (
    <section className="bg-[#fbf7ef] px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="What We Believe" title="Bible-believing Baptist doctrine." />
          <a
            href={LINKS.beliefs}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#7c2f22] hover:underline"
          >
            Full statement of faith <ExternalLink className="size-4" />
          </a>
        </div>
        <ul className="space-y-3">
          {BELIEFS.map((belief) => (
            <li key={belief} className="flex gap-3 border-b border-[#d8c8ac] pb-3 text-lg leading-7 text-[#493d33]">
              <BookOpen className="mt-1 size-5 shrink-0 text-[#7c2f22]" />
              <span>{belief}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#fffdf8] px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Visit Us" title="We would be glad to see you." />
          <p className="mt-5 text-lg leading-8 text-[#493d33]">
            Come for Sunday School, worship, evening service, or Wednesday
            midweek service. If you have questions before visiting, contact the
            church by phone or email.
          </p>
        </div>

        <div className="border border-[#d8c8ac] bg-[#fbf7ef] p-5">
          <ContactRow icon={MapPin} label="Castle Peak Hotel, Princeling Hall, 2nd Floor, F. Cabahug Street" href={LINKS.maps} />
          <ContactRow icon={Phone} label="+63 32 384 0761" href={LINKS.phone} />
          <ContactRow icon={Phone} label="+63 968 898 8353" href={LINKS.mobile} />
          <ContactRow icon={Mail} label="hbbccebu@yahoo.com" href={LINKS.email} />
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={LINKS.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 bg-[#7c2f22] px-4 font-semibold text-white hover:bg-[#5f241b]"
            >
              Directions <MapPin className="size-4" />
            </a>
            <a
              href={LINKS.feeding}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 border border-[#7c2f22] px-4 font-semibold text-[#7c2f22] hover:bg-[#efe3d1]"
            >
              Feeding Ministry <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#3b241b] px-5 py-8 text-[#f7f1e6]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-[#7d5a45] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className={`${SERIF} text-xl font-bold`}>Home Bible Baptist Church Cebu</p>
          <p className="mt-1 text-sm text-[#d8c8ac]">Serving Cebu City by the grace of God.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#d8c8ac]">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white hover:underline">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#7c2f22]">{eyebrow}</p>
      <h2 className={`${SERIF} text-4xl font-bold leading-tight text-[#3b241b] sm:text-5xl`}>{title}</h2>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex gap-3 border-b border-[#d8c8ac] py-4 text-[#3b241b] hover:text-[#7c2f22]"
    >
      <Icon className="mt-0.5 size-5 shrink-0" />
      <span className="text-lg font-semibold leading-7">{label}</span>
    </a>
  );
}
