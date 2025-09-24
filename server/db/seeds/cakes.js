export async function seed(knex) {
  await knex('cakes').del()

  await knex('cakes').insert([
    {
      id: 1,
      name: 'Mango-Lime Delight',
      slug: 'mango-delight',
      image: '/cakes/mango1.jpg',
      category: 'Core Flavours',
      price: 68,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 68 },
        { label: 'Large', serves: 12, price: 82 }
      ]),
      components: JSON.stringify(['Mango mousse', 'Vanilla sponge', 'Lime compote']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.8, reviewsCount: 22 })
    },
    {
      id: 2,
      name: 'Peach & Sage Dream',
      slug: 'peach-sage-dream',
      image: '/cakes/peach.jpg',
      category: 'Core Flavours',
      price: 69,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 69 },
        { label: 'Large', serves: 12, price: 83 }
      ]),
      components: JSON.stringify(['Peach mousse', 'Sage cream', 'Vanilla sponge']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.7, reviewsCount: 18 })
    },
    {
      id: 3,
      name: 'Coffee Caramel Drip',
      slug: 'coffee-caramel-drip',
      image: '/cakes/coffee.jpg',
      category: 'Core Flavours',
      price: 72,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 72 },
        { label: 'Large', serves: 12, price: 86 }
      ]),
      components: JSON.stringify(['Coffee sponge', 'Salted caramel', 'Vanilla cream']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.9, reviewsCount: 35 })
    },
    {
      id: 4,
      name: 'Lavender-Blueberry Whisper',
      slug: 'lavender-whisper',
      image: '/cakes/lav.jpg',
      category: 'Core Flavours',
      price: 65,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 65 },
        { label: 'Large', serves: 12, price: 79 }
      ]),
      components: JSON.stringify(['Lavender mousse', 'Blueberry mousse', 'Lemon curd', 'Vanilla sponge']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.6, reviewsCount: 12 })
    },
    {
      id: 5,
      name: 'Honey Blossom',
      slug: 'honey-blossom',
      image: '/cakes/honey.jpg',
      category: 'Core Flavours',
      price: 65,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 65 },
        { label: 'Large', serves: 12, price: 79 }
      ]),
      components: JSON.stringify(['Honey sponge', 'Sour cream frosting', 'Honey drizzle']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.7, reviewsCount: 27 })
    },
    {
      id: 6,
      name: 'Vanilla Citrus Symphony',
      slug: 'vanilla-citrus-symphony',
      image: '/cakes/lemon.jpg',
      category: 'Core Flavours',
      price: 59,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 59 },
        { label: 'Large', serves: 12, price: 73 }
      ]),
      components: JSON.stringify(['Vanilla sponge', 'Citrus cream', 'Candied peel']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.5, reviewsCount: 14 })
    },
    {
      id: 7,
      name: 'Tiramisu Temptation',
      slug: 'tiramisu-temptation',
      image: '/cakes/tiramisu.jpg',
      category: 'Core Flavours',
      price: 75,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 75 },
        { label: 'Large', serves: 12, price: 89 }
      ]),
      components: JSON.stringify(['Coffee-soaked sponge', 'Mascarpone cream', 'Cocoa']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.9, reviewsCount: 41 })
    },
    {
      id: 8,
      name: 'Red Velvet',
      slug: 'red-velvet',
      image: '/cakes/red-velvet.jpg',
      category: 'Core Flavours',
      price: 70,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 70 },
        { label: 'Large', serves: 12, price: 84 }
      ]),
      components: JSON.stringify(['Cocoa-infused sponge', 'Cream cheese frosting', 'Velvet crumb coating']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten', 'Gelatine']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 4 days',
      rating: JSON.stringify({ average: 4.9, reviewsCount: 35 })
    },
    {
      id: 9,
      name: 'Chocolate Flower',
      slug: 'chocolate-flower',
      image: '/cakes/choco.jpg',
      category: 'Core Flavours',
      price: 65,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 65 },
        { label: 'Large', serves: 12, price: 79 }
      ]),
      components: JSON.stringify(['Chocolate sponge', 'Chocolate ganache', 'Cocoa nibs']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.8, reviewsCount: 29 })
    },
    {
      id: 10,
      name: 'Velvet Oreo Bliss',
      slug: 'velvet-oreo-bliss',
      image: '/cakes/oreo.jpg',
      category: 'Core Flavours',
      price: 70,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 70 },
        { label: 'Large', serves: 12, price: 84 }
      ]),
      components: JSON.stringify(['Chocolate sponge', 'Oreo cream', 'Cookie crumble']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.7, reviewsCount: 19 })
    },
    {
      id: 11,
      name: 'Green Harmony',
      slug: 'green-harmony',
      image: '/cakes/matcha.jpg',
      category: 'Core Flavours',
      price: 70,
      sizes: JSON.stringify([
        { label: 'Medium', serves: 8, price: 70 },
        { label: 'Large', serves: 12, price: 84 }
      ]),
      components: JSON.stringify(['Matcha sponge', 'White chocolate cream', 'Matcha dust']),
      allergens: JSON.stringify(['Egg', 'Dairy', 'Gluten']),
      storage: 'Refrigeration required',
      expiry: 'Best consumed within 3–4 days',
      rating: JSON.stringify({ average: 4.6, reviewsCount: 16 })
    }
  ])
}
