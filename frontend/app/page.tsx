import {Suspense} from 'react'
import Link from 'next/link'
import {PortableText} from '@portabletext/react'

import {AllPosts} from '@/app/components/Posts'
import GetStartedCode from '@/app/components/GetStartedCode'
import SideBySideIcons from '@/app/components/SideBySideIcons'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default async function Page() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <>
      <div className="relative">
        <div className="relative bg-[url(/images/tile-1-black.png)] bg-size-[5px]">
          <div style={{
		backgroundImage: "url('images/cs_03.jpg')",
		backgroundPosition: 'center',
		backgroundSize: 'cover'
	  }} className="bg-gradient-to-b from-white w-full h-full absolute top-0"></div>
          <div className="container">
            <div className="relative min-h-[40vh] mx-auto max-w-2xl pt-10 xl:pt-20 pb-30 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center">
                <h1 style={{
			backgroundColor: 'white',
			padding: '1rem',
			textAlign: 'center'
		}} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">
                  <Link
                    className="underline decoration-brand hover:text-brand underline-offset-8 hover:underline-offset-4 transition-all ease-out"
                    href="https://sanity.io/"
                  >
		    A New College
                  </Link>
                </h1>
		                <div className="text-md leading-6 prose uppercase py-1 px-3 bg-white font-mono italic" style={{
			textAlign: 'center'
				}}>
			A community solution to our increasingly isolated worlds
                </div>

              </div>
            </div>
          </div>
        </div>





