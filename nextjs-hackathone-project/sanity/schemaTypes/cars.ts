export default {
    name: "car",
    type: "document",
    title: "Car",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Car Name",
        },
        {
            name: "brand",
            type: "string",
            title: "Brand",
            description: "Brand of the car (e.g., Nissan, Tesla, etc.)",
        },
        {
            name: "type",
            type: "string",
            title: "Car Type",
            description: "Type of the car (e.g., Sport, Sedan, SUV, etc.)",
        },
        {
            name: "fuelCapacity",
            type: "string",
            title: "Fuel Capacity",
            description: "Fuel capacity or battery capacity (e.g., 90L, 100kWh)",
        },
        {
            name: "transmission",
            type: "string",
            title: "Transmission",
            description: "Type of transmission (e.g., Manual, Automatic)",
        },
        {
            name: "seatingCapacity",
            type: "string",
            title: "Seating Capacity",
            description: "Number of seats (e.g., 2 People, 4 seats)",
            validation: (Rule: any) => Rule.min(1).max(10),
        },
        {
            name: "pricePerDay",
            type: "string",
            title: "Price Per Day",
            description: "Rental price per day",
            validation: (Rule: any) => Rule.min(1),
        },
        {
            name: "originalPrice",
            type: "string",
            title: "Original Price",
            description: "Original price before discount (if applicable)",
            validation: (Rule: any) => Rule.min(1),
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
            description: "Tags for categorization (e.g., popular, recommended)",
        },
        {
            name: "image",
            type: "image",
            title: "Car Image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alt Text",
                    description: "Alternative text for accessibility",
                },
            ],
        },
    ],
};
