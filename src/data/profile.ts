// All site content lives here. Edit this file to update the site.

export const profile = {
  name: 'Rui Oliveira',
  role: 'Software & AI Engineer',
  location: 'Braga, Portugal',
  summary: [
    'Trying to turn cool ideas into reality.',
    "Currently, I work on LLM agents at Checkmarx, where I've spent more than three years building security products.",
    "Off the clock, I analyse football matches for Merelinense FC's first team.",
  ],
  email: 'rui.nbc.oliveira@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ruinbcoliveira/',
  github: 'https://github.com/priest110',
  siteUrl: 'https://priest110.github.io',
  description:
    'Rui Oliveira is a Software & AI Engineer in Braga, Portugal, building LLM agents and Go backends at Checkmarx.',
};

export interface Job {
  date: string;
  title: string;
  org: string;
  /** Wrap a phrase in {braces} to link it; the URL comes from `links` under the same phrase. */
  text: string;
  links?: Record<string, string>;
  stack?: string[];
}

export const experience: Job[] = [
  {
    date: '2026 – now',
    title: 'AI Engineer',
    org: 'Checkmarx',
    text: 'Building LLM agents for application security, including the Findings Analysis Engine in {Checkmarx Fusion}. Prompt design, retrieval and model evaluation.',
    links: {
      'Checkmarx Fusion': 'https://checkmarx.com/platform/checkmarx-fusion',
    },
    stack: ['Python', 'LangChain', 'AWS Bedrock', 'LangSmith'],
  },
  {
    date: '2023 – 2026',
    title: 'Software Engineer',
    org: 'Checkmarx',
    text: 'Took {Secrets Detection} and {Repository Health} from first commit to general availability. Go microservices on Kubernetes and AWS, with tracing, alerting and dashboards.',
    links: {
      'Secrets Detection': 'https://checkmarx.com/product/secrets-detection/',
      'Repository Health': 'https://checkmarx.com/product/repository-health/',
    },
    stack: ['Go', 'Kubernetes', 'AWS', 'gRPC', 'RabbitMQ', 'React', 'TypeScript'],
  },
  {
    date: '2022 – 2023',
    title: 'Full Stack Developer',
    org: 'Freelance',
    text: 'Web and mobile apps for clients in digital marketing, sustainable energy and non-profits.',
    stack: ['React', 'TypeScript', 'Express'],
  },
];

export interface Project {
  name: string;
  context: string;
  text: string;
  url: string;
  stack?: string[];
}

export const projects: Project[] = [
  {
    name: '2ms',
    context: 'Checkmarx · open source',
    text: 'An open-source secrets detection engine written in Go. I contributed to it and helped maintain it.',
    url: 'https://github.com/checkmarx/2ms',
    stack: ['Go'],
  },
];
