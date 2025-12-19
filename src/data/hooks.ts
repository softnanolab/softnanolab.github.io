import { projects } from './projects';
import { team, getNameSlug } from './team';
import type { Project } from './projects';
import type { TeamMember } from './team';

export function useProjects(): Project[] {
  return projects;
}

export function useProjectById(id: string | undefined): Project | undefined {
  if (!id) return undefined;
  return projects.find((p) => p.id === id);
}

export function useTeam(): TeamMember[] {
  return team;
}

export function usePersonBySlug(slug: string | undefined): TeamMember | undefined {
  if (!slug) return undefined;
  return team.find((p) => getNameSlug(p.name) === slug);
}


