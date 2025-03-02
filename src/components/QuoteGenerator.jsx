import React from 'react'
import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'



function QuoteGenerator() {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('Thinking is the capital, Enterprise is the way, Hard Work is the solution.');
  const [author, setAuthor] = useState('Abdul Kalam');
  const [backgroundImage, setBackgroundImage] = useState('./public/images/AbdulKalam.jpg')

  const containerStyle = {

    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then((response) => {
        setQuotes(response.data.quotes);

      })

      .catch((error) => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  const generateQuote = () => {
    if (quotes.length === 0) return;

    const randomId = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomId].quote;
    const newAuthor = quotes[randomId].author;

    // Update state with new quote and author
    setQuote(newQuote);
    setAuthor(newAuthor);

    if (newAuthor === 'Rumi') {
      const imagePath = './public/images/Rumi.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abdul Kalam') {
      const imagePath = './public/images/AbdulKalam.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Bill Gates') {
      const imagePath = './public/images/BillGates.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abu Bakr (R.A)') {
      const imagePath = './public/images/AbuBakr.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Albert Einstein') {
      const imagePath = './public/images/AlbertEinstein.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abraham Lincoln') {
      const imagePath = './public/images/AbrahamLincoln.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Oprah Winfrey') {
      const imagePath = './public/images/OprahWinfrey.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Muhammad Ali') {
      const imagePath = './public/images/MuhammadAli.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'William Shakespeare') {
      const imagePath = './public/images/WilliamShakespeare.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Mother Teresa') {
      const imagePath = './public/images/MotherTeresa.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Nelson Mandela') {
      const imagePath = './public/images/NelsonMandela.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Umar ibn Al-Khattāb (R.A)') {
      const imagePath = './public/images/UmaribnAlKhattab.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Walt Disney') {
      const imagePath = './public/images/WaltDisney.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Aristotle') {
      const imagePath = './public/images/Aristotle.jpg';
      setBackgroundImage(imagePath);
    }
    else {
      const imagePath = './public/images/AliibnAbiTalib.jpg';
      setBackgroundImage(imagePath);
    }

  }

  const textStyle = {
    color: 'white',
    fontSize: '50px',
  }



  return (
    <div>

      <div style={containerStyle}>
        <h1 style={{ textAlign: 'right', fontSize: '60px', color: 'yellow' }}>Random Quote Generator</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
          <button style={{width:'70px', height:'50px', marginRight:'100px', fontSize:'15px'}} onClick={generateQuote}>Generate Quote</button>
        </div>

        <div style={{ width: '300px' }}>
          <h3 style={textStyle}>{quote}</h3>
          <h4 style={{ textAlign: 'center', fontSize: '30px', color: 'lightyellow', marginTop:'-50px' }}>- {author} -</h4>
        </div>
      </div>
    </div>

  )
}

export default QuoteGenerator