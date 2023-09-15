// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
import { FC } from "react";

// import { ThemeToggle } from "./ThemeToggle";
import { buttonVariants } from "./ui/Button";
// import SignInButton from "./ui/SignInButton";
// import SignOutButton from "./ui/SignOutButton";

const Header: FC = () => {
  //   const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-14 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between mb-10">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <a href="/" className={buttonVariants({ variant: "link" })}>
          MyID
        </a>

        <div className="md:hidden">{/* <ThemeToggle /> */}</div>

        <div className="hidden md:flex gap-4">
          {/* <ThemeToggle /> */}
          <a
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Home
          </a>
          <a
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Create ID
          </a>
          <a
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            My IDs
          </a>
          {/* {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
