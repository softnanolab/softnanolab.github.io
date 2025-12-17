export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  iconType: 'invader1' | 'invader2';
  // Blog-like content
  date?: string;
  author?: string;
  content?: string; // Main blog content (can be markdown-like or HTML)
  image?: string; // Optional image URL
  tags?: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface Publication {
  id: number;
  year: string;
  title: string;
  journal: string;
  authors: string;
  link: string;
  isNew: boolean;
}

export const projects: Project[] = [
  {
    id: "bagel",
    title: "Project BAGEL",
    description: "Bio-inspired Architecture for General Engineered Lattices. Investigating how toroidal structures can be utilized in microscopic drug delivery systems.",
    type: "Nanotech",
    iconType: "invader1",
    date: "2023-10-27",
    author: "Dr. Freeman & Alyx V.",
    tags: ["Nanotechnology", "Drug Delivery", "Self-Assembly"],
    content: `
# Project BAGEL: Bio-inspired Architecture for General Engineered Lattices

## Overview

Project BAGEL represents a groundbreaking approach to designing microscopic drug delivery systems using toroidal (bagel-shaped) structures. Our research investigates how these unique geometries can be utilized to create more efficient and targeted therapeutic delivery mechanisms.

## The Science Behind It

Toroidal structures offer several advantages over traditional spherical or cylindrical nanoparticles:

- **Enhanced Surface Area**: The toroidal shape provides a larger surface-to-volume ratio, allowing for more efficient drug loading and release.
- **Stability**: The unique geometry provides structural stability in biological environments.
- **Targeting Capabilities**: The shape can be engineered to interact specifically with certain cell types.

## Recent Breakthroughs

In our latest publication in *Nature Nanotechnology*, we demonstrated that self-assembling bagel structures can be created using a novel soft matter approach. The structures form spontaneously under specific conditions, making them highly reproducible and scalable.

## Applications

- **Targeted Cancer Therapy**: The toroidal structures can be functionalized to target specific cancer cells.
- **Gene Delivery**: The unique shape allows for efficient encapsulation and delivery of genetic material.
- **Vaccine Development**: Potential applications in creating more effective vaccine delivery systems.

## Future Directions

We are currently exploring:
- Multi-layered toroidal structures for sequential drug release
- Integration with quantum dots for imaging and therapy
- Biocompatibility studies in various biological models

## Research Team

This project is led by Dr. Freeman with key contributions from postdoctoral researcher Alyx V. and PhD student Gordon B.

## Publications

- Freeman, D., Vance, A. (2023). "Self-assembling bagel structures in soft matter." *Nature Nanotechnology*.
    `
  },
  {
    id: "quantum-foam",
    title: "Quantum Foam",
    description: "Studying the interactions of soft matter at the quantum level. Focus on stability and decoherence in biological environments.",
    type: "Physics",
    iconType: "invader2",
    date: "2023-08-01",
    author: "Dr. Freeman & Gordon B.",
    tags: ["Quantum Physics", "Soft Matter", "Decoherence"],
    content: `
# Quantum Foam: Quantum Effects in Soft Matter Systems

## Introduction

The Quantum Foam project explores the fascinating intersection of quantum mechanics and soft matter physics. We investigate how quantum effects manifest in biological and soft material systems, with a particular focus on stability and decoherence mechanisms.

## Research Objectives

Our primary goals include:

1. **Understanding Decoherence**: How quantum states interact with biological environments
2. **Stability Analysis**: Investigating the conditions under which quantum effects can be maintained in soft matter
3. **Practical Applications**: Exploring potential applications in quantum computing and sensing

## Key Findings

Recent experiments have revealed that certain soft matter systems can maintain quantum coherence longer than previously thought possible. This opens up new possibilities for:

- Quantum sensors in biological environments
- Hybrid quantum-classical computing systems
- Novel materials with quantum-enhanced properties

## Experimental Approach

We use a combination of:
- Cryogenic electron microscopy
- Quantum state tomography
- Molecular dynamics simulations
- Theoretical modeling

## Challenges

Working at the quantum-soft matter interface presents unique challenges:
- Maintaining coherence in warm, wet environments
- Isolating quantum effects from thermal noise
- Developing appropriate measurement techniques

## Recent Progress

Our 2022 publication in *Physical Review Letters* demonstrated quantum effects in biological foam structures, marking a significant milestone in the field.

## Future Work

We are expanding our research to include:
- Quantum entanglement in soft matter systems
- Applications in drug delivery mechanisms
- Integration with Project BAGEL for quantum-enhanced delivery systems

## Funding

This project is supported by a major grant from the National Science Foundation and represents a key research direction for SoftNanoLab.
    `
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Freeman",
    role: "Principal Investigator",
    bio: "Expert in soft matter physics and retro gaming.",
    avatar: "👾"
  },
  {
    id: 2,
    name: "Alyx V.",
    role: "Postdoc",
    bio: "Specializes in toroidal structures.",
    avatar: "👩‍🔬"
  },
  {
    id: 3,
    name: "Gordon B.",
    role: "PhD Student",
    bio: "Researching quantum decoherence.",
    avatar: "👨‍💻"
  }
];

export const publications: Publication[] = [
  {
    id: 1,
    year: "2023",
    title: "Self-assembling bagel structures in soft matter",
    journal: "Nature Nanotechnology",
    authors: "Freeman, D., Vance, A.",
    link: "#",
    isNew: true
  },
  {
    id: 2,
    year: "2022",
    title: "Quantum effects in biological foam",
    journal: "Physical Review Letters",
    authors: "Freeman, D., Barney, G.",
    link: "#",
    isNew: false
  }
];
