import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "7c9kq9u6", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-01-01", // Adjust to your API version
  useCdn: true, // Set to false if you need fresh data
});
