const Footer = () => {
  return (
    <div className="footer bg-white text-blue-800 py-8 w-full">
      <div className="container mx-auto px-6 max-w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-center">
          <ul className="space-y-2">
            <li className="text-lg font-semibold">Countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-lg font-semibold">Homes</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>Villas</li>
            <li>Hostels</li>
            <li>Guest houses</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-lg font-semibold">Unique places to stay</li>
            <li>Reviews</li>
            <li>Unpacked: Travel articles</li>
            <li>Travel communities</li>
            <li>Seasonal and holiday deals</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-lg font-semibold">Car rental</li>
            <li>Flight Finder</li>
            <li>Restaurant reservations</li>
            <li>Travel Agents</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-lg font-semibold">Customer Service</li>
            <li>Partner Help</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Press center</li>
            <li>Safety Resource Center</li>
            <li>Investor relations</li>
            <li>Terms & conditions</li>
          </ul>
        </div>

        <div className="text-center mt-8 text-sm text-blue-800">
          Copyright © 2024 TravelBK.
        </div>
      </div>
    </div>
  );
};

export default Footer;
