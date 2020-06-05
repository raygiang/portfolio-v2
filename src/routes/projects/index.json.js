import { getProjects } from './_projects.js';


let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		const projects = getProjects().map(project => ({
			title: project.metadata.title,
			slug: project.slug,
			image: project.metadata.image
		}));

		contents = JSON.stringify(projects);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
