import Link from "next/link";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Separator } from "@repo/ui/components/separator";

const FEATURE_CARDS = [
  {
    title: "Daily momentum",
    description:
      "Turn routines into visible streaks with one-tap check-ins and clear weekly targets.",
    stat: "86%",
    detail: "users complete more habits after week 2",
  },
  {
    title: "Flexible rhythms",
    description:
      "Track morning, evening, and custom schedules without forcing every habit into one template.",
    stat: "3x",
    detail: "faster planning with reusable habit presets",
  },
  {
    title: "Reflection loop",
    description:
      "Spot when momentum dips, then adjust the plan before your streak falls apart.",
    stat: "12 min",
    detail: "average weekly review time",
  },
];

const STEPS = [
  {
    number: "01",
    label: "Build your week",
    body: "Pick habits, assign frequency, and set realistic targets based on your actual calendar.",
  },
  {
    number: "02",
    label: "Check in fast",
    body: "Log completion in seconds. No cluttered forms, no context switching.",
  },
  {
    number: "03",
    label: "Adjust on Friday",
    body: "Use streak and completion trends to tune next week before you lose momentum.",
  },
];

const HABIT_ROWS = [
  { day: "Mon", workout: true, journal: true, reading: false },
  { day: "Tue", workout: true, journal: true, reading: true },
  { day: "Wed", workout: false, journal: true, reading: true },
  { day: "Thu", workout: true, journal: false, reading: true },
  { day: "Fri", workout: true, journal: true, reading: true },
];

function HabitCell({ value }: { value: boolean }) {
  return (
    <span
      className={
        value
          ? "block h-2.5 w-2.5 rounded-full bg-accent"
          : "block h-2.5 w-2.5 rounded-full bg-page-ink/15"
      }
    />
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-page-bg text-page-ink">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-24 md:px-10 lg:px-14">
        <section className="mt-8 grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div className="opacity-0 animate-[rise_600ms_ease-out_forwards]">
            <Badge variant="secondary">Intentional routine design</Badge>
            <h1 className="font-display mt-5 text-5xl leading-[0.94] tracking-tight md:text-7xl">
              Habit tracking that
              <br />
              feels like coaching.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-page-ink/60 md:text-lg">
              Plan habits around real life, keep streaks visible, and tune your
              system every week. Habbit helps you stay consistent without
              turning your day into a spreadsheet.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg">Start for free</Button>
              <Button size="lg" variant="secondary">
                See live preview
              </Button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {[
                { value: "7.4k", label: "active weekly users" },
                { value: "92%", label: "check-in completion rate" },
                { value: "11 min", label: "average weekly planning" },
              ].map((metric) => (
                <Card key={metric.label} className="bg-surface-raised">
                  <CardContent className="p-5">
                    <p className="font-display text-3xl leading-none">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs text-page-ink/50">
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card
            className="bg-surface opacity-0 animate-[rise_600ms_ease-out_forwards] [animation-delay:100ms]"
            aria-label="Habit tracker preview"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-display text-2xl">
                    This week
                  </CardTitle>
                  <CardDescription>
                    Focus score is climbing. Keep today simple.
                  </CardDescription>
                </div>
                <Badge>Streak: 14 days</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border border-border bg-surface-raised p-5">
                <div className="grid grid-cols-[56px_repeat(3,minmax(0,1fr))] gap-y-3 text-xs text-page-ink/55">
                  <span className="font-semibold text-page-ink/80">Day</span>
                  <span className="font-semibold text-page-ink/80">Move</span>
                  <span className="font-semibold text-page-ink/80">
                    Journal
                  </span>
                  <span className="font-semibold text-page-ink/80">Read</span>
                  {HABIT_ROWS.map((entry) => (
                    <div key={entry.day} className="contents">
                      <span className="font-medium text-page-ink">
                        {entry.day}
                      </span>
                      <HabitCell value={entry.workout} />
                      <HabitCell value={entry.journal} />
                      <HabitCell value={entry.reading} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Card className="bg-warm-tan/40">
                  <CardContent className="p-5">
                    <p className="text-xs uppercase tracking-wide text-page-ink/50">
                      Weekly target
                    </p>
                    <p className="font-display mt-2 text-2xl">18 / 21</p>
                  </CardContent>
                </Card>
                <Card className="bg-sage-muted/40">
                  <CardContent className="p-5">
                    <p className="text-xs uppercase tracking-wide text-page-ink/50">
                      Recovery habit
                    </p>
                    <p className="font-display mt-2 text-2xl">Breathing</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-20" />

        <section className="grid gap-5 md:grid-cols-3">
          {FEATURE_CARDS.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-surface opacity-0 animate-[rise_600ms_ease-out_forwards]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-display text-4xl leading-none text-accent">
                  {feature.stat}
                </p>
                <p className="mt-2 text-sm text-page-ink/50">
                  {feature.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-20 rounded-2xl border border-border bg-surface-raised p-8 md:p-10">
          <div className="max-w-3xl">
            <Badge variant="outline">Workflow</Badge>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              Build a rhythm in three steps.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {STEPS.map((step) => (
              <Card key={step.number} className="bg-surface">
                <CardHeader>
                  <span className="font-display text-sm text-accent">
                    {step.number}
                  </span>
                  <CardTitle className="font-display text-xl">
                    {step.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-page-ink/60">
                    {step.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <Card className="overflow-hidden bg-page-ink text-surface">
            <CardContent className="flex flex-col items-start gap-7 p-9 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <p className="font-display text-3xl leading-tight md:text-4xl">
                  Ready to make consistency feel easier?
                </p>
                <p className="mt-3 max-w-xl text-sm text-surface/60 md:text-base">
                  Create your first habit board in under five minutes.
                </p>
              </div>
              <Button
                variant="outline"
                className="min-w-44 border-0 bg-surface hover:bg-surface-raised"
              >
                Launch dashboard
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
