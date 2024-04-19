import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Display from './comp';
// import distable from './table';
import './Header.css';
import './QuizStyles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Footer/>
  </React.StrictMode>
);

function Header() {
  return(
        <div className="header">
            <h1>Take a short Java Quiz </h1>
            <div className="social-links">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
    
    
  )
}
function Content(){
  return(
    <div>
      
      <Question1/>
      <Question2/>
      <Question3/>
    </div>
  )
}

function Question1() {
  return (
      <div className="quiz-container">
          <h2>Java Quiz 1</h2>

          <div className="question">
              <p>1. What is the capital of Java?</p>
              <div className="options">
                  <label>
                      <input type="radio" name="q1" value="a" />
                      A. Jakarta
                  </label>
                  <label>
                      <input type="radio" name="q1" value="b" />
                      B. Bandung
                  </label>
                  <label>
                      <input type="radio" name="q1" value="c" />
                      C. Surabaya
                  </label>
              </div>
          </div>
      </div>
  );
}

function Question2() {
  return (
      <div className="quiz-container">
          <h2>Java Quiz 2</h2>

          <div className="question">
              <p>2. Which of the following is a data type in Java?</p>
              <div className="options">
                  <label>
                      <input type="radio" name="q2" value="a" />
                      A. Integer
                  </label>
                  <label>
                      <input type="radio" name="q2" value="b" />
                      B. Float
                  </label>
                  <label>
                      <input type="radio" name="q2" value="c" />
                      C. Array
                  </label>
              </div>
          </div>
      </div>
  );
}
function Question3() {
  return (
      <div className="quiz-container">
          <h2>Java Quiz 3</h2>

          <div className="question">
              <p>3. Which keyword is used to define a subclass in Java?</p>
              <div className="options">
                  <label>
                      <input type="radio" name="q3" value="a" />
                      A. super
                  </label>
                  <label>
                      <input type="radio" name="q3" value="b" />
                      B. class
                  </label>
                  <label>
                      <input type="radio" name="q3" value="c" />
                      C. extends
                  </label>
              </div>
          </div>
      </div>
  );
}

function Footer(){
  return(
    <div>
    
    <pre>Thank you for 
      attending quiz</pre>
    </div>
  )
}




