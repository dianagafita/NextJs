import classes from "./MainNavigation.module.css";
import Link from "next/link";
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
      <Link href='/'>Skin care routine</Link></div>
      <ul>
        <li><Link href='/routinelist'>All Routines</Link></li>
        <li><Link href='/routine'>Add New Routine</Link></li>
      </ul>{" "}
    </header>
  );
}
