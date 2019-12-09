import useFetch from '../utils/useFetch'

const Index = () => {
  const { data, error } = useFetch('/api/randomQuote')

  if ( !data || !data.quote || error ) {
    return <div>Loading...</div>
  }

  return (
    <main className="center">
      <div className="quote">
        {data && data.quote}
      </div>
      <span className="author"> - {data && data.author} </span>

      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #E243DE;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </main>
  )
}

export default Index
