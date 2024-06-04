import Link from "next/link"

const links = [
  { label: 'isrcalebe', href: '/' },
  { label: 'github', href: 'https://github.com/isrcalebe' },
  { label: 'x', href: 'https://x.com/isrcalebe' }
]

const projects = [
  {
    label: 'frutti!',
    description: 'simple multiplayer game written in C#',
    status: 'wip',
    href: 'https://github.com/isrcalebe/frutti'
  },
  {
    label: 'miniblocks',
    description: 'simple minecraft clone written in C#',
    status: 'wip',
    href: 'https://github.com/isrcalebe/miniblocks'
  }
]

export default function Home() {
  const getStatusExtended = (status: string) => {
    switch (status) {
      case 'wip':
        return 'Work in Progress'
      case 'stable':
        return 'Stable'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className='flex flex-col min-h-screen py-8'>
      <header className='container'>
        <div className='flex items-center gap-2 font-sans font-semibold'>
          {
            links.map((link, index) => (
              <>
                <Link key={index} href={link.href}>
                  <p className='text-indigo-600 dark:text-pink-600 hover:underline underline-offset-4'>{link.label}</p>
                </Link>
                {index !== links.length - 1 && <p>/</p>}
              </>
            ))
          }
        </div>
      </header>
      <main className='flex-1'>
        <div className='container flex flex-col space-2-y'>
          <article className='pt-6'>
            <div className='space-y-1'>
              <h2 className='font-mono text-lg tracking-wide'>projects</h2>
            </div>
            <ul className='space-y-4 py-4'>
              {
                projects.map((project, index) => (
                  <li key={index} className='grid items-start gap-1'>
                    <Link href={project.href} className='flex items-center gap-1.5 no-underline'>
                      <span className='text-indigo-600 dark:text-pink-600 font-mono font-semibold underline underline-offset-4'>{project.label}</span>
                      &mdash;
                      <span className='font-sans text-xs text-foreground'>{getStatusExtended(project.status)}</span>
                    </Link>
                    <span className='font-mono text-sm text-foreground'>
                      {project.description}
                    </span>
                  </li>
                ))
              }
            </ul>
          </article>
        </div>
      </main>
      <footer className='flex justify-end font-mono px-8 cursor-default select-none'>
        <h6 className='text-slate-300 dark:text-slate-800 text-2xl'>isrcalebe.cc</h6>
      </footer>
    </div>
  )
}
