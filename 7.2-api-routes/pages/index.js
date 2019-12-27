export default function Index() {
  return (
    <main className="center">
      <div className="quote">Write tests, not too many, mostly integration</div>
      <span className="author"> - Guillermo Rauch </span>

      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
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
