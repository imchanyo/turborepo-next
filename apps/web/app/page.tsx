import Link from "next/link";
import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <p>
        <Link href="/hydration">Prefetching Using Hydration</Link>
      </p>
      <Button />
    </>
  );
}
