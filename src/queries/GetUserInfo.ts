import { octokit } from '@/providers/octokit'

type UserInfo = {
  name: string
  url: string
  socialAccounts: SocialAccount[]
}

type SocialAccount = {
  displayName: string
  url: string
}

export async function GetUserInfo(): Promise<UserInfo> {
  try {
    const userResponse = await octokit.request('GET /user')
    const socialResponse = await octokit.request('GET /user/social_accounts')

    const { login, html_url } = userResponse.data

    const socialAccounts: SocialAccount[] = socialResponse.data.map(
      (account) => {
        return {
          displayName: account.provider,
          url: account.url,
        }
      }
    )

    return {
      name: login,
      url: html_url,
      socialAccounts,
    }
  } catch {
    return null
  }
}
