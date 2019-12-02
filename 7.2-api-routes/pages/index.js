import fetch from 'isomorphic-unfetch'

const Index = ({ randomQuote }) => (
  <main className="center">
    <div className="quote">
      {randomQuote.quote}
    </div>
    <span className="author"> - {randomQuote.author}</span>

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

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/randomQuote')
  const data = await res.json()

  console.log(data)
  return {
    randomQuote: data
  }
}

export default Index
