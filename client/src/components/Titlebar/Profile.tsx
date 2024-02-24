import { lang } from "@/lang";
import { SteamProfile } from "next-auth-steam";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function NavbarProfile({ steam }: { steam: SteamProfile }) {
  return (
    <div className="flex gap-2 text-sm font-medium items-center">
      <div className="flex flex-col items-end text-xs">
        <Link
          href={`/players/${steam.steamid}`}
          className="font-normal truncate w-16 text-end"
        >
          {steam.personaname}
        </Link>
        <button
          className="font-bold hover:underline underline-offset-2"
          onClick={() => signOut()}
        >
          {lang.user.sign_out}
        </button>
      </div>
      <Link href={`/players/${steam.steamid}`}>
        <Image
          src={steam.avatarfull}
          width={36}
          height={36}
          priority
          className="w-9 h-9 border-2 rounded-full border-primary"
          alt="ett profilbilde"
        />
      </Link>
    </div>
  );
}
