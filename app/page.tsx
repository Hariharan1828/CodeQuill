import Image from "next/image";
import {db} from "@/db"
export default async function Home() {
  const items = await db.query.testing.findMany();

  return (
    <main className="">
hello

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            <h1>{item.name}</h1>
          </li>
        ))}
      </ul>
      
    </main>
  );
}
