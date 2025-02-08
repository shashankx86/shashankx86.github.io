interface ProjectItem {
  title: string;
  description: string;
  subItems: Array<{
    text: string;
    link?: string;
  }>;
}

export function parseProjectsFormat(content: string): ProjectItem[] {
  const projects: ProjectItem[] = [];
  const lines = content.split('\n');
  let currentProject: ProjectItem | null = null;
  let isBlankLine = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimStart();
    
    if (!line.trim()) {
      isBlankLine = true;
      continue;
    }

    if (line.startsWith('- ')) {
      // Add extra spacing only if there was a blank line and not the first project
      if (currentProject && isBlankLine) {
        projects.push(currentProject);
      } else if (currentProject) {
        projects.push(currentProject);
      }
      
      currentProject = {
        title: line.substring(2).trim(),
        description: '',
        subItems: []
      };
      isBlankLine = false;
    } else if (line.startsWith('-')) {
      // Sub item
      if (currentProject) {
        const subItem = line.substring(1).trim();
        const linkMatch = subItem.match(/\[(.*?)\]\((.*?)\)/);
        
        if (linkMatch) {
          currentProject.subItems.push({
            text: linkMatch[1],
            link: linkMatch[2]
          });
        } else {
          currentProject.subItems.push({
            text: subItem
          });
        }
      }
    } else if (currentProject && !currentProject.description) {
      // Description line
      currentProject.description = line.trim();
    }
  }

  // Add the last project if exists
  if (currentProject) {
    projects.push(currentProject);
  }

  return projects;
}