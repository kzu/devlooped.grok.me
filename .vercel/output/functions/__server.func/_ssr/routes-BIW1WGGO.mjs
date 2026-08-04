import { r as __toESM } from "../_runtime.mjs";
import { M as require_react, h as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, i as Moon, n as Sun, o as Heart, r as Star, s as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BIW1WGGO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function applyTheme(theme) {
	const root = document.documentElement;
	root.classList.remove("dark", "light");
	root.classList.add(theme);
	root.style.colorScheme = theme;
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem("devlooped-theme");
		const next = stored === "light" || stored === "dark" ? stored : "dark";
		setTheme(next);
		applyTheme(next);
	}, []);
	function toggle() {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		localStorage.setItem("devlooped-theme", next);
		applyTheme(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
		className: "inline-flex size-11 items-center justify-center rounded-full text-fg-muted transition-colors duration-150 hover:bg-bg-subtle hover:text-fg",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
	});
}
var site = {
	name: "Devlooped",
	tagline: "Accelerating your dev loop through sharper tools",
	pronunciation: "/dev-lüpt/",
	description: "A family of open-source libraries and tools for .NET developers — testing, build, packaging, architecture, AI, and more. Home of Moq and dozens of developer tools used across the ecosystem.",
	location: "Argentina",
	website: "https://www.devlooped.com",
	github: "https://github.com/devlooped",
	nuget: "https://www.nuget.org/profiles/devlooped",
	x: "https://x.com/devlooped",
	xHandle: "@devlooped",
	email: "info@devlooped.com",
	avatar: "https://avatars.githubusercontent.com/u/61533818?v=4",
	osmf: "https://opensourcemaintenancefee.org/",
	sponsors: "https://github.com/sponsors/devlooped"
};
var stats = [
	{
		label: "NuGet downloads",
		value: "1.2B",
		detail: "1,183,184,456 · Moq alone"
	},
	{
		label: "Repositories",
		value: "107",
		detail: "public on GitHub"
	},
	{
		label: "Moq stars",
		value: "6.4k",
		detail: "devlooped/moq"
	},
	{
		label: "Org followers",
		value: "138",
		detail: "github.com/devlooped"
	}
];
var featuredProjects = [
	{
		rank: 1,
		name: "moq",
		repo: "devlooped/moq",
		url: "https://github.com/devlooped/moq",
		stars: 6402,
		downloads: 1183184456,
		downloadsLabel: "1.2B",
		description: "The most popular and friendly mocking framework for .NET. The gold standard for unit tests across the ecosystem.",
		tags: [
			"C#",
			"testing",
			"mocking"
		]
	},
	{
		rank: 2,
		name: "GitInfo",
		repo: "devlooped/GitInfo",
		url: "https://github.com/devlooped/GitInfo",
		stars: 650,
		downloads: 12219516,
		downloadsLabel: "12M",
		description: "Git and SemVer info from MSBuild, C#, and VB — access commit metadata and infer versions at build time.",
		tags: [
			"C#",
			"msbuild",
			"semver"
		]
	},
	{
		rank: 3,
		name: "ThisAssembly",
		repo: "devlooped/ThisAssembly",
		url: "https://github.com/devlooped/ThisAssembly",
		stars: 531,
		downloads: 52e5,
		downloadsLabel: "5M+",
		description: "Expose project and assembly information as constants via Roslyn source generators.",
		tags: [
			"C#",
			"source-generators",
			"roslyn"
		]
	},
	{
		rank: 4,
		name: "nugetizer",
		repo: "devlooped/nugetizer",
		url: "https://github.com/devlooped/nugetizer",
		stars: 271,
		downloads: 1209699,
		downloadsLabel: "1.2M",
		description: "A simple, flexible packing model for authoring NuGet packages without the ceremony.",
		tags: [
			"C#",
			"nuget",
			"packaging"
		]
	},
	{
		rank: 5,
		name: "SmallSharp",
		repo: "devlooped/SmallSharp",
		url: "https://github.com/devlooped/SmallSharp",
		stars: 308,
		downloads: 16876,
		downloadsLabel: "17k",
		description: "Create, edit, and run multiple C# top-level programs in one project — pick the startup from the start button.",
		tags: [
			"C#",
			"tooling",
			"learning"
		]
	},
	{
		rank: 6,
		name: "xunit.assemblyfixture",
		repo: "devlooped/xunit.assemblyfixture",
		url: "https://github.com/devlooped/xunit.assemblyfixture",
		stars: 26,
		downloads: 1830668,
		downloadsLabel: "1.8M",
		description: "Provides per-assembly fixture state support for xUnit — IAssemblyFixture shared setup.",
		tags: [
			"C#",
			"testing",
			"xunit"
		]
	}
];
var moreProjects = [
	{
		name: "Merq",
		repo: "devlooped/Merq",
		url: "https://github.com/devlooped/Merq",
		stars: 34,
		downloads: 493160,
		downloadsLabel: "493k",
		description: "Internal application architecture via command and event messages.",
		tags: [
			"C#",
			"messaging",
			"architecture"
		]
	},
	{
		name: "avatar",
		repo: "devlooped/avatar",
		url: "https://github.com/devlooped/avatar",
		stars: 141,
		description: "Modern compile-time interception and proxy generation for .NET.",
		tags: [
			"C#",
			"proxies",
			"source-generators"
		]
	},
	{
		name: "NuDoq",
		repo: "devlooped/NuDoq",
		url: "https://github.com/devlooped/NuDoq",
		stars: 109,
		downloads: 308732,
		downloadsLabel: "309k",
		description: "Standalone API to read .NET XML documentation and optionally augment it with reflection.",
		tags: [
			"C#",
			"docs",
			"xml"
		]
	},
	{
		name: "dotnet-trx",
		repo: "devlooped/dotnet-trx",
		url: "https://github.com/devlooped/dotnet-trx",
		stars: 61,
		downloads: 392835,
		downloadsLabel: "393k",
		description: "Pretty-print test results from TRX files in the terminal.",
		tags: [
			"C#",
			"testing",
			"dotnet-tool"
		]
	},
	{
		name: "dotnet-file",
		repo: "devlooped/dotnet-file",
		url: "https://github.com/devlooped/dotnet-file",
		stars: 62,
		downloads: 218572,
		downloadsLabel: "219k",
		description: "Download, update, and sync loose files from URLs with a global .NET tool.",
		tags: ["C#", "dotnet-tool"]
	},
	{
		name: "SponsorLink",
		repo: "devlooped/SponsorLink",
		url: "https://github.com/devlooped/SponsorLink",
		stars: 42,
		description: "An experiment in OSS sustainability — linking sponsorship to package value.",
		tags: [
			"C#",
			"oss",
			"sustainability"
		]
	},
	{
		name: "CloudActors",
		repo: "devlooped/CloudActors",
		url: "https://github.com/devlooped/CloudActors",
		stars: 40,
		description: "Opinionated Cloud Native actors library that integrates with Microsoft Orleans.",
		tags: [
			"C#",
			"actors",
			"orleans"
		]
	},
	{
		name: "TableStorage",
		repo: "devlooped/TableStorage",
		url: "https://github.com/devlooped/TableStorage",
		stars: 27,
		downloads: 73531,
		downloadsLabel: "74k",
		description: "Repository pattern with POCO support for Azure / Cosmos DB Table Storage.",
		tags: [
			"C#",
			"azure",
			"storage"
		]
	}
];
var packages = [
	{
		name: "Moq",
		about: "The most popular and friendly mocking framework for .NET.",
		downloads: 1183184456,
		downloadsLabel: "1.2B",
		flagship: true,
		url: "https://www.nuget.org/packages/Moq"
	},
	{
		name: "GitInfo",
		about: "Access commit information from MSBuild and code; infer SemVer from Git.",
		downloads: 12219516,
		downloadsLabel: "12M",
		url: "https://www.nuget.org/packages/GitInfo"
	},
	{
		name: "ThisAssembly.Constants",
		about: "Generates ThisAssembly.Constants with public constants from MSBuild items.",
		downloads: 3636710,
		downloadsLabel: "3.6M",
		url: "https://www.nuget.org/packages/ThisAssembly.Constants"
	},
	{
		name: "xunit.assemblyfixture",
		about: "Assembly-level shared state via IAssemblyFixture for xUnit.",
		downloads: 1830668,
		downloadsLabel: "1.8M",
		url: "https://www.nuget.org/packages/xunit.assemblyfixture"
	},
	{
		name: "NuGetizer",
		about: "Simple, flexible, and powerful NuGet packaging.",
		downloads: 1209699,
		downloadsLabel: "1.2M",
		url: "https://www.nuget.org/packages/NuGetizer"
	},
	{
		name: "Devlooped.JQ",
		about: "A .NET-friendly distribution of the official jq implementation.",
		downloads: 921337,
		downloadsLabel: "921k",
		url: "https://www.nuget.org/packages/Devlooped.JQ"
	},
	{
		name: "Merq",
		about: "Message bus mediator for internal architecture via commands and events.",
		downloads: 493160,
		downloadsLabel: "493k",
		url: "https://www.nuget.org/packages/Merq"
	},
	{
		name: "dotnet-trx",
		about: "Pretty-print test results in TRX format.",
		downloads: 392835,
		downloadsLabel: "393k",
		url: "https://www.nuget.org/packages/dotnet-trx"
	},
	{
		name: "ThisAssembly.AssemblyInfo",
		about: "Static ThisAssembly.Info class exposing SDK-style project attributes.",
		downloads: 371520,
		downloadsLabel: "372k",
		url: "https://www.nuget.org/packages/ThisAssembly.AssemblyInfo"
	},
	{
		name: "NuDoq",
		about: "Lightweight API to read .NET XML documentation files.",
		downloads: 308732,
		downloadsLabel: "309k",
		url: "https://www.nuget.org/packages/NuDoq"
	},
	{
		name: "dotnet-file",
		about: "Download and update loose files from arbitrary URLs.",
		downloads: 218572,
		downloadsLabel: "219k",
		url: "https://www.nuget.org/packages/dotnet-file"
	},
	{
		name: "Devlooped.CredentialManager",
		about: "Git Credential Manager for Windows, macOS, and Linux as a package.",
		downloads: 100567,
		downloadsLabel: "101k",
		url: "https://www.nuget.org/packages/Devlooped.CredentialManager"
	}
];
var recentUpdates = [
	{
		date: "2026-07-22",
		text: "devlooped/go-sharp@v1.1.0 released — MRU run history with interactive picker, open command for local files and URLs.",
		url: "https://x.com/devlooped/status/2079790017862353288",
		views: 234
	},
	{
		date: "2026-07-20",
		text: "devlooped/WhatsApp@v2.0.0-rc.1 — connectivity ping, BSUID support, auto-populate User.Number from Id.",
		url: "https://x.com/devlooped/status/2079355457601147007"
	},
	{
		date: "2026-07-18",
		text: "devlooped/skill → /skill — ephemeral remote skill runner. Try the next skill you like before you marry it.",
		url: "https://x.com/devlooped/status/2078270883911590147"
	}
];
var domains = [
	{
		title: "Testing",
		body: "Moq, xunit fixtures, TRX pretty-printing — tools that make the feedback loop faster and friendlier."
	},
	{
		title: "Build & packaging",
		body: "GitInfo, ThisAssembly, NuGetizer — versioning, constants, and packing without ceremony."
	},
	{
		title: "Architecture",
		body: "Merq, CloudActors, Avatar — message-driven internals, actors, and compile-time proxies."
	},
	{
		title: "CLI & productivity",
		body: "SmallSharp, dotnet-file, go-sharp, skills — tighter loops from the terminal to the IDE."
	}
];
var nav = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#packages",
		label: "Packages"
	},
	{
		href: "#updates",
		label: "Updates"
	},
	{
		href: "#support",
		label: "Support"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-max mx-auto flex h-14 items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "group flex min-w-0 items-center gap-2.5 text-fg no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.avatar,
						alt: "",
						width: 28,
						height: 28,
						className: "size-7 rounded-full border border-border"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-sm font-medium tracking-tight",
						children: site.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 sm:flex",
					"aria-label": "Primary",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "rounded-full px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.github,
						target: "_blank",
						rel: "noreferrer",
						className: "hidden rounded-full px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg md:inline-flex",
						children: "GitHub"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden hero-wash border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-hairline opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-max relative section-pad pb-14 pt-12 sm:pb-16 sm:pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-fg-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: "Open source"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg-subtle",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Creator of Moq & a large .NET tooling family" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-2 font-mono text-xs text-fg-subtle",
					children: ["aka ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg-muted",
						children: site.pronunciation
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-[clamp(2.75rem,7vw,4.25rem)] font-normal leading-[1.02] tracking-tight text-fg text-balance",
					children: site.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl font-display text-2xl tracking-tight text-fg-muted sm:text-3xl",
					children: site.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-[15px] leading-relaxed text-fg-muted",
					children: site.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-fg-subtle",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-3.5",
								"aria-hidden": true
							}), site.location]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg-subtle/60",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.website,
							target: "_blank",
							rel: "noreferrer",
							className: "link-quiet inline-flex items-center gap-1 font-medium",
							children: ["devlooped.com", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-3.5",
								"aria-hidden": true
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.github,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90",
							children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-3.5",
								"aria-hidden": true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.nuget,
							target: "_blank",
							rel: "noreferrer",
							className: "link-quiet inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-5 text-sm font-medium",
							children: "NuGet profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.x,
							target: "_blank",
							rel: "noreferrer",
							className: "link-quiet inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-5 text-sm font-medium",
							children: "Follow on X"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4",
					children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-bg-elevated/60 p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-medium uppercase tracking-wider text-fg-subtle",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 font-display text-3xl tracking-tight text-fg sm:text-4xl tabular",
								children: item.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-fg-subtle",
								children: item.detail
							})
						]
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs font-medium uppercase tracking-wider text-fg-subtle",
					children: "Open source"
				})
			]
		})]
	});
}
function DomainsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-bg-elevated/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-max section-pad py-14 sm:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-tight text-fg sm:text-4xl",
					children: "Where the tools land"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[15px] leading-relaxed text-fg-muted",
					children: "Some are well established, others niche, some large and some small — all built to sharpen the day-to-day developer loop."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: domains.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-bg p-5 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium tracking-tight text-fg",
						children: d.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg-muted",
						children: d.body
					})]
				}, d.title))
			})]
		})
	});
}
function formatCompact(n) {
	if (n >= 1e9) {
		const v = n / 1e9;
		return `${v >= 10 ? v.toFixed(0) : v.toFixed(1).replace(/\.0$/, "")}B`;
	}
	if (n >= 1e6) {
		const v = n / 1e6;
		return `${v >= 10 ? v.toFixed(0) : v.toFixed(1).replace(/\.0$/, "")}M`;
	}
	if (n >= 1e3) {
		const v = n / 1e3;
		return `${v >= 10 ? v.toFixed(0) : v.toFixed(1).replace(/\.0$/, "")}k`;
	}
	return String(n);
}
function ProjectsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-max section-pad py-14 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight text-fg sm:text-4xl",
						children: "Featured projects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[15px] leading-relaxed text-fg-muted",
						children: "Ranked by GitHub stars and nuget.org downloads — the libraries and tools with the broadest real-world impact."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-3",
					children: featuredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: project.url,
						target: "_blank",
						rel: "noreferrer",
						className: "group grid gap-3 rounded-2xl border border-border bg-bg-elevated/40 p-4 transition-colors duration-150 hover:border-border-strong hover:bg-bg-elevated sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start sm:gap-5 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3 sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-fg-subtle tabular",
									children: ["#", project.rank]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-x-3 gap-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-fg group-hover:text-accent",
											children: project.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate font-mono text-xs text-fg-subtle",
											children: project.repo
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[15px] leading-relaxed text-fg-muted",
										children: project.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-1.5",
										children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center rounded-full border border-border bg-bg px-2 py-0.5 font-mono text-xs text-fg-muted",
											children: tag
										}, tag))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full border border-border bg-bg px-2 py-0.5 font-mono text-xs text-fg-muted tabular",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										className: "size-3",
										"aria-hidden": true
									}), formatCompact(project.stars)]
								}), project.downloadsLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-fg-subtle tabular",
									children: [project.downloadsLabel, " dl"]
								}) : null]
							})
						]
					}) }, project.repo))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl tracking-tight text-fg",
							children: "More projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 divide-y divide-border border-y border-border",
							children: moreProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.url,
								target: "_blank",
								rel: "noreferrer",
								className: "group flex flex-col gap-2 py-4 transition-colors sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_auto] sm:items-center sm:gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-x-2 gap-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-fg group-hover:text-accent",
												children: project.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-xs text-fg-subtle",
												children: project.repo
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 flex flex-wrap items-center gap-2 text-xs text-fg-subtle",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 tabular",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													className: "size-3",
													"aria-hidden": true
												}), formatCompact(project.stars)]
											}), project.downloadsLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "tabular",
												children: [project.downloadsLabel, " dl"]
											}) : null]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-fg-muted",
										children: project.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden sm:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-fg-subtle transition-colors group-hover:text-fg" })
									})
								]
							}) }, project.repo))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.github,
								target: "_blank",
								rel: "noreferrer",
								className: "link-quiet inline-flex items-center gap-1 font-medium",
								children: ["GitHub org", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-3.5",
									"aria-hidden": true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.nuget,
								target: "_blank",
								rel: "noreferrer",
								className: "link-quiet inline-flex items-center gap-1 font-medium",
								children: ["All packages", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-3.5",
									"aria-hidden": true
								})]
							})]
						})
					]
				})
			]
		})
	});
}
function PackagesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "packages",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-max section-pad py-14 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight text-fg sm:text-4xl",
						children: "Packages that ship"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[15px] leading-relaxed text-fg-muted",
						children: "Libraries and tools under the Devlooped ecosystem on nuget.org — led by Moq with over a billion downloads."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden border-b border-border bg-bg-subtle/50 px-5 py-3 text-xs font-medium uppercase tracking-wider text-fg-subtle sm:grid sm:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)_auto] sm:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Package" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "About" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right",
								children: "Downloads"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: packages.map((pkg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: i < packages.length - 1 ? "border-b border-border" : void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: pkg.url,
							target: "_blank",
							rel: "noreferrer",
							className: "group grid gap-1 px-4 py-4 transition-colors hover:bg-bg-elevated sm:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)_auto] sm:items-center sm:gap-4 sm:px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-fg group-hover:text-accent",
										children: pkg.name
									}), pkg.flagship ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border bg-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle",
										children: "flagship"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-fg-muted",
									children: pkg.about
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm font-medium text-fg tabular sm:text-right",
									children: pkg.downloadsLabel
								})
							]
						})
					}, pkg.name)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: site.nuget,
					target: "_blank",
					rel: "noreferrer",
					className: "link-quiet mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium",
					children: ["All packages on nuget.org", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-3.5",
						"aria-hidden": true
					})]
				})
			]
		})
	});
}
function UpdatesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "updates",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-max section-pad py-14 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl tracking-tight text-fg sm:text-4xl",
							children: "Recent updates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[15px] leading-relaxed text-fg-muted",
							children: "Releases and notes from the feed — shipping tools, skills, and experiments."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.x,
						target: "_blank",
						rel: "noreferrer",
						className: "link-quiet inline-flex items-center gap-1 text-sm font-medium",
						children: [
							"X · ",
							site.xHandle,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-3.5",
								"aria-hidden": true
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: recentUpdates.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.url,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated/40 p-4 transition-colors hover:border-border-strong hover:bg-bg-elevated sm:flex-row sm:items-start sm:gap-6 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							dateTime: item.date,
							className: "shrink-0 font-mono text-xs text-fg-subtle tabular",
							children: item.date
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] leading-relaxed text-fg",
								children: item.text
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-2 inline-flex items-center gap-1 text-xs text-fg-subtle transition-colors group-hover:text-fg-muted",
								children: ["View on X", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-3",
									"aria-hidden": true
								})]
							})]
						})]
					}) }, item.url))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: site.x,
					target: "_blank",
					rel: "noreferrer",
					className: "link-quiet mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium",
					children: [
						"Follow ",
						site.xHandle,
						" on X",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "size-3.5",
							"aria-hidden": true
						})
					]
				})
			]
		})
	});
}
function SupportSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "support",
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-max section-pad py-14 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-[1.75rem] border border-border bg-bg-elevated",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 inline-flex size-10 items-center justify-center rounded-full border border-border bg-bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "size-4 text-fg-muted",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl tracking-tight text-fg sm:text-4xl",
							children: "Support the loop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-[15px] leading-relaxed text-fg-muted",
							children: "Rather than per-project licensing, Devlooped offers the Open Source Maintenance Fee — one path that covers current and future libraries and tools. If a package does not include the OSMF EULA, you are not bound by it at all."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.osmf,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90",
								children: ["Open Source Maintenance Fee", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-3.5",
									"aria-hidden": true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.sponsors,
								target: "_blank",
								rel: "noreferrer",
								className: "link-quiet inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-bg px-5 text-sm font-medium",
								children: "GitHub Sponsors"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-bg p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-fg-subtle",
								children: "Why it matters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3 text-sm leading-relaxed text-fg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "One maintenance fee covers the whole Devlooped family." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Keeps Moq, GitInfo, ThisAssembly, and the long tail of tools maintained." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Packages without the OSMF EULA stay fully unbound by it." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:info@devlooped.com",
								className: "link-quiet mt-5 inline-flex items-center gap-1 text-sm font-medium",
								children: [site.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-3.5",
									"aria-hidden": true
								})]
							})
						]
					})]
				})
			})
		})
	});
}
var links = [
	{
		href: site.github,
		label: "GitHub"
	},
	{
		href: site.nuget,
		label: "NuGet"
	},
	{
		href: site.x,
		label: "X"
	},
	{
		href: site.website,
		label: "devlooped.com"
	},
	{
		href: site.osmf,
		label: "OSMF"
	},
	{
		href: "https://github.com/sponsors/devlooped",
		label: "Sponsors"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "section-max section-pad py-12 sm:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.avatar,
						alt: "",
						width: 32,
						height: 32,
						className: "size-8 rounded-full border border-border"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl tracking-tight text-fg",
						children: site.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg-muted",
						children: site.tagline
					})] })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Footer",
				className: "flex flex-wrap gap-x-4 gap-y-2 text-sm",
				children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					target: "_blank",
					rel: "noreferrer",
					className: "link-quiet font-medium",
					children: link.label
				}, link.href))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-10 max-w-2xl text-xs leading-relaxed text-fg-subtle",
			children: [
				"Unofficial highlight page for",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: site.github,
					className: "link-quiet",
					children: "Devlooped"
				}),
				". Featured projects ranked by GitHub stars and NuGet downloads. Stats reflect public data from GitHub, NuGet, and X."
			]
		})]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DomainsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdatesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { HomePage as component };
