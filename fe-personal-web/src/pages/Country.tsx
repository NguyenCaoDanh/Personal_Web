import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Country {
  name: string;
  population: number;
}

export default function Country() {
  const [countries] = useState<Country[]>([
    { name: 'Vietnam', population: 98000000 },
    { name: 'USA', population: 331000000 },
    { name: 'Japan', population: 126000000 },
    { name: 'Germany', population: 83000000 },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard - Country Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country, index) => (
          <Card key={index} className="hover:shadow-lg transition rounded-2xl p-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{country.name}</h2>
              <p className="text-gray-600">Population: {country.population.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
