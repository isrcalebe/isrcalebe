import {
  RepositoryGroup,
  RepositoryItem,
  RepositoryItemLink,
  RepositoryItemSkeleton,
} from '@/components/repository'
import { ListFeaturedRepositories } from '@/queries/ListFeaturedRepositories'

export const revalidate = 10

export default async function Home() {
  const repositories = await ListFeaturedRepositories()

  return (
    <main className="flex-1">
      <div className="container flex flex-col space-y-2">
        <article>
          <div className="space-y-1">
            <h2 className="font-monaspace-krypton text-lg tracking-wide font-stretch-125 select-none">
              featured projects
            </h2>
          </div>
          <RepositoryGroup>
            {repositories.success ? (
              repositories.data && repositories.data.length > 0 ? (
                repositories.data.map((repository, index) => {
                  return (
                    <RepositoryItem key={index}>
                      <RepositoryItemLink
                        name={repository.name}
                        href={repository.url}
                        language={repository.language}
                      />
                      {repository.description}
                    </RepositoryItem>
                  )
                })
              ) : (
                <RepositoryItem>
                  <p className="text-gray-500 select-none">
                    no featured projects
                  </p>
                </RepositoryItem>
              )
            ) : (
              <>
                <RepositoryItemSkeleton />
                <RepositoryItemSkeleton />
                <RepositoryItemSkeleton />
              </>
            )}
          </RepositoryGroup>
        </article>
      </div>
    </main>
  )
}
