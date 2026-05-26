import { Path } from './types';

export const paths: Path[] = [
  {
    id: 'part_61',
    name: 'Part 61 Flight Training',
    description: 'Flexible, instructor-driven training that allows pilots to progress at their own pace while balancing work, family, and other responsibilities.',
    why_it_fits: 'This path works best for pilots who need schedule flexibility, prefer pay-as-you-go training, and want to train locally without relocating.',
    estimated_timeline: 'Private through Commercial: ~18–30 months (part-time)',
    next_steps: [
      'Research local flight schools and independent CFIs in your area',
      'Schedule discovery flights at 2-3 schools to find the right fit',
      'Get your FAA medical certificate (Class 3 for private, Class 1 for airline career)',
      'Begin ground school study with online courses or books',
      'Plan your training budget and schedule availability'
    ]
  },
  {
    id: 'part_141',
    name: 'Part 141 Accelerated Flight Training',
    description: 'Highly structured, FAA-approved syllabus designed for fast progression through pilot certificates.',
    why_it_fits: 'This path works best for pilots who can train full-time, want a faster timeline, and are comfortable with a structured, accelerated environment.',
    estimated_timeline: 'Private through Commercial: ~9–18 months (full-time)',
    next_steps: [
      'Research Part 141 flight schools with strong placement rates',
      'Review program costs and financing options (loans, VA benefits)',
      'Plan for relocation if needed for the best program fit',
      'Get your FAA medical certificate (Class 1 for airline career)',
      'Apply to programs and secure your start date'
    ]
  },
  {
    id: 'hybrid',
    name: 'Hybrid Training Path (Part 61 + Structured Progression)',
    description: 'A blended approach that starts with flexible training and transitions into more structured programs later.',
    why_it_fits: 'This path works well for pilots who want flexibility early, but plan to accelerate training once time or finances allow.',
    estimated_timeline: 'Private through Commercial: ~15–24 months',
    next_steps: [
      'Start with Part 61 training at a local school to build fundamentals',
      'Use this time to save money and confirm your commitment',
      'Research Part 141 programs for your instrument and commercial ratings',
      'Get your FAA medical certificate to ensure no surprises',
      'Create a timeline for transitioning to full-time training'
    ]
  }
];
