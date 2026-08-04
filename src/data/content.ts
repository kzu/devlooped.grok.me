export const site = {
  name: "Devlooped",
  tagline: "Accelerating your dev loop through sharper tools",
  pronunciation: "/dev-lüpt/",
  description:
    "A family of open-source libraries and tools for .NET developers — testing, build, packaging, architecture, AI, and more. Home of Moq and dozens of developer tools used across the ecosystem.",
  location: "Argentina",
  website: "https://www.devlooped.com",
  github: "https://github.com/devlooped",
  nuget: "https://www.nuget.org/profiles/devlooped",
  x: "https://x.com/devlooped",
  xHandle: "@devlooped",
  email: "info@devlooped.com",
  avatar: "https://avatars.githubusercontent.com/u/61533818?v=4",
  osmf: "https://opensourcemaintenancefee.org/",
  sponsors: "https://github.com/sponsors/devlooped",
};

export const stats = [
  {
    label: "NuGet downloads",
    value: "1.2B",
    detail: "1,183,184,456 · Moq alone",
  },
  {
    label: "Repositories",
    value: "107",
    detail: "public on GitHub",
  },
  {
    label: "Moq stars",
    value: "6.4k",
    detail: "devlooped/moq",
  },
  {
    label: "Org followers",
    value: "138",
    detail: "github.com/devlooped",
  },
];

export type Project = {
  rank?: number;
  name: string;
  repo: string;
  url: string;
  stars: number;
  downloads?: number;
  downloadsLabel?: string;
  description: string;
  tags: string[];
};

export const featuredProjects: Project[] = [
  {
    rank: 1,
    name: "moq",
    repo: "devlooped/moq",
    url: "https://github.com/devlooped/moq",
    stars: 6402,
    downloads: 1_183_184_456,
    downloadsLabel: "1.2B",
    description:
      "The most popular and friendly mocking framework for .NET. The gold standard for unit tests across the ecosystem.",
    tags: ["C#", "testing", "mocking"],
  },
  {
    rank: 2,
    name: "GitInfo",
    repo: "devlooped/GitInfo",
    url: "https://github.com/devlooped/GitInfo",
    stars: 650,
    downloads: 12_219_516,
    downloadsLabel: "12M",
    description:
      "Git and SemVer info from MSBuild, C#, and VB — access commit metadata and infer versions at build time.",
    tags: ["C#", "msbuild", "semver"],
  },
  {
    rank: 3,
    name: "ThisAssembly",
    repo: "devlooped/ThisAssembly",
    url: "https://github.com/devlooped/ThisAssembly",
    stars: 531,
    downloads: 5_200_000,
    downloadsLabel: "5M+",
    description:
      "Expose project and assembly information as constants via Roslyn source generators.",
    tags: ["C#", "source-generators", "roslyn"],
  },
  {
    rank: 4,
    name: "nugetizer",
    repo: "devlooped/nugetizer",
    url: "https://github.com/devlooped/nugetizer",
    stars: 271,
    downloads: 1_209_699,
    downloadsLabel: "1.2M",
    description:
      "A simple, flexible packing model for authoring NuGet packages without the ceremony.",
    tags: ["C#", "nuget", "packaging"],
  },
  {
    rank: 5,
    name: "SmallSharp",
    repo: "devlooped/SmallSharp",
    url: "https://github.com/devlooped/SmallSharp",
    stars: 308,
    downloads: 16_876,
    downloadsLabel: "17k",
    description:
      "Create, edit, and run multiple C# top-level programs in one project — pick the startup from the start button.",
    tags: ["C#", "tooling", "learning"],
  },
  {
    rank: 6,
    name: "xunit.assemblyfixture",
    repo: "devlooped/xunit.assemblyfixture",
    url: "https://github.com/devlooped/xunit.assemblyfixture",
    stars: 26,
    downloads: 1_830_668,
    downloadsLabel: "1.8M",
    description:
      "Provides per-assembly fixture state support for xUnit — IAssemblyFixture shared setup.",
    tags: ["C#", "testing", "xunit"],
  },
];

export const moreProjects: Project[] = [
  {
    name: "Merq",
    repo: "devlooped/Merq",
    url: "https://github.com/devlooped/Merq",
    stars: 34,
    downloads: 493_160,
    downloadsLabel: "493k",
    description:
      "Internal application architecture via command and event messages.",
    tags: ["C#", "messaging", "architecture"],
  },
  {
    name: "avatar",
    repo: "devlooped/avatar",
    url: "https://github.com/devlooped/avatar",
    stars: 141,
    description:
      "Modern compile-time interception and proxy generation for .NET.",
    tags: ["C#", "proxies", "source-generators"],
  },
  {
    name: "NuDoq",
    repo: "devlooped/NuDoq",
    url: "https://github.com/devlooped/NuDoq",
    stars: 109,
    downloads: 308_732,
    downloadsLabel: "309k",
    description:
      "Standalone API to read .NET XML documentation and optionally augment it with reflection.",
    tags: ["C#", "docs", "xml"],
  },
  {
    name: "dotnet-trx",
    repo: "devlooped/dotnet-trx",
    url: "https://github.com/devlooped/dotnet-trx",
    stars: 61,
    downloads: 392_835,
    downloadsLabel: "393k",
    description: "Pretty-print test results from TRX files in the terminal.",
    tags: ["C#", "testing", "dotnet-tool"],
  },
  {
    name: "dotnet-file",
    repo: "devlooped/dotnet-file",
    url: "https://github.com/devlooped/dotnet-file",
    stars: 62,
    downloads: 218_572,
    downloadsLabel: "219k",
    description:
      "Download, update, and sync loose files from URLs with a global .NET tool.",
    tags: ["C#", "dotnet-tool"],
  },
  {
    name: "SponsorLink",
    repo: "devlooped/SponsorLink",
    url: "https://github.com/devlooped/SponsorLink",
    stars: 42,
    description:
      "An experiment in OSS sustainability — linking sponsorship to package value.",
    tags: ["C#", "oss", "sustainability"],
  },
  {
    name: "CloudActors",
    repo: "devlooped/CloudActors",
    url: "https://github.com/devlooped/CloudActors",
    stars: 40,
    description:
      "Opinionated Cloud Native actors library that integrates with Microsoft Orleans.",
    tags: ["C#", "actors", "orleans"],
  },
  {
    name: "TableStorage",
    repo: "devlooped/TableStorage",
    url: "https://github.com/devlooped/TableStorage",
    stars: 27,
    downloads: 73_531,
    downloadsLabel: "74k",
    description:
      "Repository pattern with POCO support for Azure / Cosmos DB Table Storage.",
    tags: ["C#", "azure", "storage"],
  },
];

