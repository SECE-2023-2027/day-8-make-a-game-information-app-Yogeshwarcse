async function fetchGames(term) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/search?q=${term}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch games')
  return res.json()
}

export default async function SearchPage({ params }) {
  const term = params.client
  const games = await fetchGames(term)

  return (
    <main className="max-w-5xl mx-auto py-10 px-4 text-white">
      <h1 className="text-2xl font-bold mb-6 bg-amber-200">{term}</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map(game => (
          <li key={game.id} className="bg-gray-800 p-4 rounded-lg">
            {game.cover?.image_id &&
              <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`} alt={game.name} width={264} height={352} className="rounded"/>}
            <h2 className="mt-2 font-semibold text-lg">{game.name}</h2>
            {game.summary && <p className="text-sm mt-1">{game.summary}</p>}
          </li>
        ))}
      </ul>
    </main>
  )
}
