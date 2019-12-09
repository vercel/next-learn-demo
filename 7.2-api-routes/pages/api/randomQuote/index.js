import { quotes } from '../../../quotes'

export default (req, res) => {
  const randomQuote = quotes[ Math.floor(Math.random()*quotes.length) ]
  res.status(200).json( randomQuote )
}
