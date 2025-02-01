import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // Adjust to your API version
  token: "sklkqc3M3zPat8ZK7CArXhyQHkDUZUiahp1VpwfD50K3Gbbpc9FAUBvv3PH5G2sh8EO1Uy8f8YTRhTFxEwL8Z3r75MAnMpQcUOVC2y1S0fxSbRuOlVUbopUDW739eiTOqMD5vbRNYAzYte36Hqt2ijXZUE90e36ewo6eJ7ZTuj5Z0nUAU82M", // Add a token if required
  useCdn: true, // Set to false if you need fresh data
});
