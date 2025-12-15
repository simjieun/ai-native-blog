import Image from 'next/image'

interface AuthorProfileProps {
  name: string
  bio: string
  avatar: string
}

export function AuthorProfile({ name, bio, avatar }: AuthorProfileProps) {
  return (
    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={avatar}
            alt={`${name} avatar`}
            width={64}
            height={64}
            className="rounded-full"
            priority={false}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
            {name}
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {bio}
          </p>
        </div>
      </div>
    </div>
  )
}
