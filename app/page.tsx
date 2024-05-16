import Image from "next/image";
import {db} from "@/db"
import { GlobeDemo } from "@/components/globeImpl";
export default async function Home() {
  const rooms = await db.query.rooms.findMany();

  return (
    <main className="">
      <GlobeDemo/>

        {rooms.map((ro) => (
            <div key={ro.id}>{ro.name}</div>
        ))}
      
    </main>
  );
}