export type Package = {
  name: string;
  about: string;
  downloads: number;
  downloadsLabel: string;
  flagship?: boolean;
  url: string;
};

export const packages: Package[] = [
  {
    name: "Moq",
    about: "The most popular and friendly mocking framework for .NET.",
    downloads: 1_183_184_456,
    downloadsLabel: "1.2B",
    flagship: true,
    url: "https://www.nuget.org/packages/Moq",
  },
  {
    name: "GitInfo",
    about:
      "Access commit information from MSBuild and code; infer SemVer from Git.",
    downloads: 12_219_516,
    downloadsLabel: "12M",
    url: "https://www.nuget.org/packages/GitInfo",
  },
  {
    name: "ThisAssembly.Constants",
    about:
      "Generates ThisAssembly.Constants with public constants from MSBuild items.",
    downloads: 3_636_710,
    downloadsLabel: "3.6M",
    url: "https://www.nuget.org/packages/ThisAssembly.Constants",
  },
  {
    name: "xunit.assemblyfixture",
    about: "Assembly-level shared state via IAssemblyFixture for xUnit.",
    downloads: 1_830_668,
    downloadsLabel: "1.8M",
    url: "https://www.nuget.org/packages/xunit.assemblyfixture",
  },
  {
    name: "NuGetizer",
    about: "Simple, flexible, and powerful NuGet packaging.",
    downloads: 1_209_699,
    downloadsLabel: "1.2M",
    url: "https://www.nuget.org/packages/NuGetizer",
  },
  {
    name: "Devlooped.JQ",
    about: "A .NET-friendly distribution of the official jq implementation.",
    downloads: 921_337,
    downloadsLabel: "921k",
    url: "https://www.nuget.org/packages/Devlooped.JQ",
  },
  {
    name: "Merq",
    about:
      "Message bus mediator for internal architecture via commands and events.",
    downloads: 493_160,
    downloadsLabel: "493k",
    url: "https://www.nuget.org/packages/Merq",
  },
  {
    name: "dotnet-trx",
    about: "Pretty-print test results in TRX format.",
    downloads: 392_835,
    downloadsLabel: "393k",
    url: "https://www.nuget.org/packages/dotnet-trx",
  },
  {
    name: "ThisAssembly.AssemblyInfo",
    about:
      "Static ThisAssembly.Info class exposing SDK-style project attributes.",
    downloads: 371_520,
    downloadsLabel: "372k",
    url: "https://www.nuget.org/packages/ThisAssembly.AssemblyInfo",
  },
  {
    name: "NuDoq",
    about: "Lightweight API to read .NET XML documentation files.",
    downloads: 308_732,
    downloadsLabel: "309k",
    url: "https://www.nuget.org/packages/NuDoq",
  },
  {
    name: "dotnet-file",
    about: "Download and update loose files from arbitrary URLs.",
    downloads: 218_572,
    downloadsLabel: "219k",
    url: "https://www.nuget.org/packages/dotnet-file",
  },
  {
    name: "Devlooped.CredentialManager",
    about: "Git Credential Manager for Windows, macOS, and Linux as a package.",
    downloads: 100_567,
    downloadsLabel: "101k",
    url: "https://www.nuget.org/packages/Devlooped.CredentialManager",
  },
];

export type Update = {
  date: string;
  text: string;
  url: string;
  views?: number;
};

export const recentUpdates: Update[] = [
  {
    date: "2026-07-22",
    text: "devlooped/go-sharp@v1.1.0 released — MRU run history with interactive picker, open command for local files and URLs.",
    url: "https://x.com/devlooped/status/2079790017862353288",
    views: 234,
  },
  {
    date: "2026-07-20",
    text: "devlooped/WhatsApp@v2.0.0-rc.1 — connectivity ping, BSUID support, auto-populate User.Number from Id.",
    url: "https://x.com/devlooped/status/2079355457601147007",
  },
  {
    date: "2026-07-18",
    text: "devlooped/skill → /skill — ephemeral remote skill runner. Try the next skill you like before you marry it.",
    url: "https://x.com/devlooped/status/2078270883911590147",
  },
];

export const domains = [
  {
    title: "Testing",
    body: "Moq, xunit fixtures, TRX pretty-printing — tools that make the feedback loop faster and friendlier.",
  },
  {
    title: "Build & packaging",
    body: "GitInfo, ThisAssembly, NuGetizer — versioning, constants, and packing without ceremony.",
  },
  {
    title: "Architecture",
    body: "Merq, CloudActors, Avatar — message-driven internals, actors, and compile-time proxies.",
  },
  {
    title: "CLI & productivity",
    body: "SmallSharp, dotnet-file, go-sharp, skills — tighter loops from the terminal to the IDE.",
  },
];
