import React from 'react';

const brandLogs = [
  {
    logo: './brands/Cadcye.png',
    name: 'CADCYE',
  },
  {
    logo: './brands/honeywell.png',
    name: 'HONEYWELL',
  },
  {
    logo: './brands/legrand.png',
    name: 'LEGRAND',
  },
  {
    logo: './brands/Seqrite_logo.png',
    name: 'SEQRITE',
  },
  {
    logo: './brands/TPLINK.png',
    name: 'TP-LINK',
  },
  {
    logo: './brands/Ubiquiti.png',
    name: 'UBIQUITI',
  },
];

const Brands = () => {
  return (
    <section className="py-12 mb-12">
    <div className="container mx-auto text-center">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        Trusted Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {brandLogs.map((brand, index) => (
          <div key={index} className="m-4">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 mx-auto"
            />
            <p className="mt-2 text-gray-600">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Brands;
