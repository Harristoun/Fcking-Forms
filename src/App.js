import '../src/style.css'
import React, {useState} from 'react'
function App() {

  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  const [click, setClick] = useState(false)

  const handleText = (e) => {
    setText(e.target.value)
    if(e.target.value === ''){
      setIsError(true)
    }else{
      setIsError(false)
    }
  }

  const handleBlur = () => {
    if(text === ''){
      setIsError(true)
    }else{
      setIsError(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setClick(!click)
    setText('')
   
  }

  return (
    <>
    <div className='container'>
      <form>
      <input className='input' type='text' value={text} onChange={handleText} onBlur={handleBlur}/>
      <button disabled={!text} onClick={handleSubmit} className='button'>Отправить</button>
      </form>
      {isError && <div className='emply'>Внимание! Поле не должно быть пустым!</div>}
      {click && <div className='send'>Message is send</div>}
    </div>
    </>
  );
}

export default App;