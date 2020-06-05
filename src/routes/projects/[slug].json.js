import { projMapping, getProjects, getProject } from './_projects.js';

const lookup = new Map();

export function get(req, res, next) {
	const { slug } = req.params;

	if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
		if(!projMapping.size) {getProjects()};
		const project = getProject(slug);
		let prevNextInfo = projMapping.get(slug);
		project.prevSlug = prevNextInfo.prevSlug;
		project.nextSlug = prevNextInfo.nextSlug;
		lookup.set(slug, JSON.stringify(project));
	}

	const json = lookup.get(slug);

	if (json) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(json);
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
