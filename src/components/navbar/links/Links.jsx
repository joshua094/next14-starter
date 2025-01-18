"use client";

import { LinksArray } from "@/constants/LinksArray"
import styles from './links.module.css'
import NavLink from "./navLink/navLink"
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";


const Links = ({session}) => {

  const [open, setOpen] = useState(false)

  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {LinksArray.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu bar"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {LinksArray.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links