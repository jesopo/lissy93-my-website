import { load as loadPosts } from '$src/routes/blog/+page';
import { load as loadProjects } from '$src/routes/projects/+page.server';
import { load as loadSocials } from '$src/routes/contact/+page.server';
import type { PageServerLoad } from './$types';


/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }: PageServerLoad) => {
  return {
    posts: (await loadPosts({ fetch })).posts,
    repos: (await loadProjects({ fetch })).repos,
    socials: (await loadSocials({ fetch })).props,
  };
};
