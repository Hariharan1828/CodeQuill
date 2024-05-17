import Image from "next/image";
import {db} from "@/db"
import { GlobeDemo } from "@/components/globeImpl";
import RoomCards from "@/components/RoomCards";
export default async function Home() {
  const rooms = await db.query.rooms.findMany();

  return (
    <main className="">
      <GlobeDemo/>
      <div className="grid grid-cols-3 gap-10 items-center max-w-7xl mx-auto p-16">

        {rooms.map((ro) => (
          <RoomCards key={ro.id} room={ro}/>
        ))}
      </div>
       
    </main>
  );
}
