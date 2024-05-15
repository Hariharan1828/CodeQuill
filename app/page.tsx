import Image from "next/image";
import {db} from "@/db"
export default async function Home() {
  const rooms = await db.query.rooms.findMany();

  return (
    <main className="">
hello

        {rooms.map((ro) => (
            <div key={ro.id}>{ro.name}</div>
        ))}
      
    </main>
  );
}
