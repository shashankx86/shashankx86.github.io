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
  const lines = content.split('\n').filter(line => line.trim());
  let currentProject: ProjectItem | null = null;

  for (let line of lines) {
    line = line.trimStart();
    
    if (line.startsWith('- ')) {
      // New main project
      if (currentProject) {
        projects.push(currentProject);
      }
      currentProject = {
        title: line.substring(2).trim(),
        description: '',
        subItems: []
      };
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

  if (currentProject) {
    projects.push(currentProject);
  }

  return projects;
}