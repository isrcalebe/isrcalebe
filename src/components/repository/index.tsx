import Link from 'next/link'
import React from 'react'
import { Skeleton } from '../skeleton'

type RepositoryGroupProps = {
  children?: React.ReactNode
  className?: string
}

export function RepositoryGroup({ children, className }: RepositoryGroupProps) {
  return (
    <div className={`space-y-4 py-4 ${className}`}>
      <ul className="space-y-4 py-4">{children}</ul>
    </div>
  )
}

type RepositoryItemProps = {
  children?: React.ReactNode
  index?: number
  className?: string
}

export function RepositoryItem({
  children,
  index,
  className,
}: RepositoryItemProps) {
  return (
    <li key={index} className={`grid items-start gap-1 ${className}`}>
      {children}
    </li>
  )
}

type RepositoryItemLinkProps = {
  name?: string
  href?: string
  language?: string
  children?: React.ReactNode
}

export function RepositoryItemLink({
  name,
  href,
  language,
  children,
}: RepositoryItemLinkProps) {
  return (
    <>
      <div className="flex items-center gap-1.5 no-underline">
        <Link target="_blank" href={href ?? '/'}>
          <span className="text-indigo-600 dark:text-pink-600 font-monaspace-krypton hover:font-stretch-125 hover:tracking-wide duration-100 font-semibold underline underline-offset-4">
            {name}
          </span>
        </Link>
        {language && (
          <>
            <span className="font-sans font-light select-none">&mdash;</span>
            <span className="font-monaspace-radon text-xs text-foreground select-none">
              {language}
            </span>
          </>
        )}
      </div>
      <span className="font-monaspace-krypton text-sm text-foreground">
        {children}
      </span>
    </>
  )
}

export function RepositoryItemSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-1.5 no-underline">
        <Skeleton className="w-20 h-4" />
        <span className="font-sans font-light select-none">&mdash;</span>
        <span className="font-monaspace-radon text-xs text-foreground">
          <Skeleton className="w-10 h-4" />
        </span>
      </div>
      <Skeleton className="w-full h-4" />
    </div>
  )
}