<div className="flex flex-col items-center">
  <div className="container relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center">
    <div className="prose sm:prose-lg md:prose-xl xl:prose-2xl text-gray-700 prose-a:text-gray-700 font-light text-center">

      {settings?.description && <PortableText value={settings.description} />}

      <div className="max-w-3xl mx-auto text-center space-y-10">

        {/* intro chip */}
        <div className="not-prose flex justify-center">
	  <h2 className="tracking-wide font-mono uppercase bg-black text-white rounded-xl px-3 py-1">
            The Idea
	    </h2>
        </div>

        <p>
          We are building something we call a <strong>community campus</strong>. You can think of it as
          <strong> college without the classes</strong>, built for adults who work remotely and are tired of being
          alone all week. It’s a physical place you can actually show up to every day, do your real job or your real
          project, sit around other human beings, talk between sprints, get invited to things, and slowly form a
          friend group without having to force it. It’s work space, hang space, social space, and support structure
          in one
        </p>

        {/* pullquote */}
        <div className="not-prose mx-auto max-w-2xl">
          <div className="bg-black text-white rounded-xl px-6 py-6 shadow-xl flex flex-col items-center gap-4">
            <div className="text-xs uppercase tracking-wide font-mono text-gray-400">
              Why this exists
            </div>
            <div className="text-lg font-medium leading-snug text-center">
              Remote work gave us freedom but it also trapped us alone for 12 hours a day.
              We’re fixing that in the most old-school way possible — by putting humans in a room together.
            </div>
          </div>
        </div>

        <p>
          Right now, most of us are living through a loneliness crisis. We have Discord servers, endless group chats,
          online gamer friends, and 24/7 content, but we don’t have anyone to spontaneously
 grab food with on a Tuesday. Remote
          work sounded like freedom, but what it actually turned into for a lot of people is sitting behind a laptop
          for 8 to 12 hours at home, alone, barely speaking to anyone in person. You can find meetups and events in
          your city, sure, but they usually happen once a week or once every two weeks. You show up, talk for a
          little, and then everyone scatters back into their separate lives. It’s almost impossible to build any kind
          of real community like that. You don’t get repetition. You don’t get rhythm. You don’t get to actually know
          people. You feel like a visitor instead of part of something.
        </p>

        {/* inline image moment */}
        <div className="not-prose mx-auto w-full flex flex-col items-center gap-3">
          <img
            src="/images/commons_daylight.jpg"
            alt="Daytime shared work room: sunlight, laptops, quiet focus with a few people talking softly."
            className="w-full max-w-3xl rounded-xl shadow-xl object-cover"
          />
          <div className="text-[0.65rem] uppercase tracking-wide text-gray-500 font-mono">
            Show up, plug in, don't be alone.
          </div>
        </div>

        <p>
          The community campus is meant to fix that. The core idea is simple: you should be able to join a place where
          you can work in person, be around other people who are doing something with their life, and naturally fall
          into clubs, talks, and social rhythms without it being weird, expensive, or fake. You come in with your
          laptop and your goals. We supply the environment, the people, and the structure that lets a normal adult
          actually belong somewhere again.
        </p>

        {/* thin divider */}
        <div className="not-prose flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        <p>
          This is not just a coworking space. Traditional coworking often gives you a desk and silence and that’s it.
          What we are building is intentionally modeled more like a university campus, except we stripped out the
          tuition, stripped out the debt, stripped out the lectures you don’t care about, and kept what actually
          works. On this campus there are quiet rooms for serious work, louder rooms where talking is
          allowed and ideas are getting thrown around. There’s a
          cafeteria where you can get a decent, budget-friendly meal or coffee that won’t bankrupt you, because
          you’re supposed to be able to spend hours here, not just buy one $9 latte and leave. There are rooms you can
          book to talk to your boss in private or pitch something or meet with your team. There are recurring clubs.
          There are small talks led by members or guests instead of formal classes. There are game nights, movie
          nights, “show us what you’re building” nights, and “let’s just be alive in the same room for once” nights.
          You do your work during the day and you have a social life when you close the laptop, all inside the same
          physical ecosystem.
        </p>

        {/* callout card */}
        <div className="not-prose mx-auto max-w-xl">
          <div className="rounded-lg border border-gray-200 bg-white shadow-lg px-5 py-5 text-left">
            <div className="text-[0.6rem] uppercase tracking-wide font-mono text-gray-500 mb-2 text-center">
              What you get here that you don't get anywhere else
            </div>
            <div className="text-sm leading-relaxed text-gray-700 text-center">
              Daily presence. Familiar faces. A place to work where other people
              actually care if you show up tomorrow. And a reason to stay after 5pm.
            </div>
          </div>
        </div>

        <p>
          We’re very open about this: we didn’t invent the need for this. Colleges and universities already proved
          this model works. College is controversial now, and honestly, in a lot of cases it deserves that. A lot of
          people are told “get this degree and you’ll get this career,” and then they go tens or hundreds of thousands
          of dollars into debt for an outcome that may never show up. The pricing and the sales pitch can be a scam.
          But you can hate the cost and still admit that college nails two things almost nothing else in adult life
          gives you. One, it gives you an environment that forces you to take yourself seriously. When you’re on a
          campus, you’re in a headspace where the expectation is: you build, you train, you level up. You are
          surrounded by other people doing something. That pressure is good for you. Two, it gives you density of
          community. You’re never really isolated. You’re surrounded by peers. You’re seen. You’re embarrassed if
          you’re slacking. You’re proud when you’re doing well. You have someone to get food with without scheduling
          it two weeks ahead of time. You’re less likely to numb yourself with weed just because you’re
          bored and alone. You even have organic dating opportunities without relying only on Tinder or walking up to
          strangers on the street, because when you’re in a community you don’t have to act desperate. You’re already
          in the mix.
        </p>

        {/* stat style highlight */}
        <div className="not-prose flex flex-col items-center text-center">
          <div className="text-[0.6rem] uppercase tracking-wide font-mono text-gray-500">
            This is the part we’re copying
          </div>
          <div className="text-4xl font-bold text-black leading-none">
            Environment + Community
          </div>
          <div className="text-xs text-gray-500 font-mono mt-2">
            Keep those two. Drop the debt.
          </div>
        </div>

        <p>
          That’s what we’re trying to recreate. That part of college does not have to be tied to tuition, or to a
          specific major, or to sitting in a lecture hall, or even to being 19 years old. It can exist for adults. It
          can exist for freelancers, for remote workers, for people building companies, for people figuring it out,
          for people trying to get unstuck, for people who moved to a new city and have nobody. You don’t need a
          professor to get that. You just need a shared physical space, a reason to keep showing up, and
          infrastructure that makes it easy for people to self-organize.
        </p>

        {/* scene chip */}
        <div className="not-prose flex justify-center">
          <div className="text-[0.6rem] tracking-wide font-mono uppercase bg-gray-100 text-gray-600 rounded-full px-3 py-1 border border-gray-200">
            A Day One Story
          </div>
        </div>

        <p>
          Here’s what that actually looks like in practice. A totally new person walks in. Day one. They don’t know
          anybody. They start in the free coworking area, which is a little crowded and a little loud and honestly a
          little rough around the edges. It’s not curated, it’s real. Some people are in calls, some people are
          brainstorming, some people are blasting through work, some people probably didn’t shower yet. On the wall,
          this new person sees a flyer for a talk that afternoon: it’s being given by someone who used to run a small
          business. Not a celebrity. Not some fake guru. A real person who already lived through a thing. So he goes.
        </p>

        {/* inline candid image */}
        <div className="not-prose mx-auto w-full flex flex-col items-center gap-3">
          <img
            src="/images/talk_room.jpg"
            alt="Members gathered in a smaller room for an informal talk. Whiteboard notes, snacks on the table."
            className="w-full max-w-3xl rounded-xl shadow-xl object-cover"
          />
          <div className="text-[0.65rem] uppercase tracking-wide text-gray-500 font-mono">
            Talks instead of classes. Real people. No tuition.
          </div>
        </div>

        <p>
          At that talk, he doesn’t instantly become best friends with everyone. This is real life, not a trailer for
          an app. But he does hear about a weekly business club. He finds out they meet in Building C, third floor,
          Room 311. He finds out there are snacks. He decides to show up. In that club, people are walking through
          their ideas and giving each other feedback. They’re planning a pitch day where everyone lays out what
          they’re trying to build and everyone else helps sharpen it. Our new guy is a little ambitious, and even
          though he’s nervous, he pushes himself and participates. He puts his idea on the table in front of the
          group. After the meeting, a couple people come up to him and say, “That was actually solid. You should keep
          going with that. Want to grab food and talk more?” They go out to eat together. Now it’s not just “a room
          full of strangers.” Now he has names. Now he has people.
        </p>

        <p>
          After that, something important happens. He decides it’s worth upgrading to a paid membership. Not because
          somebody pressured him with upsell nonsense, but because the value is obvious. He wants guaranteed seating
          in the quieter workspace so he’s not hunting for a table every time. He wants access to a space where he can
          step into a call with his boss without being surrounded by noise. He wants to sit in the same area as the
          same faces every day instead of drifting like a ghost in a Starbucks. That membership tier gives him access
          to both quiet rooms and “loud rooms,” meaning one room where you’re expected to keep it focused and mostly
          silent, and another where conversation and collaboration are allowed and not treated like a problem. He
          also gets the ability to book full meeting rooms without paying some ridiculous hourly fee. This matters if
          you’re on salary and don’t want your boss to think you’re unprofessional, or if you’re building something
          and you need to talk to people in private.
        </p>

        {/* soft gradient divider */}
        <div className="not-prose flex justify-center py-4">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        </div>

        <p>
