// components/litters/PuppyCards.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Puppy } from '@/constants/litters';

export function PuppyCards({ puppies }: { puppies: Puppy[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {puppies.map((puppy) => (
        <Card key={puppy.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative aspect-square">
            <Image
              src={puppy.image}
              alt={puppy.name}
              fill
              className="object-cover"
            />
            <Badge 
              variant="secondary" 
              className={`absolute top-2 right-2 ${
                puppy.status === 'available' 
                  ? 'bg-green-100 text-green-800' 
                  : puppy.status === 'reserved' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-800'
              }`}
            >
              {puppy.status.charAt(0).toUpperCase() + puppy.status.slice(1)}
            </Badge>
          </div>
          <CardContent className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle>{puppy.name}</CardTitle>
              <p className="text-sm text-gray-600">
                {puppy.gender} • {puppy.color} • {puppy.weight}
              </p>
            </CardHeader>
            <p className="text-paragraph mb-4">{puppy.personality}</p>
            {puppy.status === 'available' && (
              <Button className="w-full">Inquire About {puppy.name}</Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}