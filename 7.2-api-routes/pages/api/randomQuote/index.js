import { quotes } from '../../../quotes'

export default (req, res) => {
  const randomQuote = quotes[ Math.floor(Math.random()*quotes.length) ]
  // console.log(typeof Math)
  res.status(200).json( randomQuote )
}
