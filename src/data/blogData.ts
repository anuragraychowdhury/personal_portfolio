export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

// Blog posts data - just copy and paste to add new posts
export const blogPosts: BlogPost[] = [
  {
    id: 'dasd',
    title: 'Honest Review of DASD Database Project',
    description: 'An attempt at creating a real grading system.',
    date: '2026-4-15',
    readTime: '8 min read',
    tags: ['Project', 'Database', 'SQL'],
    content: `
# Honest Review of DASD Database Project

## The First Non-School Project I Built

Though I have only started full time development work relatively recently, this was the very
first project that I did that was not a school assignment. I noticed that my mom, who used to
work in the special education department at Downingtown West, had an extremely inefficient
grading system that she operated on. Students that she worked with would be graded on the same
set of benchmarks day after day and for some reason, every day got a new google sheet (where
they held the benchmarks and grades associated with them). As someone who was fresh out of their
first year in college, this was a textbook example of a repetitive process that could be
automated and centralized.

## Why We Built It

Two of my friends and I went out of our way to try and take on the challenge of creating a web
application that would centralize the grading process and deliver insights (grading results for a
student) depending on the data stored in the backend. Why have hundreds of excel sheets per
student when you could just have one database that stored it all and a simple user interface that
could display grades + much more with a few clicks? It just made too much sense so it was
something that we set out to do.

## Looking back on the Repo

It’s kind of funny to look at the repo now because there aren’t even any directories in it; just
a set of files that are loosely connected to one another. Though we had some programming
experience now, none of us had ever really built a full stack project, so we just asked our
parent’s friends what the best tools would be to build the application.

## Tech Stack

We settled on a tech stack of HTML/CSS, PHP, JavaScript and SQL. In hindsight, the HTML/CSS, SQL
and Javascript were probably fine for some kids who were making an application for the first
time; good foundational tools that still hold some form of value today. PHP was pretty heinous
though. It was an older language that had some strange syntax rules that were not as intuitive to
grasp (for us at least), but it was a fun challenge nonetheless. There are simpler/more efficient
tools that I would have used to create an application like that today, but at the time, that was
what we decided to go with, so it was a learning experience in many ways.

## The Goal

The goal was pretty simple: create a database that would be able to store all the student data and
then connect a dynamic frontend to all the data so that teachers can 1) add/remove/update grading
data and 2) create reports that showed a student’s grading history based on a set of data
parameters.

## Database Schema (High Level)

We spent a few weeks trying to create the right schema for the database; SQL tables made a lot of
sense here since the data was pretty structured overall. At a high level without going into an
abundance of detail, we had a few tables which were all connected with each other.

- A skills table which mapped grading benchmarks to a skill_id (number).
- A students table which mapped students to a student_id.
- A grading table which mapped students to the skills they were graded for and a value for whether they did the task or not. There was also a date entry here to mark the day that the student was graded for.
- A marking period table which aggregated all the scores across skills that a certain student was graded for; the user would be able to enter a date range that they want the result for and they would be able to get an overview of the results along with a graphical representation of them.

## Testing + CRUD

Once we had the schema down, we populated the table with dummy data and started testing out our
php functions on the SQL data to see whether we could manipulate data in the backend with the
functions. We wanted to be able to:

- Add/Remove a student
- Add/Remove/Update scores for a student on any day
- Save the data on clicking the save button
- Mark attendance (mattered for scoring)
- Add/Remove/Update grading benchmarks (in case the grading scheme changed)

## Backend Notes (PHP)

The PHP files are just a set of CRUD requests written in PHP, directly accessing variables in our
SQL backend and creating queries to perform these tasks. There are literal “INSERT” and “DELETE”
statements in the code along with the direct references which is just not the way I would go
about creating an application like that today; it just feels like there isn’t a layer of
abstraction between the middleware and the backend and the direct calls don’t work well with a
changing schema which is much more common in the real world.

## Frontend Notes (HTML/CSS)

The HTML/CSS documents were also pretty self explanatory; just a collection of forms, text boxes,
buttons and some styling that had some form of Javascript functionality that would actually
manipulate the data. Feels a little crude and there better frontend options for sure, but once
again, it was not wrong for our design requirements.

## JavaScript Notes

The Javascript logic was rather complicated in some places, but there were definitely ways that
this complexity could have been avoided with some better planning. For one, the way we received
data in the middleware was by sending the relevant data to the local host URL and then using
getElementById() to manipulate the data as needed. In a system that requires scaling and security,
this is a pretty awful way of sending data to different parts of the application; user specific
information is exposed in the URL and this would probably violate multiple security/privacy
practices. At the time though, I guess this was the only way we knew how, so we just went with
it.

## Closing Thoughts

Though this was a pretty scrappy first attempt at a full stack project and there were a LOT of
different parts of the process that were imperfect, it was a great learning opportunity for all
three of us and a cool way for us to actually use what we learned in the real world to solve a
real problem. The database schema probably should have been consolidated, the tech stack should
have been more carefully researched, there should have been a better outline of
features/functionalities to deliver, on top of many more technical details that are laughable in
hindsight. We didn’t even have a GitHub for a while and stored all the files on Google Drive…

As scrappy as it was, the product still worked and we even beta tested it for a little while
amongst teachers to see how they felt about it. There was potential for the project to actually
be really useful if we spent a couple more months trying to make it more robust; busy schedules
and the technical debt accrued from malpractices ended up putting the endeavor on the back burner,
but it was an awesome experience to learn how to create an end to end product for a user base for
the first time. Though I probably wouldn’t follow any of those steps today to create a product
like that, the brute force attempt at it was necessary still so that it could be iterated on and
optimized for future endeavors.
    `
  }
  ,
  {
    id: 'aquasense',
    title: 'Honest Review of Aquasense Senior Design Project',
    description: 'A scrappy end-to-end aquarium monitoring system (and what we learned).',
    date: '2026-4-16',
    readTime: '10 min read',
    tags: ['Project', 'Embedded', 'React', 'Python', 'Arduino'],
    content: `
# Aquasense: Senior Design Retrospective

## Senior design graduation project

Aquasense was my senior design graduation project that I did with two of my good computer
engineering friends at Illinois. We didn’t want to do something overly complicated since we had
so many classes, but something that you could still learn and be proud of. Why not take a generic
idea and put our own spin on it then?

## The Goal

The primary goal of Aquasense was to create an aquarium monitoring system that could track
important metrics like light, temperature and pH and provide insights + analyses based on the
current conditions of the aquarium. You’d be alerted when any of these metrics were too high/low,
recommendations for your tank health based on current conditions and what lived in there,
equipment recommendations etc. Why a fish tank? Seemed the easiest to test given there was one in
our frat house.

## What Went Well!

The ambitiousness of a high tech system translated in flawless execution of certain parts and
lack luster representations of others. The arduino script that we wrote was pretty awesome; it
was able to capture light, pH and temperature from the sensors that we bought and correctly send
them to a post API endpoint that we created. We were even able to normalize the light and pH
values from raw output to something more digestable for a user (lumens and standard pH scale for
example).

## Backend? Maybe?

Though we established the backend environment in “backend.py,” backend might be a stretch when it
came to what we actually had. For one, the functions defined to get the values from the endpoints
(get_ph, get_temp, etc.) were defined right under the endpoints themselves, which were populated
with a POST from the Arduino, so it already seemed like there was a (misleading) correlation
between the endpoint declaration and the function declarations. There was also no real database,
rather a global pandas dataframe that would just populate with the most recent data retrieved from
each endpoint. The getter functions would just access/populate this dataframe with the most recent
data posted to the API endpoint and on any shutdown of the server, the data would just disappear.
Temporary storage, sure, but backend? Might be a stretch.

## Frontend? Better.

On the bright side, the react front end was interactive and appealing, making it very clear what
the data points from the aquarium were. Even though it was just a physical representation of the
dataframe, it still communicated exactly what we wanted it to; the data itself was accurate as
well (verified with pH strips, thermometers, etc).

## Recommendation System (or so we thought)

We initially planned on creating our own recommendation system with an algorithm that we
developed, but with a pile of deadlines mounting in our last semester of college, we decided
hooking up our dataframe data to the Llama API would suffice. Since the data was all accurate and
it just required another pipeline of the dataframe being sent into the LLM, our actual LLM
insights were pretty accurate. Was it the PCA analysis that we initially set out to do? Not
really even close, but it goes to show, sometimes the simplest solution will still give you
equally effective results (I guess?).

## Machine Learning Plan vs Reality

The algorithm was supposed to do machine learning driven analysis on the data and spit out
insights based on a user’s specific aquarium data, but it ended up just being threshold level
checks; if a temperature was too high/low past a certain threshold, or there was a sudden spike
(tracked with a delta variable which also had its own threshold), we would have an anomaly
detected. This threshold checking for the bounds and the deltas provided an illusion of fluency,
but that fluency doesn’t necessarily mean understanding. Essentially the anomaly detection here
kind of just created an ELIZA effect where it seemed like our system understood anomalies and
reported them, when in reality, it was just simple threshold checking.

## Looking back

Looking back, it was a super rewarding experience. PCB design, sensor integration, firmware, a
tiny “backend,” and an actual frontend made it feel end-to-end in a way class projects rarely do.
And at the end of the day, we had a functional aquarium monitoring system — even if how we got
there differed from our original vision. It felt like a fitting final project for computer
engineering: a real product, scrappy in places, but ours.
    `
  }
  ,
  {
    id: 'jila',
    title: 'Honest Review of JILA: Leading a Club Build',
    description: 'A semester MVP plus the leadership lessons that came with it.',
    date: '2026-4-18',
    readTime: '8 min read',
    tags: ['Project', 'Leadership', 'Flask', 'MongoDB', 'React Native'],
    content: `
# JILA: Leading a Club Build

## First Tech Lead Experience

JILA was the first school club project that I worked on as a technical lead for developer team.
This introduced a new level of complexity on top of the technical knowledge required to deliver
an MVP by the end of the semester — managing a team of new developers with different backgrounds
and fostering their own productivity.

## The Goal

The overall goal of JILA was to create a one stop shop for all information related to the
Urbana-Champaign area, specifically targeting a concentration of Q'anjob'al immigrants that were
heavily present in the area. The application would give them information about public
transportation, dining options, healthcare facilities, well being events/organizations, etc.
Apart from the individual product itself, there were a variety of teams that were working on
other facets of the campaign. There was a team creating visual/video content in the native
language to post on the application, a team in contact with shelters that would be able to
introduce/implement the product, UI/UX design teams, etc. It was a concentrated effort with the
product itself being the central node of the operation.

## Not Too Shabby Honestly

Technically, this product was overall pretty sound and one of the first products I designed with
any form of authentication. As usual, the application consisted of a frontend and backend for the
consumer facing platform itself, but what was cool about this application was that there was a
separate admin page that let anyone with the admin log in credentials update the content facing
the consumer. The presence of multiple different kinds of data made MongoDB an attractive option
for the backend metadata. To keep it simple, we used Flask to create the endpoints to access all
the content which was stored in blob storage (we used Amazon S3 buckets). Since we wanted the
application to be functional for both iOS and Android devices, React Native enabled us to create a
frontend that was compatible with both and would be what we eventually hook up to the backend.

## Data Pipeline

The content was broken down into topics and the individual videos that were present as a part of
the topic. We created Python API requests to get all the content available to us (series of get
requests for the videos and categories) and integrated the overall backend with MongoDB atlas to
ensure that we are able to communicate with raw data. We integrated this backend with the
dynamically updating React frontend and were able to create a simple landing page that held all
the content the other teams created.

## Internal Tool Design

The internal tool had access to the MongoDB backend as well and that was how we were able to
dynamically update the page with updated content. Video management and category management involved
us having to create a variety of endpoints:

* GET /fetchVideos/all
* GET /fetch/topics
* PUT /addVideo
* POST /addTopic
* DELETE /deleteVideo/<name>
* DELETE /deleteTopic/<name>

All these endpoints let us manipulate the backend data so that the dynamic frontend was up to
date. This admin page had a log in to ensure that the public wouldn’t be able to manipulate the
page as they wanted. If you were part of the dev team, one of the product managers or someone else
associated with the organization, you had access to the username and password that enabled content
editing. It was a simple, but for our means, effective, single authentication layer that served
the exact purpose we needed.

## Thoughts on Leadership

In general, leading a team where I was unfamiliar with the tech stack upon arrival along with all
of the developers I would be working with was a challenging experience at the time, but something
I look back on fondly with the context of the software engineering work I do now. I remember
thinking at the time how difficult it was for me to learn a new tech stack on the fly while
simultaneously trying to find the most relevant details for my developer team, splitting their
tasks up into tickets based on their strengths, and in general, fostering a communicative and
productive development group. I created slack channels for me to drop resources and links into, I
held weekly in person meetings to figure out what was working and what wasn’t and managed my
relationships with the product managers to coordinate what needed to get done, give updates on
what was already done and our progress on the timeline.

## Closing Thoughts

In hindsight, this project gave me the opportunity to develop a lot of the skills I use on a
daily basis today. It’s not like school anymore where you study up a bunch and then hope that your
studying was enough to succeed on the test. You are constantly facing errors, often times aligned
with tasks other developers are working on simultaneously. There is constant learning and there is
no pinnacle moment to prove your knowledge like in school — it is an iterative process that builds
upon itself day after day, fueled by the general goal of trying to create something impactful. It
was a world I was unfamiliar with at the time, but also the beginning of my true understanding of
how the daily life of a software engineer really looks like.
    `
  }
  // Add more posts here by copying the object above and modifying it
]
