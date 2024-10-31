
const bookingSampleData = [
    {
        id: 1,
        hotelName: "Paradise Resort",
        totalPrice: 1500000,
        checkInDate: "2023-11-10",
        checkOutDate: "2023-11-12",
        adults: 2,
        children: 1,
        rooms: [
            { roomNumber: "101" },
            { roomNumber: "102" }
        ],
        bookingStatus: "ACCEPTED",
        isRated: false,
        hotelId: 101
    },
    {
        id: 2,
        hotelName: "Ocean View Hotel",
        totalPrice: 2200000,
        checkInDate: "2023-12-01",
        checkOutDate: "2023-12-03",
        adults: 2,
        children: 2,
        rooms: [
            { roomNumber: "201" }
        ],
        bookingStatus: "PENDING",
        isRated: true,
        hotelId: 102
    },
    {
        id: 3,
        hotelName: "Mountain Escape Lodge",
        totalPrice: 1800000,
        checkInDate: "2023-12-15",
        checkOutDate: "2023-12-18",
        adults: 1,
        children: 0,
        rooms: [
            { roomNumber: "301" },
            { roomNumber: "302" },
            { roomNumber: "303" }
        ],
        bookingStatus: "CANCELLED",
        isRated: false,
        hotelId: 103
    },
    {
        id: 4,
        hotelName: "City Center Inn",
        totalPrice: 1200000,
        checkInDate: "2023-12-20",
        checkOutDate: "2023-12-22",
        adults: 1,
        children: 1,
        rooms: [
            { roomNumber: "401" }
        ],
        bookingStatus: "ACCEPTED",
        isRated: true,
        hotelId: 104
    }
];

export default bookingSampleData;
