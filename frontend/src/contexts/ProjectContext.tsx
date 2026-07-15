import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export interface SelectedProject {
  id: string;
  name: string;
}

interface ProjectContextType {
  selectedProject: SelectedProject | null;
  setSelectedProject: (project: SelectedProject | null) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined
);

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider = ({
  children,
}: ProjectProviderProps) => {
  const [selectedProject, setSelectedProject] =
    useState<SelectedProject | null>(null);

  return (
    <ProjectContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "useProject must be used inside ProjectProvider"
    );
  }

  return context;
};