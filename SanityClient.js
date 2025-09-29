import { createClient } from '@sanity/client';

export default createClient({
  projectId: "y8uc6699",
  dataset: "production",
  apiVersion: "2025-09-29",
  useCdn: true,
});
