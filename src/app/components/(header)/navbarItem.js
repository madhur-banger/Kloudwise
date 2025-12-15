import React from "react";
import Link from 'next/link'

import "./header.css";

export default function NavbarItem({ name, active, href, onClick }) {
  return (
    <>
      <li className="nav-item" onClick={onClick}>
      <Link href={href || '#'} className={`nav-link ${active ? 'active' : ''}`}>
        {name}
      </Link>
    </li>
    </>
  );
}
