import React from 'react'
import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'



function QuoteGenerator() {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('Thinking is the capital, Enterprise is the way, Hard Work is the solution.');
  const [author, setAuthor] = useState('Abdul Kalam');
  const [backgroundImage, setBackgroundImage] = useState('./src/assets/AbdulKalam.jpg')

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
      const imagePath = './src/assets/Rumi.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abdul Kalam') {
      const imagePath = './src/assets/AbdulKalam.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Bill Gates') {
      const imagePath = './src/assets/BillGates.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abu Bakr (R.A)') {
      const imagePath = './src/assets/AbuBakr.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Albert Einstein') {
      const imagePath = './src/assets/AlbertEinstein.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abraham Lincoln') {
      const imagePath = './src/assets/AbrahamLincoln.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Oprah Winfrey') {
      const imagePath = './src/assets/OprahWinfrey.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Muhammad Ali') {
      const imagePath = './src/assets/MuhammadAli.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'William Shakespeare') {
      const imagePath = './src/assets/WilliamShakespeare.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Mother Teresa') {
      const imagePath = './src/assets/MotherTeresa.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Nelson Mandela') {
      const imagePath = './src/assets/NelsonMandela.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Umar ibn Al-Khattāb (R.A)') {
      const imagePath = './src/assets/UmaribnAlKhattab.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Walt Disney') {
      const imagePath = './src/assets/WaltDisney.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Aristotle') {
      const imagePath = './src/assets/Aristotle.jpg';
      setBackgroundImage(imagePath);
    }
    else {
      const imagePath = './src/assets/AliibnAbiTalib.jpg';
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