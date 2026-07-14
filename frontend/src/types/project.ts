export interface Project {
  id: string;
  name: string;
  projectKey: string;
  description?: string;
  organizationId: string;

  organization?: {
    id: string;
    name: string;
  };
}

export interface CreateProjectRequest {
  name: string;
  projectKey: string;
  description?: string;
  organizationId: string;
}

export interface UpdateProjectRequest {
  name: string;
  projectKey: string;
  description?: string;
  organizationId: string;
}