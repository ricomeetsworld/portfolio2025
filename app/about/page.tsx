import localFont from "next/font/local"
import { Section } from "../components/section-wrapper"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Award, BookOpen, Bot, CalendarClock, Drama, ExternalLink, Eye, Globe } from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

const brandFont = localFont({
  src: '../../public/fonts/ClashGrotesk-Variable.ttf',
  weight: "100 900"
})

type ExpType = "course" | "certification"

interface Experience {
  type: ExpType;
  provider: string;
  logo: string;
  title: string;
  date: string;
  skills: string[];
  description: string;
  link: string;
}

const experiences: Experience[] = [
  {
    type: 'certification',
    provider: 'Google',
    logo: 'google',
    title: 'Fundamentals of Digital Marketing',
    date: 'February 2020',
    skills: ['SEO', 'PPC', 'Social Media Marketing'],
    description: 'Comprehensive overview of digital marketing strategies and tools.',
    link: 'https://media.licdn.com/dms/image/D4E2DAQGu2vrAPnYtbA/profile-treasury-document-images_1920/1/1716743622434?e=1726704000&v=beta&t=CP2L2NzOxII4S0CMTJBSbrisujMWclsv9U8-SGMRETg'
  },
  {
    type: 'certification',
    provider: 'Semrush',
    logo: 'semrush',
    title: 'Keyword Research with Semrush',
    date: 'October 2023',
    skills: ['Keyword Research', 'SEO', 'Content Strategy'],
    description: 'In-depth training on effective keyword research techniques.',
    link: 'https://media.licdn.com/dms/image/D4E2DAQG5qDBH-NBWHw/profile-treasury-document-images_1920/1/1725539600707?e=1726704000&v=beta&t=-b2DlbP_JvjGlTCCzKDYrd9SgIChZ1lhYyrAGIUR_JU'
  },
  {
    type: 'course',
    provider: 'DeepLearning.ai',
    logo: 'deeplearningai',
    title: 'Build LLM Apps with LangChain.js',
    date: 'July 2023',
    skills: ['LLM', 'JavaScript', 'AI Applications'],
    description: 'Hands-on course on building AI-powered applications using LangChain.js.',
    link: '#'
  },
]

