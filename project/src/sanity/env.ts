export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sklkqc3M3zPat8ZK7CArXhyQHkDUZUiahp1VpwfD50K3Gbbpc9FAUBvv3PH5G2sh8EO1Uy8f8YTRhTFxEwL8Z3r75MAnMpQcUOVC2y1S0fxSbRuOlVUbopUDW739eiTOqMD5vbRNYAzYte36Hqt2ijXZUE90e36ewo6eJ7ZTuj5Z0nUAU82M",
  'Missing environment variable: SANITY_API_TOKEN,'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
