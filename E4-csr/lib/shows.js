import fetch from 'isomorphic-unfetch'

export async function getShows(id) {
  if (id) {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    return show
  } else {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    return data.map(entry => entry.show)
  }
}