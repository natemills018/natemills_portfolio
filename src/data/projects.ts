import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "theCLEbrief",
    description:
      "A one-stop-shop newsletter platform for Cleveland news and events. Subscribers receive weekly short-form content covering what's happening around the city, making it easy to stay informed without the noise.",
    tech: [
      { name: "Python", color: "yellow" },
      { name: "TypeScript", color: "purple" },
      { name: "React", color: "blue" },
      { name: "Docker", color: "cyan" },
    ],
    githubUrl: "https://github.com/natemills018/news-aggregator",
    image: null,
    imageAlt: "theCLEbrief",
  },
  {
    title: "Workout Bot",
    description:
      "A Discord bot powered by Claude's API that generates personalized weekly workout splits. Each 60-minute session is structured with a warm-up, main strength piece, and conditioning finisher — tailored to my preferences and training methodology.",
    tech: [
      { name: "TypeScript", color: "purple" },
      { name: "Node.js", color: "green" },
      { name: "Claude API", color: "orange" },
      { name: "Discord.js", color: "indigo" },
    ],
    githubUrl: "https://github.com/natemills018/workout-bot",
    image: "/images/discord-workout-bot.png",
    imageAlt: "Workout Bot",
  },
  {
    title: "Discord Weather Bot",
    description:
      "A Discord bot that fetches and delivers weather forecasts for any requested city. Built with cron-scheduling capabilities for automated daily reports, currently triggered on demand.",
    tech: [
      { name: "TypeScript", color: "purple" },
      { name: "Node.js", color: "green" },
      { name: "Discord.js", color: "indigo" },
    ],
    githubUrl: "https://github.com/natemills018/discord-weather-botv1",
    image: "/images/discord-weather-bot.png",
    imageAlt: "Discord Weather Bot",
  },
];
