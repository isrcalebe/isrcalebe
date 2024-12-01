export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-slate-300 dark:bg-slate-800 ${className}`}
      {...props}
    />
  )
}
