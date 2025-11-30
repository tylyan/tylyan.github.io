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
			title: "Software Development Engineer II",
			company: "Amazon Delivery Experience AI",
			location: "Seattle, WA",
			start_date: "May 2025",
			end_date: "Present",
			description: "",
			tech_stack: ["TypeScript", "React", "Python", "FastAPI", "LangChain", "Docker", "AWS (Bedrock, Lambda, DynamoDB, S3, ECS Fargate, SQS, SNS, CloudWatch)"],
			bullet_points: [
        "Building AI-powered web applications."
			],
		},
		{
			title: "Fullstack Engineer",
			company: "Stackline",
			location: "Seattle, WA",
			start_date: "August 2024",
			end_date: "December 2024",
			description: "",
			tech_stack: ["TypeScript", "React", "Storybook", "GraphQL", "AWS (DynamoDB, S3, OpenSearch)"],
			bullet_points: [
				"Owned end-to-end delivery of ecommerce analytics feature, aggregating data from multiple sources with interactive graphs, filters, and keyword search with highlighting.",
				"Implemented Storybook for isolated component development and testing, improving frontend development workflow.",
				"Led cross-functional coordination between engineering, product, and design, ensuring on-time feature delivery.",
				"Improved codebase quality by resolving ESLint errors and fixing broken unit tests.",
			],
		},
		{
			title: "Career Break",
			company: "Self Study",
			location: "Mexico",
			start_date: "February 2023",
			end_date: "July 2024",
			description: "",
			tech_stack: ["TypeScript", "React", "Next.js", "Python"],
			bullet_points: [
				"Upskilled fullstack development through self-directed learning and personal projects.",
				"Traveled and lived abroad in Mexico, immersing in local culture and communities.",
				"Learned Spanish through daily practice and language immersion.",
				"Learned to ride motorcycles and obtained motorcycle license.",
			],
		},
		{
			title: "Software Engineer",
			company: "Coda",
			location: "Remote/Bellevue, WA",
			start_date: "April 2022",
			end_date: "January 2023",
			description: "",
			tech_stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AppSec"],
			bullet_points: [
				"Designed and implemented audit logging library used by 40+ API endpoints, ensuring consistent audit data and increasing log coverage for enterprise customers by 25%.",
				"Conducted threat modeling on core features, bringing all production code to medium risk or lower.",
				"Led security reviews on projects, fixed all high/critical pen test findings, and trained 250+ employees on security best practices.",
				"Improved template discoverability with new dialog and entry points, driving increased adoption.",
				"Implemented API endpoints to enable groups integration for 150 enterprise customers.",
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		},
		{
			title: "Software Development Engineer II",
			company: "Amazon Go",
			location: "Remote/Seattle, WA",
			start_date: "March 2020",
			end_date: "March 2022",
			description: "",
			tech_stack: ["TypeScript", "React", "Python", "Java", "Spring", "Kotlin", "AWS (Sagemaker, Lambda, Step Functions, S3, DynamoDB, SQS, SNS, Cognito)", "AppSec"],
			bullet_points: [
				"Built annotation visualization tool enabling team leads to review and correct workforce errors, improving annotation accuracy.",
				"Developed CLI tool to mitigate, investigate, and resolve operational issues, reducing on-call manual operations time by 20%.",
				"Led security reviews (architecture, threat modeling, pen testing) for 4 services powering new store launches.",
				"Designed system for long-running (24+ hour) parallel annotation tasks, sharing sessions across 500+ workers to boost speed and accuracy.",
				"Migrated data processing scripts to parallel cloud compute, reducing annotated data turnaround time by 8 hours per week.",
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
			tech_stack: ["Java", "Spring", "Spark", "Docker", "Kafka", "Golang", "Python", "AWS (Lambda, DynamoDB, S3, EC2, IAM, CloudFormation)", "AppSec"],
			bullet_points: [
				"Designed change-detection system for customer records, enabling updates, splits, and merges across the company's core database.",
				"Built containerized and automated integration test framework, increasing integration test coverage by 50%.",
				"Implemented CI/CD pipelines for 3 services, reducing build times by 20% and deployment lead time by 50%.",
				"Developed library to publish web analytics to streaming platform, enabling real-time fraud investigation.",
				"Conducted penetration testing on internal web applications, identifying and reporting security vulnerabilities.",
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
