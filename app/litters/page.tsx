import LitterCard from "@/components/puppies-sections/LitterCard";
import PageIntro from "@/components/shared/PageIntro";
import { Button } from "@/components/ui/button";
import { litters } from "@/constants/litters";


export default function LittersPage() {
  return (
    <>
     <PageIntro title="Litters"/>
     <div className=" py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Corgi Litters</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully planned litters from champion bloodlines. Each puppy is raised with love, extensive
            socialization, and dedication to preserving the wonderful Pembroke Welsh Corgi breed standard.
          </p>
        </div>

        <div className="space-y-12">
          {litters.map((litter) => (
            <LitterCard key={litter.id} litter={litter} />
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Future Litters?</h2>
          <p className="text-gray-600 mb-6">
            Join our mailing list to be notified about upcoming litters and available puppies from our champion
            bloodlines.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">Join Our Waiting List</Button>
        </div>
      </div>
    </div>
    </>
  );
  
}