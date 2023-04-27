import { Icon, IconType } from '@/components/Icon';
import { useLayoutContext } from '@/components/Layout';
import { UserCard } from '@/components/Layout/UserCard';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { UrlObject } from 'url';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { sidebarOpen, setSidebarOpen } = useLayoutContext()

  return (
    <div className="flex min-h-screen">
      <aside className={classNames(
        "bg-white rounded-tr-2xl rounded-br-2xl flex flex-col justify-between p-6 pt-8 transition-[width]",
        sidebarOpen ? "w-72" : "w-24",
      )}>
        <section className="space-y-6">
          <div className={classNames("flex items-center", sidebarOpen ? "justify-between" : "justify-center")}>
            <Link href="/" className={classNames("transition-[width]", sidebarOpen ? "w-full" : "w-0")}>
              <Image src="/logo/logo_black_full.png" alt="Virtual Pantry" width="175" height="18" />
            </Link>

            <button className="p-2 rounded-lg" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <div className={classNames("transition-transform transform duration-300 ease-in-out", sidebarOpen ? "rotate-0" : "rotate-180")}>
                <Icon type="arrowLeftOnRectangle" size="sm" />
              </div>
            </button>
          </div>

          <ul className="space-y-2">
            <NavLink iconType="documentText" href="#" active>Meal Plans</NavLink>
            <NavLink iconType="listBullet" href="#">Grocery Lists</NavLink>
            <NavLink iconType="book" href="#">Recipes</NavLink>
          </ul>
        </section>

        <section className="pt-6 border-t border-gray-11">
          <UserCard />
        </section>
      </aside>

      <main className="flex-1 bg-gray-12 p-6 transition-[width]">
        {children}
      </main>
    </div>
  )
}

interface NavLinkProps {
  children: React.ReactNode;
  iconType: IconType;
  href: UrlObject | string;
  active?: boolean;
}

function NavLink({ children, iconType, href, active = false }: NavLinkProps) {
  const { sidebarOpen } = useLayoutContext()

  return (
    <li>
      <Link
        href={href}
        className={classNames(
          "w-full flex items-center rounded-2xl overflow-hidden transition-all group",
          active ? "bg-blue-12" : "bg-transparent hover:bg-gray-11 focus:bg-gray-11",
          sidebarOpen ? 'p-2 pl-4 justify-start space-x-2' : 'p-3 justify-center'
        )}
      >
        <span
          className={classNames(
            "transition",
            active ? "text-blue-5 group-hover:text-blue-3 group-focus:text-blue-3" : "text-gray-10 group-hover:text-gray-3 group-focus:text-gray-3"
          )}
        >
          <Icon type={iconType} size="sm" />
        </span>
        <span
          className={classNames(
            "body-small-bold whitespace-nowrap transition-all",
            active ? "text-blue-5 group-hover:text-blue-3 group-focus:text-blue-3" : "text-gray-3",
            sidebarOpen ? 'opacity-100 w-full' : 'opacity-0 w-0'
          )}
        >
          {children}
        </span>
      </Link>
    </li>
  )
}