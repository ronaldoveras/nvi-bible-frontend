const { useState, useEffect } = require("react");
import * as S from '../src/styles/styles'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import styled from 'styled-components';
import FormTitle from '../src/components/FormTitle';
import Bar from '../src/components/Bar';
import {loadBooks, retrieveVerse} from '../src/services/integration';

const Home = ({ books }) => {

  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [selectedVerse, setSelectedVerse] = useState("");

  async function buscarVerse() {
    const json = await retrieveVerse(book,chapter, verse)
    setSelectedVerse(json)
    return { props: { selectedVerse: json } }
  };


  function onChangeBook(optionSelected) {
    setBook(optionSelected.target.value);
    return;
  };

  function onChangeChapter(optionSelected) {
    setChapter(optionSelected.target.value);
    return;
  };

  function onChangeVerse(optionSelected) {
    setVerse(optionSelected.target.value);
    return;
  };


  return (
    <S.Container>
      <Header title='NVI Bible' />
      <HeaderImage />
      <FormTitle />
      <S.FormSection >
        <div>
        <label htmlFor="book-select">Choose a Book: </label>
        <S.StyledSelect
          id="book-select"
          value={book}
          onChange={onChangeBook}
        >
          {books.map((value) => {
            return <option key={value} value={value}>{value}</option>
          })}

        </S.StyledSelect>
        </div>
        <div>
        <label htmlFor="chapter-select">Choose a Chapter: </label>
        <S.StyledSelect
          id="chapter-select"
          value={chapter}
          onChange={onChangeChapter}
        >
          {[...Array(60).keys()].map(i => {
            i + 1;
            return <option key={i} value={i}>{i}</option>
          })}
        </S.StyledSelect>
        </div>
        <div>
        <label htmlFor="verse-select">Choose a Verse: </label>
        <S.StyledSelect
          id="verse-select"
          value={verse}
          onChange={onChangeVerse}
        >
          {[...Array(60).keys()].map(i => {
            i + 1;
            return <option key={i} value={i}>{i}</option>
          })}
        </S.StyledSelect>
        </div>
      </S.FormSection>

      <S.CentralizedSection>
        <S.SearchButton onClick={buscarVerse}>Search</S.SearchButton>
        <S.ContextButton>Contexto</S.ContextButton>
      </S.CentralizedSection>
      
      <Bar/>

      <S.CentralizedSection>
       {selectedVerse.length > 0 &&  <h3>           {selectedVerse}         </h3> }
      </S.CentralizedSection>
      
      <S.FooterSection>
        <Footer />
      </S.FooterSection>

    </S.Container>

  );
}

export default Home

const HeaderImage = styled.img.attrs(
  props => ({'src': '/bible.jpg'})
)`
  width: 100%;
  height: 200px;
`;


export async function getStaticProps() {
  const dados = await loadBooks()
  return { props: { books: dados} };
};


