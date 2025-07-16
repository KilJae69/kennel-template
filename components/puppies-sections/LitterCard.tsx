import { Award, Calendar, Heart, Mail, Phone, Star, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { Litter } from "@/constants/litters"
import Link from "next/link"



export default function LitterCard({ litter }: { litter: Litter }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "sold-out":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "reserved":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Expected Soon"
      case "available":
        return "Puppies Available"
      case "sold-out":
        return "Sold Out"
      case "reserved":
        return "All Reserved"
      default:
        return status
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2">
      <CardHeader className="pb-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="flex justify-between items-start">
          <div>
            <Link href={`/litters/${litter.slug}`}>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
                {litter.title}
              </CardTitle>
            </Link>
            <p className="text-xl text-orange-700 font-semibold">{litter.breed}</p>
          </div>
          <Badge className={`${getStatusColor(litter.status)} font-semibold px-4 py-2 text-sm`}>
            {getStatusText(litter.status)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 p-6">
        {/* Parent Information */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sire */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-blue-600" />
              Sire (Father)
            </h3>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={litter.sire.image || "/placeholder.svg"}
                    alt={litter.sire.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-xl text-gray-900 mb-1">{litter.sire.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{litter.sire.age} years old</p>
                  <div className="space-y-1">
                    {litter.sire.titles.map((title, index) => (
                      <Badge key={index} variant="outline" className="mr-1 text-xs bg-blue-100">
                        {title.event}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-medium text-gray-700 mb-1">Recent Awards:</p>
                    {litter.sire.titles.map((title, index) => (
                      <p key={index} className="text-xs text-gray-600 flex items-center gap-1">
                        <Award className="w-3 h-3 text-yellow-500" />
                        {title.award}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dam */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-600" />
              Dam (Mother)
            </h3>
            <div className="bg-pink-50 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={litter.dam.image || "/placeholder.svg"}
                    alt={litter.dam.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-xl text-gray-900 mb-1">{litter.dam.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{litter.dam.age} years old</p>
                  <div className="space-y-1">
                    {litter.dam.titles.map((title, index) => (
                      <Badge key={index} variant="outline" className="mr-1 text-xs bg-pink-100">
                        {title.event}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-medium text-gray-700 mb-1">Recent Awards:</p>
                    {litter.dam.titles.map((title, index) => (
                      <p key={index} className="text-xs text-gray-600 flex items-center gap-1">
                        <Award className="w-3 h-3 text-yellow-500" />
                        {title.award}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Litter Details */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg">Litter Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span className="font-medium">{litter.birthDate ? "Born:" : "Expected:"}</span>
                <span className="font-semibold">{litter.birthDate || litter.expectedDate}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4 text-orange-600" />
                <span className="font-medium">Puppies:</span>
                <span className="font-semibold">
                  {litter.status === "upcoming" ? `${litter.puppyCount} expected` : `${litter.puppyCount} total`}
                </span>
              </div>

              {litter.availablePuppies !== undefined && (
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-medium">Available:</span>
                  <span className="text-green-600 font-bold text-lg">{litter.availablePuppies} puppies</span>
                </div>
              )}

              {litter.price && (
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-medium">Price:</span>
                  <span className="text-xl font-bold text-green-600">{litter.price}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg">Health & Registration</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-900 mb-2">Health Testing:</p>
                <div className="flex flex-wrap gap-1">
                  {litter.healthTesting.map((test, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-green-50 border-green-200">
                      {test}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium text-gray-900 mb-2">Registration:</p>
                <div className="flex flex-wrap gap-1">
                  {litter.registrations.map((reg, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-blue-100">
                      {reg}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg">Expected Traits</h4>
            <div className="space-y-2">
              {litter.expectedTraits.map((trait, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <Star className="w-3 h-3 text-yellow-500" />
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        {/* Description */}
        <div className="bg-orange-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 text-lg mb-2">About This Litter</h4>
          <p className="text-gray-700 leading-relaxed">{litter.description}</p>
        </div>
      </CardContent>

      <CardFooter className="bg-gray-50 flex flex-col sm:flex-row gap-3 justify-between items-center p-6">
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white hover:bg-gray-50">
            <Mail className="w-4 h-4" />
            Email Inquiry
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white hover:bg-gray-50">
            <Phone className="w-4 h-4" />
            Call Us
          </Button>
        </div>

        {litter.status === "available" && (
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6">Apply for Puppy</Button>
        )}

        {litter.status === "upcoming" && (
          <Button variant="secondary" className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6">
            Join Waiting List
          </Button>
        )}

        {(litter.status === "sold-out" || litter.status === "reserved") && (
          <Button variant="outline" disabled className="px-6 bg-transparent">
            No Longer Available
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}