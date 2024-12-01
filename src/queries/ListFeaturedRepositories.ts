import { octokit } from '@/providers/octokit'

type FeaturedRepository = {
  name: string
  description?: string
  url: string
  language?: string
}

export async function ListFeaturedRepositories() {
  try {
    const response = await octokit.request('GET /user/repos')

    const repositories = response.data.filter((repository) => {
      if (repository.topics) {
        return repository.topics.includes('gh-portfolio')
      }

      return false
    })

    const featuredRepositories: FeaturedRepository[] = repositories
      .map((repository) => {
        return {
          name: repository.name,
          description: repository.description ?? undefined,
          url: repository.html_url,
          language: repository.language ?? undefined,
        }
      })
      .sort((a, b) => {
        const langA = a.language ?? ''
        const langB = b.language ?? ''

        return langA.localeCompare(langB)
      })

    return featuredRepositories
  } catch {
    return null
  }
}
