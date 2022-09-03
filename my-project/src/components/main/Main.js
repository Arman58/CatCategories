import {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {getCats} from '../../state/actions/actions';
import Cat from "../cats/Cat";
import styled from 'styled-components'

const StyledMainContent = styled.div`
  background: #e6e6e6;
  padding: 2%;
  text-align: center;
  min-height: 100vh
`
const StyledBoardItems = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
`

const StyledMoreItemsButton = styled.button`
  margin-top: 30px;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  border: none;
  font-size: 14px;
  font-family: inherit;
  color: #fff;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;

  :hover {
    animation: ani 8s linear infinite;
    border: none;
  }

  @keyframes ani {
    0% {
      background-position: 0;
    }

    100% {
      background-position: 400%;
    }
  }

  :before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }

  :hover::before {
    filter: blur(20px);
  }

  :active {
    background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  }

`

function Main({cats, getCats, category}) {

    const [limit, setLimit] = useState(10)

    const limitImage = () => {
        setLimit(limit + 10);
    }

    useEffect(() => {
        getCats(limit, category.id)
    }, [limit, getCats])
    return (
        <StyledMainContent>
            <StyledBoardItems>
                {cats && cats.map((item, index) => (
                    <Cat key={index.toString()} url={item.url}/>
                ))}
            </StyledBoardItems>
            <StyledMoreItemsButton onClick={limitImage}>Load more </StyledMoreItemsButton>
        </StyledMainContent>
    )
}

const mapStateToProps = (state) => ({
    cats: state.cats,
    category: state.category
})
const mapDispatchToProps = {
    getCats
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
