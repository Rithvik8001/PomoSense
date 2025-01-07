import Image from "next/image";
import Link from "next/link";
import { Clock, BarChart, Bell, Zap, Target, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  comingSoon?: boolean;
}

function FeatureCard({
  icon,
  title,
  description,
  comingSoon,
}: FeatureCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center space-y-1 pb-2">
        <div className="rounded-full bg-primary/10 p-2 mb-2">{icon}</div>
        <CardTitle className="text-xl font-semibold text-center">
          {title}
        </CardTitle>
        {comingSoon && (
          <Badge variant="secondary" className="mt-2">
            Coming Soon
          </Badge>
        )}
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <div className="p-2 flex flex-col flex-grow justify-center items-center">
          <nav className="p-4 w-full">
            <div className="w-full max-w-2xl mx-auto p-1 flex">
              <div className="flex-1">
                <Image src="/logo.svg" width={40} height={30} alt="logo" />
              </div>
              <div>
                <Link href="/sign-up">
                  <button className="px-6 py-2 rounded-xl bg-cyan-50">
                    Sign Up
                  </button>
                </Link>
                <Link href="/sign-in">
                  <button className="px-6 py-2 rounded-xl bg-cyan-50 ml-2">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="w-full max-w-2xl mx-auto flex flex-grow justify-center items-center">
            <div className="p-4 text-center">
              <div className="flex flex-col justify-center items-center w-full space-y-3">
                <h1
                  className="text-6xl md:text-7xl lg:text-6xl bg-gradient-to-r bg-clip-text from-amber-500 tracking-normal to-pink-500 text-transparent font-normal"
                  style={{ fontFamily: "pacifico, cursive" }}
                >
                  PomoSense
                </h1>
                <h3 className="text-lg font-semibold">
                  Focus Better, Achieve More with Pomo Sense.
                </h3>
                <p className="text-md text-gray-500">
                  Pomo Sense offers an intuitive platform to help you structure
                  your tasks, manage your time effectively, and make the most of
                  every work session.
                </p>
              </div>
              <div>
                <Link href="/sign-up">
                  <button className="bg-black focus:outline-none focus:ring focus:ring-violet-300 w-1/2 mx-auto text-white px-5 py-3 rounded-xl mt-4">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-amber-100 to-pink-50">
        <div className="w-full max-w-2xl p-8 mx-auto">
          <div className="mb-12">
            <h2 className="text-6xl md:text-5xl font-bold  mb-4 text-center">
              Features
            </h2>
            <p className="text-xl text-center text-gray-600">
              Discover how PomoSense can revolutionize your productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-amber-500" />}
              title="Pomodoro Timer"
              description="Stay focused with our customizable Pomodoro timer, designed to maximize your productivity."
            />
            <FeatureCard
              icon={<BarChart className="w-10 h-10 text-pink-500" />}
              title="Progress Tracking"
              description="Visualize your productivity trends and identify areas for improvement with detailed analytics."
              comingSoon={true}
            />
            <FeatureCard
              icon={<Bell className="w-10 h-10 text-cyan-500" />}
              title="Smart Notifications"
              description="Receive gentle reminders to stay on track, take breaks, and maintain a healthy work-life balance."
              comingSoon={true}
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-purple-500" />}
              title="Task Management"
              description="Organize your tasks efficiently and prioritize your work for maximum productivity."
            />
            <FeatureCard
              icon={<Target className="w-10 h-10 text-green-500" />}
              title="Goal Setting"
              description="Set and track your short-term and long-term goals to stay motivated and focused."
              comingSoon={true}
            />
            <FeatureCard
              icon={<Sparkles className="w-10 h-10 text-indigo-500" />}
              title="Customizable Themes"
              description="Personalize your workspace with a variety of themes to suit your style and mood."
              comingSoon={true}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center m-12">
        <Card className="w-[90%] max-w-2xl bg-white text-black flex flex-col">
          <div className="p-4">
            <CardTitle className="w-full text-center font-bold text-5xl">
              Ready to get started?
            </CardTitle>
            <CardDescription className="text-xl bg-transparent text-gray-400 text-center mt-3">
              Please{" "}
              <span className="underline">
                <Link href="/sign-up"> Sign up</Link>
              </span>{" "}
              to Continue
            </CardDescription>
          </div>
        </Card>
      </div>
    </div>
  );
}
