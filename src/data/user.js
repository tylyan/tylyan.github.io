const INFO = {
	main: {
		title: "Tommy Yan",
		name: "Tommy Yan",
		email: "tylyan@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/tylyan",
		linkedin: "https://www.linkedin.com/in/imtommyyan/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Software Engineer",
		description:
			"I build software that serves people. Now amplified by AI.",
	},

	about: {
		title: "More About Me",
		description: "I'm a software engineer",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],
	/**
{
	title: "Experience 1",
	company: "Experience 1",
	location: "",
	start_date: "View Experience",
	end_date: "https://github.com",
	description:
		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
	bullet_points: [],
	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
},
*/
	experience: [
		{
			title: "Software Engineer",
			company: "Coda",
			location: "Remote/Bellevue, WA",
			start_date: "April 2022",
			end_date: "January 2023",
			description: "",
			bullet_points: [
				"Designed and implemented audit logging library used by over 40 API endpoints. Ensuring consistent audit data and increasing overall logs for enterprise customer by 25%.",
				"Performed threat model analysis on 8 core features, reducing the risk level of all production code to medium or lower.",
				"Increased overall security posture of company by performing security reviews on 8 projects, remediating all high/critical penetration test findings, and delivering security training program for >250 employees.",
				"Improved discoverability and usage of Doc templates by implementing new pop-up dialog and entry-points on the front-end application.",
				"Enabled groups integration for 150 enterprise customers by implementing 4 API endpoints.",
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		},
		{
			title: "Software Development Engineer",
			company: "Amazon",
			location: "Remote/Seattle, WA",
			start_date: "March 2020",
			end_date: "March 2022",
			description: "",
			bullet_points: [
				"Developed website to visualize manual annotations performed by private workforce. Increased annotation accuracy by enabling team leads to review and retrain annotation errors.",
				"Developed CLI tool used to mitigate, investigate, and resolve operational issues. Reduced on-call manual operations time by 20%.",
				"Performed security reviews (including architecture review, threat modeling, manual code testing, and security testing) for 4 services critical to new store launches.",
				"Designed and developed a system to enable long running (>24 hrs) and parallel annotation tasks. Increased annotation rate and accuracy by persisting and sharing annotation sessions across >500 workers.",
				"Integrated data processing scripts to run on parallel compute cloud resources. Reduced the turnaround time of annotated data by 8 hours/week.",
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		},
		{
			title: "Software Engineer",
			company: "Capital One",
			location: "McLean, VA",
			start_date: "July 2017",
			end_date: "February 2020",
			description: "",
			bullet_points: [
				"Designed and implemented solution to identify changes in customer records based on multiple fields. Enabled services to update, split, or merge ambiguous customer records in core customer database shared across enterprise.",
				"Created an automated integration test framework that ran locally at build time using Docker and Fabric8.  Increased total number of integration tests by 50%.",
				"Enabled CI/CD and automated build process for 3 services. Reduced build times by 20% and time to market by 50%.",
				"Designed and developed library to publish web analytic data to streaming data platform. Enabled downstream services to use data to investigate fraudulent transactions.",
				"Performed dynamic penetration tests for various internal web applications.",
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		},
	],
	education: [
		{
			degree: "Master of Science in Computer Science",
			school: "Georgia Intitute of Technology",
			location: "Atlanta, GA",
			grad_date: "May 2022",
			description: "Machine Learning",
		},
		{
			degree: "Bachelor of Science in Computer Science",
			school: "Rutgers University",
			location: "New Brunswick, NJ",
			grad_date: "December 2016",
			description: "Cybersecurity",
		},
	],
};

export default INFO;
