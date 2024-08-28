"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { LuComputer } from "react-icons/lu";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const setProviderrs = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setProviderrs();
  }, []);

  return (
    <nav className="flex-between w-full mb-12 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <LuComputer className="text-2xl text-primary-purplish" />
        <p className="logo_text">PrompIt</p>
      </Link>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/create-prompt"
              className="bg-primary-purplish border border-primary-purplish px-3 py-2 rounded-full text-white hover:bg-white hover:text-primary-purplish"
            >
              Create Post
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="bg-white border border-primary-purplish px-3 py-2 rounded-full text-primary-purplish hover:bg-primary-purplish hover:text-white"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="bg-white border border-primary-purplish px-3 py-2 rounded-full text-primary-purplish hover:bg-primary-purplish hover:text-white"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggle((prev) => !prev)}
            />
            {toggle && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggle(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggle(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggle(false);
                    signOut();
                  }}
                  className="mt-5 w-full bg-primary-purplish border border-primary-purplish px-3 py-2 rounded-full text-white hover:bg-white hover:text-primary-purplish"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="bg-white border border-primary-purplish px-3 py-2 rounded-full text-primary-purplish hover:bg-primary-purplish hover:text-white"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