const faqs = [
  {
    icon: <CalendarClock className="mr-2 w-5 h-5" />,
    question: "When did you start your journey?",
    answer: "My journey started in 2014 as DJ, being 15 then. A year after, I finished my GCSEs and went to SFX Sixth Form College for a BTEC in IT – where I learned Photoshop and picked up Python. Since then, I've produced results no matter the discipline – from DJing to graphic design, plus many others. Now, I'm a dev focused on disruptive tech."
  },
  {
    icon: <Drama className="mr-2 w-5 h-5" />,
    question: "What other roles have you been in?",
    answer: "I've worked across DJing, graphic design, UI/UX design, motion design, journalism, library assisting, web development, videography and editing, bartending, tech sales at European Gateway (a startup by a former Gartner executive), and fullstack Web3 development – these experiences have given me an unique creative perspective."
  },
  {
    icon: <Globe className="mr-2 w-5 h-5" />,
    question: "So, you're from Guinea Bissau/Guinea etc?",
    answer: "Actually, I'm from Equatorial Guinea, a tiny hispanic nation in the Gulf of Guinea that's often forgotten, and usually confused with the other Guineas. We speak Pichi (among other languages like Fa d'Ambô and Bube), which is almost identical (given our small differences) to Sierra Leone's Krio! Did you know that Annobon can fit 92.5x in London?",
  },
  {
    icon: <Bot className="mr-2 w-5 h-5" />,
    question: "What projects are you working on right now?",
    answer: "I'm working on upgrading the visual identity of my website so I can make room for the coming changes (keep a close eye!). I'm also working on K.A.I.S.E.R – my dream team of AI agents that handle the heavy lifting of my workflows so I get to work on what I do best, like learning new skills and my applying them."
  },
  {
    icon: <Eye className="mr-2 w-5 h-5" />,
    question: "Where do you see yourself in 5 years?",
    answer: "Building industry-leading AI products, a thriving global community having launched my own educational resources, and a successful business around disruptive tech, like AI  and multi-agent systems, that enables me to live my dreams and work my philanthropic ideas."
  },
]

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="relative flex flex-col gap-8 space-y-8 mx-auto mt-32 px-6 max-w-screen-md">
        <h1 className={`text-4xl md:text-[44px] font-black ${brandFont.className}`}>About</h1>
        <Section label="Intro">
          <Image priority src={'/images/headshot.jpeg'} alt="Enric Trillo" width={600} height={600} className="inline mx-auto rounded-full ring-2 ring-primary hover:ring-4 w-24 h-24 transition-all duration-300" />
          <p>
            Hey! I&apos;m Enric J Trillo Nchana, a Fullstack & AI Developer with expertise in disruptive technologies, multi-agent systems and innovative web solutions.
          </p>
          <p>
            Born & raised in Madrid 🇪🇸, moved to London 🇬🇧 in my early teens, and from a tiny hispanic nation in Central Africa most don't know about – Equatorial Guinea 🇬🇶.
          </p>
        </Section>
        <Section label="Summary">
          <p>I&apos;m the founder of Metasyde LTD., where we build scalable solutions leveraging disruptive technologies like AI and Web3.</p>
          <p>Currently developing Kaiser, my personal multi-agent system designed to 100x my productivity and workflows through automation and delegation.</p>
          <p>My goal is to create software and educational resources that empower individuals and businesses to adapt and thrive in this world driven by AI.</p>
        </Section>
        <Section label="Story">
          <p>
            In 2015, I finished my GCSEs and went to <Link target="_blank" className="font-bold text-primary underline" href="https://www.sfx.ac.uk/">St. Francis Xavier College</Link>, where I began my tech journey by experimenting with graphic design and coding with Python, setting the foundation for my future in fullstack and AI development.
          </p>
          <div className="w-full overflow-hidden object-contain">
            <Image src="/images/graduation.jpg" className="w-full" width={600} height={600} alt="Enric Trillo, graduation photo" />
          </div>
          <p>
            During my years at the <Link target="_blank" className="font-bold text-primary underline" href="https://www.northampton.ac.uk/">University of Northampton</Link> (2017-2020), I didn&apos;t just stick to one thing. I explored everything from journalism to UI/UX design, motion graphics, video editing, and even bartending. But it was in my third year that I discovered my true passion: Artificial Intelligence. This revelation led to an A* grade and the publication of a featured Medium article with The Startup, where I shared my process and insights on AI.
          </p>
          <p>I graduated in 2020–during a time where the world was brought to a stop by the global pandemic. Picture being a 21-year-old fresh out of university with a computing degree, burning passion for emerging technologies and an ambitious spirit, but finding yourself stuck with a flimsy job market and a whooping <strong>5-figures in student debt</strong>. <i>That</i> was my intro into the real world.</p>
          <p>Instead of letting that define me, I flipped the script. I hopped on mastering hot, in-demand skills, which led me to secure a £5000/mo Fullstack Web3 Developer contract role at the age of 23. That opportunity was the catalyst for what will become <Link className="font-bold text-primary underline" href="https://metasyde.com?ref=enrictrillo">Metasyde</Link>, my company dedicated to building profitable and innovative solutions with disruptive technologies.</p>
        </Section>
        <Section label="Mission">
          <p>In 2017, McKinsey <Link target="_blank" className="font-bold text-primary underline" href="https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages">reported</Link> they estimat something between 400-800 million people globally to be displaced by emerging technologies by 2030.</p>
          <p>The landscape is shifting fast, and my mission is to help people and businesses navigate this transformation. Whether through learning resources or software products, my goal is to assist others to thrive in the age of AI.</p>
        </Section>
        <Section label="Expertise">
          <p>I run the <i>Shift Forward Newsletter</i>. This is where I share weekly actionable insights to help others thrive in this AI-driven world. My online presence spans across various platforms, including:</p>
          <ul className="mb-0 ml-4">
            <li className="before:content-['→'] before:mr-2">
              <strong>Twitter</strong>: Sharing thoughts on the latest in tech and AI.
            </li>
            <li className="before:content-['→'] before:mr-2">
              <strong>LinkedIn</strong>: Professional updates and industry discussions.
            </li>
            <li className="before:content-['→'] before:mr-2">
              <strong>YouTube</strong>: Video content on disruptive technologies and tutorials.
            </li>
            <li className="before:content-['→'] before:mr-2">
              <strong>Blog</strong>: Deep dives into tech topics like AR/VR, AI and multi agent systems, blockchain, gaming, haptics, the metaverse, robotics, and more.
            </li>
          </ul>
        </Section>
        <Section label="Experience">
          <p>This is a list of courses and certifications I've completed, that are relevant to the skills I apply in personal/professional projects, and topics I discuss online.</p>
          <div className="mt-10 w-full max-w-[1360px]">
            <ul role="list" className="gap-6 grid grid-cols-1 w-full">
              {
                experiences.map((exp, idx) => (
                  <Card key={idx} className="bg-background">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Image src={"/images/certs/" + exp.logo + ".jpeg"} alt={`${exp.provider} logo`} width={300} height={300} className="w-10 h-10" />
                        <div>
                          <CardTitle>{exp.provider}</CardTitle>
                          <CardDescription>{exp.title}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center mb-2">
                        {exp.type === 'certification' ? (
                          <Badge variant="default" className="bg-jade-500 mr-2 text-primary-foreground">
                            <Award className="mr-1 w-3 h-3" />
                            Certification
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-jade-500 mr-2 text-primary-foreground">
                            <BookOpen className="mr-1 w-3 h-3" />
                            Course
                          </Badge>
                        )}
                        <span className="text-muted-foreground text-sm">Completed: {exp.date}</span>
                      </div>
                      <p className="mb-4 text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="border-tingual-500 w-full" asChild>
                        <Link href={!exp.link.includes('licdn') && exp.link.includes('https') ? exp.link + "?ref=enrictrillo" : exp.link} target="_blank" rel="noopener noreferrer">
                          {exp.type === 'certification' ? 'View Certificate' : 'View Course'}
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              }
            </ul>
          </div>
        </Section>
        <Section label="Recognition">
          <ul className="mb-0 ml-8 list-disc">
            <li>
              <strong>The Startup</strong>: Got featured by The Startup publication on Medium for <Link className="text-primary underline" href="https://medium.com/swlh/an-image-classifier-with-keras-2f0e9b868a36">documenting my work on AI</Link> and my academic journey.
            </li>
            <li>
              <strong>University of Northampton</strong>: Achieved an A* grade in the AI module of my final year, and a Second Upper Class (2:1) classification overall.
            </li>
            <li>
              <strong>Certifications:</strong>
              <ul className="mb-0 ml-4">
                <li className="before:content-['→'] before:mr-2">
                  <strong>Fundamentals of Digital Marketing</strong>, Google – <Link target="_blank" href={"https://skillshop.exceedlms.com/student/collection/654330-digital-marketing?sid=0339c211-017a-43b7-9485-6c24e997a4aa&sid_i=1" + "?ref=enrictrillo"} className="text-primary underline underline-offset-2">course</Link>
                </li>
                <li className="before:content-['→'] before:mr-2">
                  <strong>Keyword Research with Semrush</strong>, Semrush – <Link target="_blank" href={"https://www.semrush.com/academy/courses/keyword-research-with-semrush-step-by-step-guide/" + "?ref=enrictrillo"} className="text-primary underline underline-offset-2">course</Link>
                </li>
                <li className="before:content-['→'] before:mr-2">
                  <strong>Build LLM Apps with LangChain.js</strong>, DeepLearning.AI – <Link target="_blank" href={"https://www.deeplearning.ai/short-courses/build-llm-apps-with-langchain-js/" + "?ref=enrictrillo"} className="text-primary underline underline-offset-2">course</Link>
                </li>
              </ul>
            </li>
          </ul>
        </Section>
        <Section label="Leadership">
          <p>I'm active on these platforms sharing knowledge and what I learn:</p>
          <ul className="space-y-3 mb-b ml-8 list-disc">
            <li>Blog – my blog features deep dives, practical guides, and case studies on disruptive tech, designed for both beginners and advanced devs.</li>
            <li>Shift Forward – my weekly newsletter where I explore actionable strategies to leverage AI, multi-agent systems, and disruptive tech, curated for developers and tech futurists aiming to thrive in the AI-driven era.</li>
            <li>Social Media – On Twitter/X, I break down the latest trends in disruptive technologies, while LinkedIn serves as my platform for professional insights and industry commentary.</li>
            <li>YouTube – On YouTube, I post technical videos around disruptive technologies and programming, behind-the-scenes updates and more.</li>
          </ul>
        </Section>
        <Section label="Testimonials">
          <div className="gap-3 grid grid-cols-1">
            <blockquote className="relative bg-background mx-auto p-6 border rounded-lg w-full max-w-2xl">
              <div title="Testimonial" className="mb-4 text-gray-600 italic">
                "Your app is bomb! Thank you as it helps tremendously with my workflow..."
              </div>
              <div title="Testimonial Author" className="font-bold text-gray-800">
                – Jordan (YouTube comment)
              </div>
            </blockquote>
            <blockquote className="relative bg-background mx-auto p-6 border rounded-lg w-full max-w-2xl">
              <div title="Testimonial" className="mb-4 text-gray-600 italic">
                "Very cool, a medicine to my paranoia that chatgpt will one day have an absurd paywall and all of my conversations would get lost"
              </div>
              <div title="Testimonial Author" className="font-bold text-gray-800">
                – Amitay Gilboa (Product Hunt comment)
              </div>
            </blockquote>
          </div>
        </Section>
        <Section label="Vision">
          <p>As the world of AI and disruptive tech continues to evolve, I’m committed to lifelong learning, constantly experimenting with emerging tools and concepts. My vision is to be at the forefront of this shift, assembling teams of AI agents and building products that push the boundaries of what’s possible in tech.</p>
        </Section>
        <Section label="Collaboration">
          <p>
            I&apos;m open to collaborations and new opportunities. Feel free to reach out if you have (or are aware of) opportunities for me, including:
          </p>
          <ul className="mb-6 ml-8 list-disc">
            <li>
              <strong>Consulting on AI/Agent Systems </strong>for product development or workflows.
            </li>
            <li>
              <strong>Collaborating on tech-based content</strong> (guest writing, podcast appearances, panel discussions)
            </li>
            <li>
              <strong>Partnerships for building AI-powered tools</strong> for businesses or SaaS projects.
            </li>
            <li>
              <strong>Joint-ventures in emerging tech</strong> (Web3, AR/VR, robotics, etc.)
            </li>
            <li>
              <strong>Contract opportunities </strong> where I can use my frontend, fullstack and AI skills to develop solutions.
            </li>
          </ul>
        </Section>
        <Section label="Shift Forward">
          <p>I created Shift Forward to share what I learn about emerging tech, what I'm building, and spark a new generation of Shifters who thrive in hard times.</p>
          <p className="mb-6">Join <strong>Shift Forward</strong> for weekly actionable insights on disruptive tech like Web3 and Robotics, and updates of what we're building at Metasyde.</p>
        </Section>
        <Section label="Frequently Asked Questions">
          {faqs.map((faq, idx) => {
            return (
              <Accordion key={idx} type="single" collapsible className="mx-auto w-full max-w-3xl">
                <AccordionItem value={`item-${idx}`} className="mb-4 border border-border rounded-lg overflow-hidden">
                  <AccordionTrigger className="flex justify-normal items-center gap-4 hover:bg-background rounded-t-slg">
                    <span className="ml-4">{faq.icon}</span>
                    <h3 className="text-lg">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="bg-secondary/5 p-4 border-t border-border">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
          <p className="pt-8">Interested in my technical expertise and approach to disruptive tech? Explore my technical FAQs <Link className="text-amethyst-500 underline" href="/#faqs">here</Link>.</p>
        </Section>
      </div>
    </main>
  )
}