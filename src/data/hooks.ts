import { useState, useEffect } from 'react';
import { projects } from './projects';
import { team, pastMembers, getNameSlug } from './team';
import type { Project } from './projects';
import type { TeamMember } from './team';

export interface GitHubRepoStats {
  stars: number;
  forks: number;
  loading: boolean;
  error: boolean;
}

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
  const allMembers = [...team, ...pastMembers];
  return allMembers.find((p) => getNameSlug(p.name) === slug);
}

export function useGitHubRepoStats(owner: string, repo: string): GitHubRepoStats {
  const [stats, setStats] = useState<GitHubRepoStats>({
    stars: 0,
    forks: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!response.ok) {
          throw new Error('Failed to fetch repo stats');
        }
        const data = await response.json();
        setStats({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          loading: false,
          error: false,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats({
          stars: 0,
          forks: 0,
          loading: false,
          error: true,
        });
      }
    };

    fetchRepoStats();
  }, [owner, repo]);

  return stats;
}