hey’re not in each other’s pockets all day, but they’re not isolated, either. When the workday wraps, they don’t just go home to sit alone with their phone. They might head to the business club meeting, jump into game night, or just walk over to a local brewery and cool off together because it’s been a long week. After all, it’s Friday, and they actually earned that Friday together.
        </p>

        {/* vibe image */}
        <div className="not-prose mx-auto w-full flex flex-col items-center gap-3">
          <img
            src="/images/cs_01.png"
            alt="Small group relaxing after work, laughing around a table with empty coffee cups and notebooks."
            className="w-full max-w-3xl rounded-xl shadow-xl object-cover"
          />
          <div className="text-[0.65rem] uppercase tracking-wide text-gray-500 font-mono">
            This is where 'you guys free after?' becomes normal.
          </div>
        </div>

        <p>
          That’s the atmosphere we’re building. It’s basically a college campus where, instead of doing homework and
          sitting through Gen Ed classes you don’t care about, you’re doing your real job or your real project.
          Instead of being 18 and surrounded by other 18-year-olds, you might be 24, 29, 37, whatever. You’re not
          paying tuition. You’re not going into debt. You’re not asking permission to belong. You simply participate.
          You work. You show up for people and they show up for you.
        </p>

        <p>
          Now, let’s talk about money, because if this can’t pay for itself in a sustainable way, it doesn’t get to
          exist. The economics of a community campus are built around one idea: the many should be able to afford
          this, and a small number of people with more resources will carry extra weight on purpose. There will be a
          free or extremely low-cost layer, because this only works if ambitious, interesting, early-stage,
          figuring-it-out people can actually get in the door and start forming connections without a financial gate
          right away. On top of that there will be a normal membership tier, which gives you reliable seating, access
          to the quiet and loud work rooms, the ability to reserve meeting rooms, and the ability to treat this place
          like your default work/home base instead of gambling on coffee shops.
        </p>

        {/* patron chip */}
        <div className="not-prose flex justify-center">
          <div className="text-[0.6rem] tracking-wide font-mono uppercase bg-black text-white rounded-full px-3 py-1 shadow-lg">
            Patron Tier
          </div>
        </div>

        <p>
          Then there’s the premium tier. This is basically a patron tier. It is intentionally priced higher, and it’s
          built for people who want comfort, privacy, predictability, and maybe status perks like a nicer lounge,
          priority room booking, concierge-style help, and so on. But here’s the important part: people in that tier
          are not just buying themselves a nicer chair. They are basically acting as donors. Their money is used to
          help keep the lower tiers affordable, to keep the free layer alive, and to protect the culture we’re talking
          about. So yes, the premium tier has to feel worth it and genuinely serve those members. But it is also
          understood that part of what they’re paying for is impact. They are keeping the doors open for people who
          are talented, hungry, and early, not just people who are already established.
        </p>

        <p>
          There are other funding sources too. The cafeteria matters, because good, inexpensive food keeps people in
          the building longer and makes it reasonable to spend major chunks of your week here. That revenue helps.
          There’s also public money. Cities constantly talk about “economic development,” “keeping talent local,”
          “supporting young professionals,” “reducing crime through stability,” “making remote workers spend money
          locally instead of just online,” and “preventing mental health collapse through community instead of
          emergency response.” A functioning community campus hits all of that at once. If we can prove demand, we
          can take this model to city governments, foundations, and people with serious philanthropic wallets and
          say: help us get the first one in the ground, because this is workforce infrastructure, social
          infrastructure, and mental health infrastructure disguised as a place with tables and coffee.
        </p>

        <p>
          And yes, I’m direct about this next part. I don’t mind if a little less money goes to bloated,
          underperforming parts of the old college system and instead goes into building this. I don’t mind if public
          universities feel pressure and decide to copy the model and try to do it better. Good. Compete. The goal is
          not to worship higher education as it exists. The goal is to bring the parts that work — focus, community,
          upward pressure, shared identity — to normal adults without asking them to take on debt or enlist in the
          military.
        </p>

        {/* leverage chip */}
        <div className="not-prose flex justify-center">
          <div className="text-[0.6rem] tracking-wide font-mono uppercase bg-gray-100 text-gray-600 rounded-full px-3 py-1 border border-gray-200">
            How This Starts
          </div>
        </div>

        <p>
          The last thing you should know is how this actually becomes real. A space like this requires someone with
          money to believe in it. That usually means someone who’s willing to treat this like a charitable investment
          at first, not just a business line item. That person has to accept risk and care more about changing lives
          in their city than about squeezing the maximum profit per square foot. You might not personally have that
          level of capital, and that’s fine. What you do have is signal. Signal is powerful. If you’re reading this
          and thinking, “I want this near me. I would actually go. I would work here instead of working alone. I would
          join the clubs. I would show up to the talks. I would bring my friends,” I need you to say so. I’m not
          asking you for money up front. I’m asking you to add your name and tell us what city you’re in.
        </p>

        <p>
          That’s because data is leverage. If we can walk into a conversation with someone who controls serious money
          and put down proof that there are hundreds or thousands of real people in a specific city asking for a
          community campus, that is how you unlock doors. That is how you get a building. That is how you get the
          first cafeteria. That is how you get the rooms on the third floor, Room 311, where the Wednesday night
          business club actually happens and where some nervous, ambitious person goes from “just some dude in a loud
          room” to “part of something.”
        </p>

        <p>
          The question we’re asking you is simple: do you want this? Do you want a place in your city where you can
          work in person, be known, feel safe, have people to grow with, and not be lonely? Do you want a version of
          adult life that doesn’t depend on swiping for strangers or drinking just to have company? Do you want the
          benefits of a university community without being sold a degree you don’t need? Tell us. Because if the
          modern generation is foaming at the mouth for this, we’ll have the proof we need to build it. And if
          everyone reads this and says “no, actually this is dystopian and we hate it,” then we should also know that
          now, before we waste anyone’s time.
        </p>

        <p>
          That’s what “About Us” means here. We’re not promising to fix your whole life. We’re promising to build a
          place where it becomes normal to not be alone.
        </p>

        {/* CTA inline */}
        <div className="not-prose flex flex-col items-center gap-3 pt-8">
          <div className="text-[0.6rem] uppercase tracking-wide text-gray-500 font-mono">
            Want this in your city?
          </div>
          <Link
            href="/https://docs.google.com/forms/d/e/1FAIpQLSdt5JQl-eWkF09waf0QEUpwahs8NiT2spwq74f39pyrDTPiXw/viewform"
            className="inline-block rounded-lg bg-black text-white text-sm font-medium tracking-tight px-4 py-2 hover:bg-gray-800 transition-colors shadow-lg"
          >
	  	Add your name to interested list
          </Link>
          <div className="text-[0.7rem] text-gray-400 font-mono text-center max-w-[16rem]">
            No payment. We’re just proving demand so we can take it to funders.
          </div>
        </div>

      </div>

      {/* final vibe strip */}
      <div className="w-full flex flex-col items-center gap-4 not-prose pt-16">
        <img
          src="/images/campus_panorama.png"
          alt="Wide shot of a future shared campus: long tables, people working, a corner cafe counter, soft evening light."
          className="w-full max-w-4xl rounded-xl shadow-2xl object-cover"
        />
        <div className="text-[0.6rem] uppercase tracking-wide font-mono text-gray-500 text-center">
          This is not theoretical. This is the kind of room we intend to build.
        </div>
      </div>

    </div>
  </div>
</div>





      </div>
      <p> contact me at anthonycavuoti@gmail.com </p>
      {/*<div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>*/}
    </>
  )
}
