import Link from 'next/link'
import React from 'react'

type HeaderProps = {
  children: React.ReactNode
  className?: string
  skeleton?: boolean
}

export function Header({ children, className, skeleton }: HeaderProps) {
  return (
    <header className={`container ${className}`}>
      <nav className="flex items-center gap-2 font-monaspace-radon font-semibold">
        {React.Children.map(children, (child, index) => (
          <>
            {skeleton ? (
              child
            ) : (
              <p className="text-indigo-600 dark:text-pink-600 hover:font-stretch-125 duration-100">
                {child}
              </p>
            )}
            {index !== React.Children.count(children) - 1 && (
              <p className="select-none">/</p>
            )}
          </>
        ))}
      </nav>
    </header>
  )
}

type HeaderItemLinkProps = {
  children: React.ReactNode
  href?: string
}

export function HeaderItemLink({ children, href }: HeaderItemLinkProps) {
  return (
    <Link target="_blank" href={href ?? '/'}>
      {children}
    </Link>
  )
}
