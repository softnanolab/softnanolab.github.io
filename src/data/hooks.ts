import { projects } from './projects';
import { team } from './team';
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

export function usePersonById(id: string | undefined): TeamMember | undefined {
  if (!id) return undefined;
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) return undefined;
  return team.find((p) => p.id === numericId);
}


