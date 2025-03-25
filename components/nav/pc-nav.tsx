'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { mainMenu } from '@/menu.config';

const PCNav = ({ className, children, id }: NavProps) => {
  const pathname = usePathname();

  return (
    <div className='mx-2 hidden md:flex'>
      {Object.entries(mainMenu).map(([key, href]) => {
        const isActive = pathname === href;
        return (
          <Button
            key={href}
            asChild
            variant="ghost"
            size='sm'
            className={cn(
              'hover:underline-offset-4 hover:underline',
              isActive && 'underline underline-offset-4'
            )}
          >
            <Link href={href}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default PCNav;
