import { GetUserInfo } from '@/queries/GetUserInfo'
import { Header, HeaderItemLink } from '.'
import { Skeleton } from '@/components/skeleton'

export async function AsyncHeader() {
  const response = await GetUserInfo()

  if (!response)
    return (
      <Header skeleton className="py-8">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
      </Header>
    )

  if (!response.data)
    return (
      <Header className="py-8">
        <HeaderItemLink href="/">isrcalebe</HeaderItemLink>
      </Header>
    )

  const { name, url, socialAccounts } = response.data

  return (
    <Header className="py-8">
      <HeaderItemLink href="/">{name}</HeaderItemLink>
      <HeaderItemLink href={url}>github</HeaderItemLink>
      {socialAccounts.map(({ displayName, url }, index) => (
        <HeaderItemLink key={index} href={url}>
          {displayName}
        </HeaderItemLink>
      ))}
    </Header>
  )
}
