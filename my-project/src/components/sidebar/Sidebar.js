import {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { getCats, getCategories, changeCategory } from '../../state/actions/actions';
import styled from 'styled-components'

const StyledSidebar = styled.div`
    background: #99ccff;
    padding: 2%;
    width: 100%;
    min-height: 100vh
`;
const StyledButtonCategory = styled.button`
    :hover {
        background-color: gray;
    }
    :focus{
        background-color: #adadeb;
    }
    border: 2px solid #6600ff;
    color: #6600ff;
    font-size: 18px;
    padding: 5px 25px;
    border-radius: 5px;
    width: 60%;
    max-width: 180px;
    margin-top: 20px;
    overflow: auto;
    cursor:pointer
`;
const Sidebar = ({ getCategories, categories, getCats, changeCategory }) => {
    const [imageCategory, setImageCategory] = useState({id: null, name: ''})
    const setCategory = (imageCategory) => {
        setImageCategory(imageCategory.id)
        changeCategory(imageCategory)
    }
    useEffect(() => {
        getCats(10, imageCategory)
    }, [getCats, imageCategory])


    useEffect(() => {
        getCategories()
    }, [getCategories])


    return (
        <StyledSidebar>
            {categories && categories.map((item) => (
                <div key={item.id}>
                    <StyledButtonCategory onClick={() => setCategory(item)}>{item.name}</StyledButtonCategory>
                </div>
            ))}
        </StyledSidebar>
    )
}

const mapStateToProps = (state) => ({
    categories: state.categories
})
const mapDispatchToProps = {
    getCategories,
    getCats,
    changeCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)