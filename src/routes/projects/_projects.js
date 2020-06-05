import fs from 'fs';
import path from 'path';
import marked from 'marked';

export const projMapping = new Map();

export function getProjects () {
	const slugs = fs.readdirSync('projects')
		.filter(file => path.extname(file) === '.md')
		.map(file => file.slice(0, -3));

	const sortedProjects = slugs.map(getProject).sort((a, b) => {
		return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
	});

	if(!projMapping.size) {
		generateProjectMapping(sortedProjects);
	}

	return sortedProjects;
}

export function getProject(slug) {
	const file = `projects/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content, metadata } = process_markdown(markdown);

	const date = new Date(`${metadata.pubdate} EDT`);
	metadata.dateString = date.toDateString();

	const html = marked(content);

	return {
		slug,
		metadata,
		html
	};
}

function generateProjectMapping(sortedProjects) {
	let previousSlug;
	let nextSlug;

	sortedProjects.forEach((proj, index) => {
		previousSlug = index > 0 ? sortedProjects[index - 1].slug : sortedProjects[sortedProjects.length - 1].slug;
		nextSlug = index < sortedProjects.length - 1 ? sortedProjects[index + 1].slug : sortedProjects[0].slug;

		projMapping.set(proj.slug, {prevSlug: previousSlug, nextSlug: nextSlug});
	});
}

function process_markdown(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const frontMatter = match[1];
	const content = markdown.slice(match[0].length);

	const metadata = {};
	frontMatter.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':');
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});

	return { metadata, content };
}
