export interface CreateProjectRequest {
  name: string;
  projectKey: string;
  description?: string;
  organizationId: string;
}